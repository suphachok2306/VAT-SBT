import { Directive, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
export class NumberOnlyDirective {
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
NumberOnlyDirective.ɵfac = function NumberOnlyDirective_Factory(t) { return new (t || NumberOnlyDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
NumberOnlyDirective.ɵdir = i0.ɵɵdefineDirective({ type: NumberOnlyDirective, selectors: [["", "libNumberOnly", ""]], hostBindings: function NumberOnlyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function NumberOnlyDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("paste", function NumberOnlyDirective_paste_HostBindingHandler($event) { return ctx.onPaste($event); })("drop", function NumberOnlyDirective_drop_HostBindingHandler($event) { return ctx.onDrop($event); });
    } } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NumberOnlyDirective, [{
        type: Directive,
        args: [{
                selector: '[libNumberOnly]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { onKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], onPaste: [{
            type: HostListener,
            args: ['paste', ['$event']]
        }], onDrop: [{
            type: HostListener,
            args: ['drop', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLW9ubHkuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmQtdmF0c2J0aW50cmEtbGliL3NyYy9saWIvc2hhcmVkL2RpcmVjdGl2ZS9udW1iZXItb25seS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBS3BFLE1BQU0sT0FBTyxtQkFBbUI7SUFpQjlCLFlBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBZnpCLG1CQUFjLEdBQUc7WUFDdkIsV0FBVztZQUNYLFFBQVE7WUFDUixLQUFLO1lBQ0wsUUFBUTtZQUNSLE9BQU87WUFDUCxNQUFNO1lBQ04sS0FBSztZQUNMLFdBQVc7WUFDWCxZQUFZO1lBQ1osT0FBTztZQUNQLE1BQU07WUFDTixPQUFPO1NBQ1IsQ0FBQztRQUdBLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBR0QsU0FBUyxDQUFDLENBQWdCO1FBQ3hCLElBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLHlEQUF5RDtZQUNwRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksZ0JBQWdCO1lBQ3pELENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxnQkFBZ0I7WUFDekQsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLGdCQUFnQjtZQUN6RCxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUksZ0JBQWdCO1lBQ3pELENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxxQkFBcUI7WUFDOUQsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLHFCQUFxQjtZQUM5RCxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLElBQUkscUJBQXFCO1lBQzlELENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsQ0FBQyxxQkFBcUI7VUFDM0Q7WUFDQSxtQ0FBbUM7WUFDbkMsT0FBTztTQUNSO1FBQ0QsbURBQW1EO1FBQ25ELElBQ0UsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEVBQ25DO1lBQ0EsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3BCO0lBQ0gsQ0FBQztJQUdELE9BQU8sQ0FBQyxLQUFxQjs7UUFDM0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sV0FBVyxHQUFXLE9BQUEsS0FBSyxDQUFDLGFBQWEsMENBQUUsT0FBTyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBSyxFQUFFLENBQUMsQ0FBQywwQkFBMEI7UUFDM0gsSUFBSSxXQUFXLEVBQUU7WUFDZixRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDeEQ7SUFDSCxDQUFDO0lBR0QsTUFBTSxDQUFDLEtBQWdCOztRQUNyQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsTUFBTSxRQUFRLFNBQUcsS0FBSyxDQUFDLFlBQVksMENBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7O3NGQTdEVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjswR0FBbkIscUJBQWlCLHFGQUFqQixtQkFBZSxtRkFBZixrQkFBYzs7dUZBQWQsbUJBQW1CO2NBSC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzZEQXVCQyxTQUFTO2tCQURSLFlBQVk7bUJBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBMEJuQyxPQUFPO2tCQUROLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBVWpDLE1BQU07a0JBREwsWUFBWTttQkFBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2xpYk51bWJlck9ubHldJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnVtYmVyT25seURpcmVjdGl2ZSB7XHJcblxyXG4gIHByaXZhdGUgbmF2aWdhdGlvbktleXMgPSBbXHJcbiAgICAnQmFja3NwYWNlJyxcclxuICAgICdEZWxldGUnLFxyXG4gICAgJ1RhYicsXHJcbiAgICAnRXNjYXBlJyxcclxuICAgICdFbnRlcicsXHJcbiAgICAnSG9tZScsXHJcbiAgICAnRW5kJyxcclxuICAgICdBcnJvd0xlZnQnLFxyXG4gICAgJ0Fycm93UmlnaHQnLFxyXG4gICAgJ0NsZWFyJyxcclxuICAgICdDb3B5JyxcclxuICAgICdQYXN0ZSdcclxuICBdO1xyXG4gIGlucHV0RWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLm5hdmlnYXRpb25LZXlzLmluZGV4T2YoZS5rZXkpID4gLTEgfHwgLy8gQWxsb3c6IG5hdmlnYXRpb24ga2V5czogYmFja3NwYWNlLCBkZWxldGUsIGFycm93cyBldGMuXHJcbiAgICAgIChlLmtleSA9PT0gJ2EnICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrQVxyXG4gICAgICAoZS5rZXkgPT09ICdjJyAmJiBlLmN0cmxLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDdHJsK0NcclxuICAgICAgKGUua2V5ID09PSAndicgJiYgZS5jdHJsS2V5ID09PSB0cnVlKSB8fCAvLyBBbGxvdzogQ3RybCtWXHJcbiAgICAgIChlLmtleSA9PT0gJ3gnICYmIGUuY3RybEtleSA9PT0gdHJ1ZSkgfHwgLy8gQWxsb3c6IEN0cmwrWFxyXG4gICAgICAoZS5rZXkgPT09ICdhJyAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDbWQrQSAoTWFjKVxyXG4gICAgICAoZS5rZXkgPT09ICdjJyAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDbWQrQyAoTWFjKVxyXG4gICAgICAoZS5rZXkgPT09ICd2JyAmJiBlLm1ldGFLZXkgPT09IHRydWUpIHx8IC8vIEFsbG93OiBDbWQrViAoTWFjKVxyXG4gICAgICAoZS5rZXkgPT09ICd4JyAmJiBlLm1ldGFLZXkgPT09IHRydWUpIC8vIEFsbG93OiBDbWQrWCAoTWFjKVxyXG4gICAgKSB7XHJcbiAgICAgIC8vIGxldCBpdCBoYXBwZW4sIGRvbid0IGRvIGFueXRoaW5nXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIEVuc3VyZSB0aGF0IGl0IGlzIGEgbnVtYmVyIGFuZCBzdG9wIHRoZSBrZXlwcmVzc1xyXG4gICAgaWYgKFxyXG4gICAgICAoZS5zaGlmdEtleSB8fCAoZS5rZXlDb2RlIDwgNDggfHwgZS5rZXlDb2RlID4gNTcpKSAmJlxyXG4gICAgICAoZS5rZXlDb2RlIDwgOTYgfHwgZS5rZXlDb2RlID4gMTA1KVxyXG4gICAgKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3Bhc3RlJywgWyckZXZlbnQnXSlcclxuICBvblBhc3RlKGV2ZW50OiBDbGlwYm9hcmRFdmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHBhc3RlZElucHV0OiBzdHJpbmcgPSBldmVudC5jbGlwYm9hcmREYXRhPy5nZXREYXRhKCd0ZXh0L3BsYWluJykucmVwbGFjZSgvXFxEL2csICcnKSB8fCAnJzsgLy8gZ2V0IGEgZGlnaXQtb25seSBzdHJpbmdcclxuICAgIGlmIChwYXN0ZWRJbnB1dCkge1xyXG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VGV4dCcsIGZhbHNlLCBwYXN0ZWRJbnB1dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcclxuICBvbkRyb3AoZXZlbnQ6IERyYWdFdmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRleHREYXRhID0gZXZlbnQuZGF0YVRyYW5zZmVyPy5nZXREYXRhKCd0ZXh0JykucmVwbGFjZSgvXFxEL2csICcnKTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LmZvY3VzKCk7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaW5zZXJ0VGV4dCcsIGZhbHNlLCB0ZXh0RGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==