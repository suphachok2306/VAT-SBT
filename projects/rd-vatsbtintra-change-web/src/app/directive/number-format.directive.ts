import { Directive, OnInit, forwardRef, ElementRef, Input, HostListener, Inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

@Directive({
    selector: '[libNumberFormat]',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NumberFormatDirective),
            multi: true
        }
    ]
})
export class NumberFormatDirective implements ControlValueAccessor, OnInit {
    @Input() isZero = false;
    private _oldValueForDetectChange = '';
    private _oldValue = '';
    private _displayValue = '';
    private _max = 0;
    private _decimal = 0;
    private _format = false;
    private _formElement!: HTMLInputElement;
    private _specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'Delete'];
    private _regExNumber: RegExp = new RegExp(/^[0-9]*$/g);
    private _regExNumberAndDecimal: RegExp = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
    private _oldSelectionStart = 0;
    private _detectDelete = false;
    private _detectBackspace = false;
    private _regExNumberNotZero: RegExp = new RegExp(/^[1-9]\d*$/g);

    public onChange = (_: any) => { };
    public onTouch = () => { };

    constructor(private el: ElementRef, @Inject(DOCUMENT) private document: any) { }

    ngOnInit() {
        this._formElement = this.el.nativeElement;
    }

    @Input('libNumberFormat')
    public set initialize(_value: string) {

        if (_value.indexOf(',') !== -1) {
            this._format = true;
        }
        _value = _value.replace(/,/g, '');
        const data = _value.split('.');

        if (data.length === 1) {
            this._max = data[0].length;
        } else if (data.length === 2) {
            this._max = data[0].length;
            this._decimal = data[1].length;
        } else {
            throw new Error('Wrong format number.');
        }

    }

    @HostListener('keydown', ['$event'])
    onKeyDown(event: KeyboardEvent) {

        if (event.key === 'Backspace') {
            this._detectBackspace = true;
            if (this._formElement.selectionStart) {
                const last: string = this._formElement.value.substring(this._formElement.selectionStart - 1, this._formElement.selectionStart);
                if (this._formElement.selectionStart === this._formElement.selectionEnd && last === ',') {
                    this.setCursorAt(this._formElement.selectionStart - 1);
                    event.preventDefault();
                }
            }
        } else {
            this._detectBackspace = false;
        }

        if (event.key === 'Delete') {
            this._detectDelete = true;
            if (this._formElement.selectionEnd) {
                const last: string = this._formElement.value.substring(this._formElement.selectionEnd, this._formElement.selectionEnd + 1);
                if (this._formElement.selectionStart === this._formElement.selectionEnd && last === ',') {
                    this.setCursorAt(this._formElement.selectionEnd + 1);
                    event.preventDefault();
                }
            }
        } else {
            this._detectDelete = false;
        }

        if (
            this._specialKeys.indexOf(event.key) !== -1
            || (event.keyCode === 65 && (event.ctrlKey || event.metaKey)) // Allow: Ctrl + A
            || (event.keyCode === 67 && (event.ctrlKey || event.metaKey)) // Allow: Ctrl + C
            || (event.keyCode === 86 && (event.ctrlKey || event.metaKey)) // Allow: Ctrl + V
            || (event.keyCode === 88 && (event.ctrlKey || event.metaKey)) // Allow: Ctrl + X
        ) {
            return;
        }

        // Fix Chrome on Android event key not forword to event by get exact output from current cursor on text input
        let keyPressed = event.key;
        let kc = event.which || event.keyCode;
        if (!kc || kc === 229) {
            const ss = this._formElement.selectionStart ? this._formElement.selectionStart - 1 : 0;
            const ssv = ss || 0;
            keyPressed = this._formElement.value.substring(ssv, ssv + 1);
            kc = keyPressed.charCodeAt(0);
        }

        // Fix IE got dot in numeric area key as Decimal
        if (keyPressed === 'Decimal') {
            keyPressed = '.';
        }

        const current: string = this.el.nativeElement.value;
        const firstPart: string = current.substring(0, this._formElement.selectionStart || 0);
        const secondPart: string = current.substring(this._formElement.selectionEnd || 0);
        const next: string = (firstPart.concat(keyPressed) + secondPart).replace(/,/g, '');

        const regEx = this.getRegEx();

        const value = next.split('.');
        if (next && !String(next).match(regEx) || (value[0].length > this._max && this._formElement.selectionStart === this._formElement.selectionEnd) || (this._decimal > 0 && value.length === 2 && (value[1].length > this._decimal && this._formElement.selectionStart === this._formElement.selectionEnd))) {
            event.preventDefault();
        } else {
            if (this._formElement.selectionStart) {
                this._oldSelectionStart = this._formElement.selectionStart;
            }
            this._oldValue = this._formElement.value;
        }

    }

    @HostListener('click', ['$event'])
    public onClick(event: any): void {
        if (this._formElement.selectionStart) {
            this._oldSelectionStart = this._formElement.selectionStart;
        }
        this._oldValue = this._formElement.value;
        this._oldValueForDetectChange = event.target.value;
    }

    @HostListener('input', ['$event'])
    public onInput(event: any): void {
        const value = event.target.value;

        if (value && !String(value).replace(/,/g, '').match(this.getRegEx())) {
            this._formElement.value = '';
        } else {
            if (this._detectBackspace || this._detectDelete) {
                if (this._formElement.selectionStart) {
                    this._oldSelectionStart = this._formElement.selectionStart - 1;
                }
                this._oldValue = this._formElement.value;
            }
            this.onValueChange(value);
        }

    }

    @HostListener('blur', ['$event'])
    public onBlur(event: any): void {
        let value = event.target.value;

        if (value.length > 0 && this._decimal > 0) {
            value = value.replace(/,/g, '');
            value = Number(value).toFixed(this._decimal).toString();
            this._formElement.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        this.onTouch();

        // Fix bug on Internet Explorer and Microsoft Edge not fire change event when set value to input element by javascript.
        // *** 24/12/2021 *** Add IOS Device not fire change event
        const isIEOrEdge = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent) || this.detectIOS();
        if (isIEOrEdge && (value !== this._oldValueForDetectChange)) {
            const evt = document.createEvent('HTMLEvents');
            evt.initEvent('change', false, true);
            event.target.dispatchEvent(evt);
        }
    }

    private detectIOS() {
        return ['MacIntel', 'MacPPC', 'Mac68K', 'Macintosh', 'iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod', 'Pike v7.6 release 92', 'Pike v7.8 release 517'].includes(navigator.platform) || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
    }

    processCursorPosition(_oldValue: string, _oldSelectionStart: number, _newValue: string) {
        let _oldTotalComma = 0;
        let _newTotalComma = 0;
        if (_newValue) {
            _oldValue = _oldValue.substring(0, _oldSelectionStart);
            _oldTotalComma = (_oldValue.match(/,/g) || []).length;
            _newValue = _newValue.substring(0, _oldSelectionStart + 1);
            _newTotalComma = (_newValue.match(/,/g) || []).length;
            this.setCursorAt(_oldSelectionStart + 1 + (_newTotalComma - _oldTotalComma));
        }
    }

    setCursorAt(position: number): void {
        if (this._formElement.setSelectionRange) {
            this._formElement.focus();
            this._formElement.setSelectionRange(position, position);
        }
    }

    writeValue(value: any): void {

        if (value != null && value !== '') {
            if (typeof (value) === 'string') {
                value = value.replace(/,/g, '');
            }
            if (this._decimal > 0) {
                value = Number(value).toFixed(this._decimal);
            }
            value = value.toString();
        }

        this.onValueChange(value, false);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState?(value: boolean): void {
        this._formElement.disabled = value;
    }

    private onValueChange(newValue: string, cursor: boolean = true) {

        if (newValue !== this._displayValue) {
            let value;

            if ((typeof (newValue) !== 'string') && newValue !== null) {
                newValue = newValue + '';
                newValue = Number(newValue).toFixed(this._decimal).toString();
            }

            if ((newValue == null) || (newValue.trim() === '')) {
                value = '';
            } else {
                value = newValue.replace(/,/g, '');
                value = this.removeLeadingZero(value);
            }


            if (this._format) {
                this._displayValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            } else {
                this._displayValue = value;
            }



            this._formElement.value = this._displayValue;
            this.onChange(value);
            if (cursor) {
                this.processCursorPosition(this._oldValue, this._oldSelectionStart, this._displayValue);
            }
        }
    }

    private removeLeadingZero(value: string): string {
        if (value.indexOf('.') === -1) {
            const convertVal = +value;
            value = convertVal.toString();
        }
        return value;
    }

    private getRegEx(): RegExp {
        return (this._decimal > 0) ? this._regExNumberAndDecimal : (this.isZero === true ? this._regExNumber : this._regExNumberNotZero);
    }
}
