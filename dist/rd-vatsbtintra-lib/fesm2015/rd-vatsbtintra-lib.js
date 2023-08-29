import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, EventEmitter, ɵɵelement, ɵɵadvance, ɵɵtextInterpolate, ɵɵtextInterpolate2, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵdirectiveInject, ElementRef, ɵɵdefineDirective, ɵɵlistener, ɵɵProvidersFeature, forwardRef, Directive, Inject, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DOCUMENT } from '@angular/common';

class RdVatsbtintraLibService {
    constructor() { }
}
RdVatsbtintraLibService.ɵfac = function RdVatsbtintraLibService_Factory(t) { return new (t || RdVatsbtintraLibService)(); };
RdVatsbtintraLibService.ɵprov = ɵɵdefineInjectable({ token: RdVatsbtintraLibService, factory: RdVatsbtintraLibService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RdVatsbtintraLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class RdVatsbtintraLibComponent {
    constructor() { }
    ngOnInit() {
    }
}
RdVatsbtintraLibComponent.ɵfac = function RdVatsbtintraLibComponent_Factory(t) { return new (t || RdVatsbtintraLibComponent)(); };
RdVatsbtintraLibComponent.ɵcmp = ɵɵdefineComponent({ type: RdVatsbtintraLibComponent, selectors: [["lib-rd-vatsbtintra-lib"]], decls: 2, vars: 0, template: function RdVatsbtintraLibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " rd-vatsbtintra-lib works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RdVatsbtintraLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-rd-vatsbtintra-lib',
                template: `
    <p>
      rd-vatsbtintra-lib works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class NavbarComponent {
    constructor() {
        this.clickBanner = new EventEmitter(false);
    }
    ngOnInit() {
    }
    onClick() {
        this.clickBanner.emit(true);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = ɵɵdefineComponent({ type: NavbarComponent, selectors: [["lib-navbar"]], inputs: { profileData: "profileData" }, outputs: { clickBanner: "clickBanner" }, decls: 52, vars: 3, consts: [[1, "navbar", "navbar-light", "bg-white", "header", "fixed-top"], [1, "d-flex", "align-items-center"], [1, "navbar-brand"], ["src", "lib-assets/images/Logo-2021.svg", "width", "200", "alt", "", 1, "d-inline-block", "align-top", "pr-3", "line-r"], ["src", "lib-assets/images/VAT_SBT_Intranet.png", "width", "220"], ["method", "post", "action", "index.html", 1, "search-box", "form-group", "m-0", "w-50", "pr-3", "pl-3"], [1, "form-icon"], [1, "material-icons-outlined", "left"], ["type", "text", "placeholder", "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E43\u0E1A\u0E04\u0E33\u0E02\u0E2D/\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E04\u0E33\u0E02\u0E2D", 1, "form-control"], [1, "results"], ["href", "#"], [1, "navbar-expand"], [1, "navbar-nav"], [1, "nav-item", "dropdown", "noti-wrap"], ["href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link"], [1, "material-icons-outlined"], [1, "noti-icon-badge"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-right"], [1, "title", "p-3"], ["href", "#", 1, "dropdown-item"], [1, "nav-item", "dropdown", "user-name"], ["href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "bodybold"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nav", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "a", 2);
        ɵɵelement(3, "img", 3);
        ɵɵelementEnd();
        ɵɵelement(4, "img", 4);
        ɵɵelementEnd();
        ɵɵelementStart(5, "form", 5);
        ɵɵelementStart(6, "div", 6);
        ɵɵelementStart(7, "i", 7);
        ɵɵtext(8, "search");
        ɵɵelementEnd();
        ɵɵelement(9, "input", 8);
        ɵɵelementStart(10, "ul", 9);
        ɵɵelementStart(11, "li");
        ɵɵelementStart(12, "a", 10);
        ɵɵtext(13, "01005370-256502221-11-000003");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "li");
        ɵɵelementStart(15, "a", 10);
        ɵɵtext(16, "01005370-256502221-11-000004");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(17, "li");
        ɵɵelementStart(18, "a", 10);
        ɵɵtext(19, "01005370-256502221-11-000005");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(20, "li");
        ɵɵelementStart(21, "a", 10);
        ɵɵtext(22, "01005370-256502221-11-000006");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(23, "nav", 11);
        ɵɵelementStart(24, "ul", 12);
        ɵɵelementStart(25, "li", 13);
        ɵɵelementStart(26, "a", 14);
        ɵɵelementStart(27, "span", 15);
        ɵɵtext(28, "notifications");
        ɵɵelementEnd();
        ɵɵelement(29, "span", 16);
        ɵɵelementEnd();
        ɵɵelementStart(30, "div", 17);
        ɵɵelementStart(31, "p", 18);
        ɵɵtext(32, "You have 3 Notifications");
        ɵɵelementEnd();
        ɵɵelementStart(33, "a", 19);
        ɵɵtext(34, "Action");
        ɵɵelementEnd();
        ɵɵelementStart(35, "a", 19);
        ɵɵtext(36, "Another action");
        ɵɵelementEnd();
        ɵɵelementStart(37, "a", 19);
        ɵɵtext(38, "Something else here");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(39, "li", 20);
        ɵɵelementStart(40, "a", 21);
        ɵɵelementStart(41, "div", 22);
        ɵɵtext(42);
        ɵɵelement(43, "br");
        ɵɵtext(44);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(45, "div", 17);
        ɵɵelementStart(46, "a", 19);
        ɵɵtext(47, "Action");
        ɵɵelementEnd();
        ɵɵelementStart(48, "a", 19);
        ɵɵtext(49, "Another action");
        ɵɵelementEnd();
        ɵɵelementStart(50, "a", 19);
        ɵɵtext(51, "Something else here");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(42);
        ɵɵtextInterpolate(ctx.profileData == null ? null : ctx.profileData.name);
        ɵɵadvance(2);
        ɵɵtextInterpolate2("", ctx.profileData == null ? null : ctx.profileData.programId, " - ", ctx.profileData == null ? null : ctx.profileData.date, "");
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{
                selector: 'lib-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, { profileData: [{
            type: Input
        }], clickBanner: [{
            type: Output
        }] }); })();

class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = ɵɵdefineComponent({ type: MenuComponent, selectors: [["lib-menu"]], decls: 2, vars: 0, template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "menu works!");
        ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(MenuComponent, [{
        type: Component,
        args: [{
                selector: 'lib-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return []; }, null); })();

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = ɵɵdefineComponent({ type: FooterComponent, selectors: [["lib-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "footer works!");
        ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(FooterComponent, [{
        type: Component,
        args: [{
                selector: 'lib-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();

class RdVatsbtintraLibModule {
}
RdVatsbtintraLibModule.ɵfac = function RdVatsbtintraLibModule_Factory(t) { return new (t || RdVatsbtintraLibModule)(); };
RdVatsbtintraLibModule.ɵmod = ɵɵdefineNgModule({ type: RdVatsbtintraLibModule });
RdVatsbtintraLibModule.ɵinj = ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(RdVatsbtintraLibModule, { declarations: [RdVatsbtintraLibComponent,
        NavbarComponent,
        MenuComponent,
        FooterComponent], exports: [RdVatsbtintraLibComponent,
        NavbarComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RdVatsbtintraLibModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    RdVatsbtintraLibComponent,
                    NavbarComponent,
                    MenuComponent,
                    FooterComponent,
                ],
                imports: [],
                exports: [
                    RdVatsbtintraLibComponent,
                    NavbarComponent,
                ]
            }]
    }], null, null); })();

class NumberFormatDirective {
    constructor(el, document) {
        this.el = el;
        this.document = document;
        this.isZero = false;
        this._oldValueForDetectChange = '';
        this._oldValue = '';
        this._displayValue = '';
        this._max = 0;
        this._decimal = 0;
        this._format = false;
        this._specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'Delete'];
        this._regExNumber = new RegExp(/^[0-9]*$/g);
        this._regExNumberAndDecimal = new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
        this._oldSelectionStart = 0;
        this._detectDelete = false;
        this._detectBackspace = false;
        this._regExNumberNotZero = new RegExp(/^[1-9]\d*$/g);
        this.onChange = (_) => { };
        this.onTouch = () => { };
    }
    ngOnInit() {
        this._formElement = this.el.nativeElement;
    }
    set initialize(_value) {
        if (_value.indexOf(',') !== -1) {
            this._format = true;
        }
        _value = _value.replace(/,/g, '');
        const data = _value.split('.');
        if (data.length === 1) {
            this._max = data[0].length;
        }
        else if (data.length === 2) {
            this._max = data[0].length;
            this._decimal = data[1].length;
        }
        else {
            throw new Error('Wrong format number.');
        }
    }
    onKeyDown(event) {
        if (event.key === 'Backspace') {
            this._detectBackspace = true;
            if (this._formElement.selectionStart) {
                const last = this._formElement.value.substring(this._formElement.selectionStart - 1, this._formElement.selectionStart);
                if (this._formElement.selectionStart === this._formElement.selectionEnd && last === ',') {
                    this.setCursorAt(this._formElement.selectionStart - 1);
                    event.preventDefault();
                }
            }
        }
        else {
            this._detectBackspace = false;
        }
        if (event.key === 'Delete') {
            this._detectDelete = true;
            if (this._formElement.selectionEnd) {
                const last = this._formElement.value.substring(this._formElement.selectionEnd, this._formElement.selectionEnd + 1);
                if (this._formElement.selectionStart === this._formElement.selectionEnd && last === ',') {
                    this.setCursorAt(this._formElement.selectionEnd + 1);
                    event.preventDefault();
                }
            }
        }
        else {
            this._detectDelete = false;
        }
        if (this._specialKeys.indexOf(event.key) !== -1
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
        const current = this.el.nativeElement.value;
        const firstPart = current.substring(0, this._formElement.selectionStart || 0);
        const secondPart = current.substring(this._formElement.selectionEnd || 0);
        const next = (firstPart.concat(keyPressed) + secondPart).replace(/,/g, '');
        const regEx = this.getRegEx();
        const value = next.split('.');
        if (next && !String(next).match(regEx) || (value[0].length > this._max && this._formElement.selectionStart === this._formElement.selectionEnd) || (this._decimal > 0 && value.length === 2 && (value[1].length > this._decimal && this._formElement.selectionStart === this._formElement.selectionEnd))) {
            event.preventDefault();
        }
        else {
            if (this._formElement.selectionStart) {
                this._oldSelectionStart = this._formElement.selectionStart;
            }
            this._oldValue = this._formElement.value;
        }
    }
    onClick(event) {
        if (this._formElement.selectionStart) {
            this._oldSelectionStart = this._formElement.selectionStart;
        }
        this._oldValue = this._formElement.value;
        this._oldValueForDetectChange = event.target.value;
    }
    onInput(event) {
        const value = event.target.value;
        if (value && !String(value).replace(/,/g, '').match(this.getRegEx())) {
            this._formElement.value = '';
        }
        else {
            if (this._detectBackspace || this._detectDelete) {
                if (this._formElement.selectionStart) {
                    this._oldSelectionStart = this._formElement.selectionStart - 1;
                }
                this._oldValue = this._formElement.value;
            }
            this.onValueChange(value);
        }
    }
    onBlur(event) {
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
    detectIOS() {
        return ['MacIntel', 'MacPPC', 'Mac68K', 'Macintosh', 'iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod', 'Pike v7.6 release 92', 'Pike v7.8 release 517'].includes(navigator.platform) || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
    }
    processCursorPosition(_oldValue, _oldSelectionStart, _newValue) {
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
    setCursorAt(position) {
        if (this._formElement.setSelectionRange) {
            this._formElement.focus();
            this._formElement.setSelectionRange(position, position);
        }
    }
    writeValue(value) {
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
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    setDisabledState(value) {
        this._formElement.disabled = value;
    }
    onValueChange(newValue, cursor = true) {
        if (newValue !== this._displayValue) {
            let value;
            if ((typeof (newValue) !== 'string') && newValue !== null) {
                newValue = newValue + '';
                newValue = Number(newValue).toFixed(this._decimal).toString();
            }
            if ((newValue == null) || (newValue.trim() === '')) {
                value = '';
            }
            else {
                value = newValue.replace(/,/g, '');
                value = this.removeLeadingZero(value);
            }
            if (this._format) {
                this._displayValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
            else {
                this._displayValue = value;
            }
            this._formElement.value = this._displayValue;
            this.onChange(value);
            if (cursor) {
                this.processCursorPosition(this._oldValue, this._oldSelectionStart, this._displayValue);
            }
        }
    }
    removeLeadingZero(value) {
        if (value.indexOf('.') === -1) {
            const convertVal = +value;
            value = convertVal.toString();
        }
        return value;
    }
    getRegEx() {
        return (this._decimal > 0) ? this._regExNumberAndDecimal : (this.isZero === true ? this._regExNumber : this._regExNumberNotZero);
    }
}
NumberFormatDirective.ɵfac = function NumberFormatDirective_Factory(t) { return new (t || NumberFormatDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(DOCUMENT)); };
NumberFormatDirective.ɵdir = ɵɵdefineDirective({ type: NumberFormatDirective, selectors: [["", "libNumberFormat", ""]], hostBindings: function NumberFormatDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown", function NumberFormatDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("click", function NumberFormatDirective_click_HostBindingHandler($event) { return ctx.onClick($event); })("input", function NumberFormatDirective_input_HostBindingHandler($event) { return ctx.onInput($event); })("blur", function NumberFormatDirective_blur_HostBindingHandler($event) { return ctx.onBlur($event); });
    } }, inputs: { isZero: "isZero", initialize: ["libNumberFormat", "initialize"] }, features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NumberFormatDirective),
                multi: true
            }
        ])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NumberFormatDirective, [{
        type: Directive,
        args: [{
                selector: '[libNumberFormat]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NumberFormatDirective),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: ElementRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { isZero: [{
            type: Input
        }], initialize: [{
            type: Input,
            args: ['libNumberFormat']
        }], onKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], onInput: [{
            type: HostListener,
            args: ['input', ['$event']]
        }], onBlur: [{
            type: HostListener,
            args: ['blur', ['$event']]
        }] }); })();

class NumberOnlyDirective {
    constructor(el) {
        this.el = el;
        this.navigationKeys = [
            'Backspace',
            'Delete',
            'Tab',
            'Escape',
            'Enter',
            'Home',
            'End',
            'ArrowLeft',
            'ArrowRight',
            'Clear',
            'Copy',
            'Paste'
        ];
        this.inputElement = el.nativeElement;
    }
    onKeyDown(e) {
        if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
            (e.key === 'a' && e.ctrlKey === true) || // Allow: Ctrl+A
            (e.key === 'c' && e.ctrlKey === true) || // Allow: Ctrl+C
            (e.key === 'v' && e.ctrlKey === true) || // Allow: Ctrl+V
            (e.key === 'x' && e.ctrlKey === true) || // Allow: Ctrl+X
            (e.key === 'a' && e.metaKey === true) || // Allow: Cmd+A (Mac)
            (e.key === 'c' && e.metaKey === true) || // Allow: Cmd+C (Mac)
            (e.key === 'v' && e.metaKey === true) || // Allow: Cmd+V (Mac)
            (e.key === 'x' && e.metaKey === true) // Allow: Cmd+X (Mac)
        ) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) &&
            (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    }
    onPaste(event) {
        var _a;
        event.preventDefault();
        const pastedInput = ((_a = event.clipboardData) === null || _a === void 0 ? void 0 : _a.getData('text/plain').replace(/\D/g, '')) || ''; // get a digit-only string
        if (pastedInput) {
            document.execCommand('insertText', false, pastedInput);
        }
    }
    onDrop(event) {
        var _a;
        event.preventDefault();
        const textData = (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.getData('text').replace(/\D/g, '');
        this.inputElement.focus();
        document.execCommand('insertText', false, textData);
    }
}
NumberOnlyDirective.ɵfac = function NumberOnlyDirective_Factory(t) { return new (t || NumberOnlyDirective)(ɵɵdirectiveInject(ElementRef)); };
NumberOnlyDirective.ɵdir = ɵɵdefineDirective({ type: NumberOnlyDirective, selectors: [["", "libNumberOnly", ""]], hostBindings: function NumberOnlyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown", function NumberOnlyDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("paste", function NumberOnlyDirective_paste_HostBindingHandler($event) { return ctx.onPaste($event); })("drop", function NumberOnlyDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(NumberOnlyDirective, [{
        type: Directive,
        args: [{
                selector: '[libNumberOnly]'
            }]
    }], function () { return [{ type: ElementRef }]; }, { onKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], onPaste: [{
            type: HostListener,
            args: ['paste', ['$event']]
        }], onDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }] }); })();

/*
 * Public API Surface of rd-vatsbtintra-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NavbarComponent, NumberFormatDirective, NumberOnlyDirective, RdVatsbtintraLibComponent, RdVatsbtintraLibModule, RdVatsbtintraLibService };
//# sourceMappingURL=rd-vatsbtintra-lib.js.map
