import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NavbarComponent implements OnInit {
    profileData: {
        name: string;
        programId: string;
        date: string;
    };
    clickBanner: EventEmitter<boolean>;
    constructor();
    ngOnInit(): void;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDef<NavbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<NavbarComponent, "lib-navbar", never, { "profileData": "profileData"; }, { "clickBanner": "clickBanner"; }, never, never>;
}
//# sourceMappingURL=navbar.component.d.ts.map