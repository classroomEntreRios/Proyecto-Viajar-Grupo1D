(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/DBu":
/*!********************************************************!*\
  !*** ./src/app/componentes/navbar/navbar.component.ts ***!
  \********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 10, vars: 0, consts: [[1, "navbar", "navbar-nav", "navbar-light", 2, "width", "100%", "background-color", "rgb(116, 202, 194)", "max-height", "100px"], [1, "container-fluid"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#menu", "aria-controls", "menu", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "nav-fill", "mx-auto", 2, "align-items", "center"], ["href", "#", 1, "navbar-brand"], ["id", "ibotonAcceder", "type", "button", 1, "btn", "botonAcceder"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "VIAJAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img.logo[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    height: auto;\r\n    max-height: 70px;\r\n  }\r\n  \r\n  div.menuCard[_ngcontent-%COMP%] {\r\n    position: sticky;\r\n    float: left;\r\n    width: auto;\r\n    height: auto;\r\n    background-color: rgb(116, 202, 194);\r\n    border-right: 1px solid #555;\r\n    z-index: 1;\r\n  }\r\n  \r\n  li.menuCard-item[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    padding: 3px;\r\n    margin: 3px;\r\n    display: block;\r\n    background-color: rgb(116, 202, 194);\r\n    font-family: 'Bahnschrift';\r\n    font-weight: bolder;\r\n    font-style: inherit;\r\n    font-size: 22px;\r\n    color: black;\r\n    z-index: 1;\r\n  }\r\n  \r\n  button[_ngcontent-%COMP%]:hover {\r\n    color: rgb(60, 121, 115);\r\n    background-color: rgb(254, 214, 255);\r\n    cursor: pointer;\r\n  }\r\n  \r\n  a.menuCard-logo[_ngcontent-%COMP%] {\r\n    color: white;\r\n  }\r\n  \r\n  li#menu[_ngcontent-%COMP%]:hover {\r\n    color: rgb(60, 121, 115);\r\n    background-color: rgb(254, 214, 255);\r\n    cursor: pointer;\r\n  }\r\n  \r\n  ul.menuCard[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    z-index: 1;\r\n  }\r\n  \r\n  div.contenidoDesplegable[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: absolute;\r\n    top: 680px;\r\n    padding: 5px;\r\n    margin: 5px;\r\n    border: solid black 1px;\r\n    background-color: chartreuse;\r\n  }\r\n  \r\n  button.botonAcceder[_ngcontent-%COMP%] {\r\n    background-color: transparent;\r\n    padding: 1px;\r\n    margin-left: 1%;\r\n    color: white;\r\n  }\r\n  \r\n  .botonAcceder[_ngcontent-%COMP%]:hover {\r\n    background-color: rgb(255, 255, 255);\r\n    color: black;\r\n  }\r\n  \r\n  .contenedor[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 500px;\r\n    overflow: hidden;\r\n    margin: 5px;\r\n    position: relative;\r\n  }\r\n  \r\n  \r\n  \r\n  @media only screen and (max-device-width: 1050px) {\r\n    .contenedor[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      height: 350px;\r\n      overflow: hidden;\r\n      margin: 5px;\r\n      position: relative;\r\n    }\r\n    \r\n  }\r\n  \r\n  @media only screen and (max-device-width: 766px) {\r\n  \r\n    div.menuCard[_ngcontent-%COMP%] {\r\n      float: left;\r\n      width: 50%;\r\n      height: auto;\r\n      background-color: rgb(116, 202, 194);\r\n      border-right: 1px solid #555;\r\n    }\r\n  \r\n    li.menuCard-item[_ngcontent-%COMP%] {\r\n      list-style-type: none;\r\n      padding: 3px;\r\n      margin: 3px;\r\n      display: block;\r\n      background-color: rgb(116, 202, 194);\r\n      font-family: 'Bahnschrift';\r\n      font-weight: bolder;\r\n      font-style: inherit;\r\n      font-size: 18px;\r\n      color: black;\r\n    }\r\n  \r\n    li[_ngcontent-%COMP%]:hover {\r\n      color: rgb(60, 121, 115);\r\n      background-color: rgb(254, 214, 255);\r\n      cursor: pointer;\r\n    }\r\n  \r\n    .contenedor[_ngcontent-%COMP%] {\r\n      width: 360px;\r\n      height: 100px;\r\n      overflow: hidden;\r\n      margin: 5px;\r\n      position: relative;\r\n    }\r\n  }\r\n  \r\n  @media only screen and (max-device-width: 450px) {\r\n    img.logo[_ngcontent-%COMP%] {\r\n      width: auto;\r\n      height: auto;\r\n      max-height: 55px;\r\n    }\r\n  \r\n    div.menuCard[_ngcontent-%COMP%] {\r\n      width: auto;\r\n      height: 100%;\r\n      max-width: 100%;\r\n    }\r\n  }\r\n  \r\n  @media only screen and (max-device-width: 400px) {\r\n    div.menuCard[_ngcontent-%COMP%] {\r\n      width: auto;\r\n      height: 100%;\r\n      max-width: 100%;\r\n    }\r\n  \r\n    a.menuAcceder[_ngcontent-%COMP%] {\r\n      visibility: visible;\r\n    }\r\n  }\r\n  \r\n  @media only screen and (max-device-width: 339px) {\r\n    img.logo[_ngcontent-%COMP%] {\r\n      width: auto;\r\n      height: auto;\r\n      max-height: 40px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsVUFBVTtFQUNaOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixvQ0FBb0M7SUFDcEMsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixvQ0FBb0M7SUFDcEMsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7RUFDZDs7RUFFQTtJQUNFLG9DQUFvQztJQUNwQyxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztFQUNBOzs7Ozs7Ozs7S0FTRzs7RUFFSDtJQUNFO01BQ0UsV0FBVztNQUNYLGFBQWE7TUFDYixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLGtCQUFrQjtJQUNwQjtJQUNBOzs7Ozs7Ozs7S0FTQztFQUNIOztFQUVBOztJQUVFO01BQ0UsV0FBVztNQUNYLFVBQVU7TUFDVixZQUFZO01BQ1osb0NBQW9DO01BQ3BDLDRCQUE0QjtJQUM5Qjs7SUFFQTtNQUNFLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osV0FBVztNQUNYLGNBQWM7TUFDZCxvQ0FBb0M7TUFDcEMsMEJBQTBCO01BQzFCLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLFlBQVk7SUFDZDs7SUFFQTtNQUNFLHdCQUF3QjtNQUN4QixvQ0FBb0M7TUFDcEMsZUFBZTtJQUNqQjs7SUFFQTtNQUNFLFlBQVk7TUFDWixhQUFhO01BQ2IsZ0JBQWdCO01BQ2hCLFdBQVc7TUFDWCxrQkFBa0I7SUFDcEI7RUFDRjs7RUFHQTtJQUNFO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLGVBQWU7SUFDakI7RUFDRjs7RUFFQTtJQUNFO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO0lBQ2pCOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osZ0JBQWdCO0lBQ2xCO0VBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1nLmxvZ28ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA3MHB4O1xyXG4gIH1cclxuICBcclxuICBkaXYubWVudUNhcmQge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE2LCAyMDIsIDE5NCk7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNTU1O1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgbGkubWVudUNhcmQtaXRlbSB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNiwgMjAyLCAxOTQpO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYWhuc2NocmlmdCc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1zdHlsZTogaW5oZXJpdDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogcmdiKDYwLCAxMjEsIDExNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyMTQsIDI1NSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGEubWVudUNhcmQtbG9nbyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIGxpI21lbnU6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYig2MCwgMTIxLCAxMTUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NCwgMjE0LCAyNTUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICB1bC5tZW51Q2FyZCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgZGl2LmNvbnRlbmlkb0Rlc3BsZWdhYmxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2ODBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjaGFydHJldXNlO1xyXG4gIH1cclxuICBcclxuICBidXR0b24uYm90b25BY2NlZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuYm90b25BY2NlZGVyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRlbmVkb3Ige1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAvKiAuY29udGVuZWRvciA+IC5jcm9wIHtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgICByaWdodDogLTEwMCU7XHJcbiAgICAgIHRvcDogLTEwMCU7XHJcbiAgICAgIGJvdHRvbTogLTEwMCU7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIH0gKi9cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDUwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAvKiAuY29udGVuZWRvciA+IC5jcm9wIHtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IC01MCU7XHJcbiAgICAgIHJpZ2h0OiAtNTAlO1xyXG4gICAgICB0b3A6IC01MCU7XHJcbiAgICAgIGJvdHRvbTogLTUwJTtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBtaW4taGVpZ2h0OiA1MCU7XHJcbiAgICAgIG1pbi13aWR0aDogNTAlO1xyXG4gIH0gKi9cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNzY2cHgpIHtcclxuICBcclxuICAgIGRpdi5tZW51Q2FyZCB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTYsIDIwMiwgMTk0KTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzU1NTtcclxuICAgIH1cclxuICBcclxuICAgIGxpLm1lbnVDYXJkLWl0ZW0ge1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE2LCAyMDIsIDE5NCk7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQmFobnNjaHJpZnQnO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICBmb250LXN0eWxlOiBpbmhlcml0O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICBcclxuICAgIGxpOmhvdmVyIHtcclxuICAgICAgY29sb3I6IHJnYig2MCwgMTIxLCAxMTUpO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU0LCAyMTQsIDI1NSk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBtYXJnaW46IDVweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0NTBweCkge1xyXG4gICAgaW1nLmxvZ28ge1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXgtaGVpZ2h0OiA1NXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2Lm1lbnVDYXJkIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0MDBweCkge1xyXG4gICAgZGl2Lm1lbnVDYXJkIHtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgYS5tZW51QWNjZWRlciB7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDMzOXB4KSB7XHJcbiAgICBpbWcubG9nbyB7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\.git-repository\proyecto-g1d-proyecto-g1d\seroselli\app\src\main.ts */"zUnb");


/***/ }),

/***/ "1lCd":
/*!*******************************************!*\
  !*** ./src/app/paginas/paginas.module.ts ***!
  \*******************************************/
/*! exports provided: PaginasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginasModule", function() { return PaginasModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "n3/6");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "xMWz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PaginasModule {
}
PaginasModule.ɵfac = function PaginasModule_Factory(t) { return new (t || PaginasModule)(); };
PaginasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PaginasModule });
PaginasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PaginasModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "NM3I":
/*!********************************************************!*\
  !*** ./src/app/componentes/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 0, consts: [[1, "container-fluid", "footer", 2, "background-color", "rgba(192, 192, 192, 0.39)", "width", "100%", "height", "auto"], [1, "mx-auto", 2, "width", "20%"], [2, "font-family", "cursive"], [2, "font-family", "cursive", "color", "red"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Este es el footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%]{\r\n    position:fixed;\r\n    bottom:0;\r\n    width:100%;\r\n    text-align:center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLFFBQVE7SUFDUixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "NaAd":
/*!****************************************************************!*\
  !*** ./src/app/componentes/loginpanel/loginpanel.component.ts ***!
  \****************************************************************/
/*! exports provided: LoginPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPanelComponent", function() { return LoginPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoginPanelComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginPanelComponent.ɵfac = function LoginPanelComponent_Factory(t) { return new (t || LoginPanelComponent)(); };
LoginPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPanelComponent, selectors: [["app-login-panel"]], decls: 17, vars: 0, consts: [[1, "login-panel"], [1, "oscurecer-fondo"], [1, "panel"], [1, "card", "card-body", 2, "background-color", "rgb(240, 248, 255)"], ["action", "/login", "method", "post"], [1, "mb-3", "row"], [1, "form-label"], ["type", "text", "name", "email", "placeholder", "nombre@ejemplo.com", 1, "form-control"], ["for", "epassword", 1, "form-label"], ["type", "password", "name", "pass", "id", "epassword", "placeholder", "********", 1, "form-control"], ["type", "submit", 1, "btn", "btn-outline-info"]], template: function LoginPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Acceder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div.oscurecer-fondo[_ngcontent-%COMP%]{\r\n    display: block;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 1400px;\r\n    background-color: rgba(0, 0, 0, 0.671);\r\n    z-index: 0;\r\n}\r\n\r\ndiv.panel[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    margin-top: 0px;\r\n    padding-left: 80%;\r\n    left: 0px; \r\n    z-index: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2lucGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWM7SUFDZCxzQ0FBc0M7SUFDdEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxVQUFVO0FBQ2QiLCJmaWxlIjoibG9naW5wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2Lm9zY3VyZWNlci1mb25kb3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE0MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NzEpO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5cclxuZGl2LnBhbmVse1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDgwJTtcclxuICAgIGxlZnQ6IDBweDsgXHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentes/navbar/navbar.component */ "/DBu");
/* harmony import */ var _componentes_loginpanel_loginpanel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentes/loginpanel/loginpanel.component */ "NaAd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/footer/footer.component */ "NM3I");





class AppComponent {
    constructor() {
        this.title = 'Viajar';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[2, "z-index", "2", "position", "static", "top", "0px"], [2, "z-index", "2!important"], [1, "container", "mt-3", 2, "z-index", "0"], [2, "z-index", "1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-login-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer", 3);
    } }, directives: [_componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _componentes_loginpanel_loginpanel_component__WEBPACK_IMPORTED_MODULE_2__["LoginPanelComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["app-login-panel[_ngcontent-%COMP%] {\r\n    display:none;\r\n}\r\n\r\ndiv.div1[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbG9naW4tcGFuZWwge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG5kaXYuZGl2MXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/navbar/navbar.component */ "/DBu");
/* harmony import */ var _componentes_loginpanel_loginpanel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/loginpanel/loginpanel.component */ "NaAd");
/* harmony import */ var _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/footer/footer.component */ "NM3I");
/* harmony import */ var _paginas_paginas_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginas/paginas.module */ "1lCd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _paginas_paginas_module__WEBPACK_IMPORTED_MODULE_6__["PaginasModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _componentes_loginpanel_loginpanel_component__WEBPACK_IMPORTED_MODULE_4__["LoginPanelComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _paginas_paginas_module__WEBPACK_IMPORTED_MODULE_6__["PaginasModule"]] }); })();


/***/ }),

/***/ "n3/6":
/*!************************************************!*\
  !*** ./src/app/paginas/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 11, vars: 0, consts: [[1, "container-fluid", "m-0", "p-0"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Turismo en Entre Rios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Animate a recorrer entre rios como nunca");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque eius optio accusantium fugiat at labore eos impedit reprehenderit sint veritatis ea iste quisquam sit eligendi dolores consectetur similique quibusdam, natus blanditiis, repellat quae aliquam, modi molestias velit! Animi exercitationem veritatis deleniti eius cupiditate molestiae veniam enim dolorum! Illum obcaecati, molestias rem id voluptatem, unde dolor quae odit labore ipsum nulla, qui maiores aspernatur eum exercitationem aperiam ipsa. Architecto animi, inventore voluptas nobis doloribus totam facere ipsum quaerat illo at, dolore natus iusto amet libero? Hic inventore culpa laudantium reiciendis expedita iure consectetur omnis voluptatum veniam, tempore sapiente provident non fugit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _paginas_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paginas/dashboard/dashboard.component */ "xMWz");
/* harmony import */ var _paginas_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginas/home/home.component */ "n3/6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: 'home', component: _paginas_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'dash', component: _paginas_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "xMWz":
/*!**********************************************************!*\
  !*** ./src/app/paginas/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map