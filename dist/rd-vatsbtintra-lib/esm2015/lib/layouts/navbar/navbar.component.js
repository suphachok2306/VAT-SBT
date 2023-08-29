import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class NavbarComponent {
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
NavbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["lib-navbar"]], inputs: { profileData: "profileData" }, outputs: { clickBanner: "clickBanner" }, decls: 52, vars: 3, consts: [[1, "navbar", "navbar-light", "bg-white", "header", "fixed-top"], [1, "d-flex", "align-items-center"], [1, "navbar-brand"], ["src", "lib-assets/images/Logo-2021.svg", "width", "200", "alt", "", 1, "d-inline-block", "align-top", "pr-3", "line-r"], ["src", "lib-assets/images/VAT_SBT_Intranet.png", "width", "220"], ["method", "post", "action", "index.html", 1, "search-box", "form-group", "m-0", "w-50", "pr-3", "pl-3"], [1, "form-icon"], [1, "material-icons-outlined", "left"], ["type", "text", "placeholder", "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E43\u0E1A\u0E04\u0E33\u0E02\u0E2D/\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E43\u0E1A\u0E04\u0E33\u0E02\u0E2D", 1, "form-control"], [1, "results"], ["href", "#"], [1, "navbar-expand"], [1, "navbar-nav"], [1, "nav-item", "dropdown", "noti-wrap"], ["href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link"], [1, "material-icons-outlined"], [1, "noti-icon-badge"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-right"], [1, "title", "p-3"], ["href", "#", 1, "dropdown-item"], [1, "nav-item", "dropdown", "user-name"], ["href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "bodybold"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "a", 2);
        i0.ɵɵelement(3, "img", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "img", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "form", 5);
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵelementStart(7, "i", 7);
        i0.ɵɵtext(8, "search");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "input", 8);
        i0.ɵɵelementStart(10, "ul", 9);
        i0.ɵɵelementStart(11, "li");
        i0.ɵɵelementStart(12, "a", 10);
        i0.ɵɵtext(13, "01005370-256502221-11-000003");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "li");
        i0.ɵɵelementStart(15, "a", 10);
        i0.ɵɵtext(16, "01005370-256502221-11-000004");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "li");
        i0.ɵɵelementStart(18, "a", 10);
        i0.ɵɵtext(19, "01005370-256502221-11-000005");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "li");
        i0.ɵɵelementStart(21, "a", 10);
        i0.ɵɵtext(22, "01005370-256502221-11-000006");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "nav", 11);
        i0.ɵɵelementStart(24, "ul", 12);
        i0.ɵɵelementStart(25, "li", 13);
        i0.ɵɵelementStart(26, "a", 14);
        i0.ɵɵelementStart(27, "span", 15);
        i0.ɵɵtext(28, "notifications");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(29, "span", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "div", 17);
        i0.ɵɵelementStart(31, "p", 18);
        i0.ɵɵtext(32, "You have 3 Notifications");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "a", 19);
        i0.ɵɵtext(34, "Action");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "a", 19);
        i0.ɵɵtext(36, "Another action");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "a", 19);
        i0.ɵɵtext(38, "Something else here");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "li", 20);
        i0.ɵɵelementStart(40, "a", 21);
        i0.ɵɵelementStart(41, "div", 22);
        i0.ɵɵtext(42);
        i0.ɵɵelement(43, "br");
        i0.ɵɵtext(44);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "div", 17);
        i0.ɵɵelementStart(46, "a", 19);
        i0.ɵɵtext(47, "Action");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "a", 19);
        i0.ɵɵtext(49, "Another action");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(50, "a", 19);
        i0.ɵɵtext(51, "Something else here");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(42);
        i0.ɵɵtextInterpolate(ctx.profileData == null ? null : ctx.profileData.name);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate2("", ctx.profileData == null ? null : ctx.profileData.programId, " - ", ctx.profileData == null ? null : ctx.profileData.date, "");
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3JkLXZhdHNidGludHJhLWxpYi9zcmMvbGliL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZC12YXRzYnRpbnRyYS1saWIvc3JjL2xpYi9sYXlvdXRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFRL0UsTUFBTSxPQUFPLGVBQWU7SUFLMUI7UUFGVSxnQkFBVyxHQUFHLElBQUksWUFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBRXpDLENBQUM7SUFFakIsUUFBUTtJQUVSLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OEVBYlUsZUFBZTtvREFBZixlQUFlO1FDUTFCLDhCQUEyRDtRQUN6RCw4QkFBd0M7UUFDdEMsNEJBQXlCO1FBQ3ZCLHlCQUE0RztRQUM5RyxpQkFBSTtRQUNKLHlCQUE4RDtRQUNoRSxpQkFBTTtRQUNOLCtCQUF5RjtRQUN2Riw4QkFBdUI7UUFDckIsNEJBQXdDO1FBQUEsc0JBQU07UUFBQSxpQkFBSTtRQUNsRCwyQkFBaUY7UUFDakYsOEJBQXFCO1FBQ3BCLDJCQUFJO1FBQUEsOEJBQVk7UUFBQSw2Q0FBNEI7UUFBQSxpQkFBSTtRQUFBLGlCQUFLO1FBQ3JELDJCQUFJO1FBQUEsOEJBQVk7UUFBQSw2Q0FBNEI7UUFBQSxpQkFBSTtRQUFBLGlCQUFLO1FBQ3JELDJCQUFJO1FBQUEsOEJBQVk7UUFBQSw2Q0FBNEI7UUFBQSxpQkFBSTtRQUFBLGlCQUFLO1FBQ3JELDJCQUFJO1FBQUEsOEJBQVk7UUFBQSw2Q0FBNEI7UUFBQSxpQkFBSTtRQUFBLGlCQUFLO1FBQ3ZELGlCQUFLO1FBQ04saUJBQU07UUFDVCxpQkFBTztRQUNOLGdDQUEyQjtRQUN6QiwrQkFBdUI7UUFDckIsK0JBQXdDO1FBQ3RDLDhCQUFvSDtRQUNsSCxpQ0FBc0M7UUFBQSw4QkFBYTtRQUFBLGlCQUFPO1FBQzFELDRCQUFxQztRQUN2QyxpQkFBSTtRQUNKLGdDQUF3RjtRQUN0Riw4QkFBcUI7UUFBQSx5Q0FBd0I7UUFBQSxpQkFBSTtRQUNqRCw4QkFBa0M7UUFBQSx1QkFBTTtRQUFBLGlCQUFJO1FBQzVDLDhCQUFrQztRQUFBLCtCQUFjO1FBQUEsaUJBQUk7UUFDcEQsOEJBQWtDO1FBQUEsb0NBQW1CO1FBQUEsaUJBQUk7UUFDM0QsaUJBQU07UUFDUixpQkFBSztRQUNMLCtCQUF5QztRQUN2Qyw4QkFBb0k7UUFDbEksZ0NBQXNCO1FBQUEsYUFBdUI7UUFBQSxzQkFBSTtRQUFBLGFBQXNEO1FBQUEsaUJBQU07UUFDL0csaUJBQUk7UUFDSixnQ0FBd0Y7UUFDdEYsOEJBQWtDO1FBQUEsdUJBQU07UUFBQSxpQkFBSTtRQUM1Qyw4QkFBa0M7UUFBQSwrQkFBYztRQUFBLGlCQUFJO1FBQ3BELDhCQUFrQztRQUFBLG9DQUFtQjtRQUFBLGlCQUFJO1FBQzNELGlCQUFNO1FBQ1IsaUJBQUs7UUFDUCxpQkFBSztRQUNQLGlCQUFNO1FBQ1IsaUJBQU07O1FBVjBCLGdCQUF1QjtRQUF2QiwyRUFBdUI7UUFBSSxlQUFzRDtRQUF0RCx1SkFBc0Q7O3VGRDNDdEcsZUFBZTtjQUwzQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDO3NDQUdVLFdBQVc7a0JBQW5CLEtBQUs7WUFDSSxXQUFXO2tCQUFwQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLW5hdmJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmF2YmFyLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHByb2ZpbGVEYXRhITogeyBuYW1lOiBzdHJpbmcsIHByb2dyYW1JZDogc3RyaW5nLCBkYXRlOiBzdHJpbmcgfTtcclxuICBAT3V0cHV0KCkgY2xpY2tCYW5uZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgb25DbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tCYW5uZXIuZW1pdCh0cnVlKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjwhLS0gPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItbGlnaHQgYmctbGlnaHQgaGVhZGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtci1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIChjbGljayk9XCJvbkNsaWNrKClcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwibGliLWFzc2V0cy9pbWFnZXMvTG9nby0yMDIxLnN2Z1wiIHdpZHRoPVwiMjAwXCIgY2xhc3M9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3AgcHItMyBsaW5lLXJcIiBhbHQ9XCJcIj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGltZyBzcmM9XCJsaWItYXNzZXRzL2ltYWdlcy9sb2dvLW52LnN2Z1wiIHdpZHRoPVwiMTYwXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGV4dC1yaWdodFwiICpuZ0lmPVwicHJvZmlsZURhdGFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keWJvbGRcIj57eyBwcm9maWxlRGF0YT8ubmFtZSB9fTwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzPVwic21hbGxcIj57eyBwcm9maWxlRGF0YT8ucHJvZ3JhbUlkIH19IC0ge3sgcHJvZmlsZURhdGE/LmRhdGUgfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9uYXY+IC0tPlxyXG5cclxuXHJcbiAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItbGlnaHQgYmctd2hpdGUgaGVhZGVyIGZpeGVkLXRvcFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kIFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwibGliLWFzc2V0cy9pbWFnZXMvTG9nby0yMDIxLnN2Z1wiIHdpZHRoPVwiMjAwXCIgIGNsYXNzPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wIHByLTMgbGluZS1yXCIgYWx0PVwiXCI+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPGltZyBzcmM9XCJsaWItYXNzZXRzL2ltYWdlcy9WQVRfU0JUX0ludHJhbmV0LnBuZ1wiIHdpZHRoPVwiMjIwXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxmb3JtIGNsYXNzPVwic2VhcmNoLWJveCBmb3JtLWdyb3VwIG0tMCB3LTUwIHByLTMgcGwtM1wiIG1ldGhvZD1cInBvc3RcIiBhY3Rpb249XCJpbmRleC5odG1sXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWljb25cIj5cclxuICAgICAgICA8aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkIGxlZnRcIj5zZWFyY2g8L2k+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuC4hOC5ieC4meC4q+C4suC5g+C4muC4hOC4s+C4guC4rS/guYDguKXguILguJfguLXguYjguYPguJrguITguLPguILguK1cIiAvPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cInJlc3VsdHNcIiA+XHJcbiAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjAxMDA1MzcwLTI1NjUwMjIyMS0xMS0wMDAwMDM8L2E+PC9saT5cclxuICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+MDEwMDUzNzAtMjU2NTAyMjIxLTExLTAwMDAwNDwvYT48L2xpPlxyXG4gICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj4wMTAwNTM3MC0yNTY1MDIyMjEtMTEtMDAwMDA1PC9hPjwvbGk+XHJcbiAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjAxMDA1MzcwLTI1NjUwMjIyMS0xMS0wMDAwMDY8L2E+PC9saT5cclxuICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICA8L2Zvcm0+XHJcbiAgICA8bmF2IGNsYXNzPVwibmF2YmFyLWV4cGFuZFwiPlxyXG4gICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd24gbm90aS13cmFwXCI+XHJcbiAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIiBpZD1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+bm90aWZpY2F0aW9uczwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJub3RpLWljb24tYmFkZ2VcIj48L3NwYW4+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0XCIgYXJpYS1sYWJlbGxlZGJ5PVwibmF2YmFyRHJvcGRvd25NZW51TGlua1wiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIHAtM1wiPllvdSBoYXZlIDMgTm90aWZpY2F0aW9uczwvcD5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5BY3Rpb248L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2UgaGVyZTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gZHJvcGRvd24gdXNlci1uYW1lXCIgPlxyXG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIiBocmVmPVwiI1wiIGlkPVwibmF2YmFyRHJvcGRvd25NZW51TGlua1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2R5Ym9sZFwiPnt7IHByb2ZpbGVEYXRhPy5uYW1lIH19PGJyPnt7IHByb2ZpbGVEYXRhPy5wcm9ncmFtSWQgfX0gLSB7eyBwcm9maWxlRGF0YT8uZGF0ZSB9fTwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodFwiIGFyaWEtbGFiZWxsZWRieT1cIm5hdmJhckRyb3Bkb3duTWVudUxpbmtcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIiNcIj5BY3Rpb248L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+QW5vdGhlciBhY3Rpb248L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIjXCI+U29tZXRoaW5nIGVsc2UgaGVyZTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICA8L25hdj5cclxuIl19