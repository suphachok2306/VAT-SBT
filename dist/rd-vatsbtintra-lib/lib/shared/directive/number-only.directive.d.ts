import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NumberOnlyDirective {
    el: ElementRef;
    private navigationKeys;
    inputElement: HTMLElement;
    constructor(el: ElementRef);
    onKeyDown(e: KeyboardEvent): void;
    onPaste(event: ClipboardEvent): void;
    onDrop(event: DragEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<NumberOnlyDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<NumberOnlyDirective, "[libNumberOnly]", never, {}, {}, never>;
}
//# sourceMappingURL=number-only.directive.d.ts.map