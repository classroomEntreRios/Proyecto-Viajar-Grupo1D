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
/* harmony import */ var _terminos_terminos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terminos/terminos.component */ "zUnn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class PaginasModule {
}
PaginasModule.ɵfac = function PaginasModule_Factory(t) { return new (t || PaginasModule)(); };
PaginasModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PaginasModule });
PaginasModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PaginasModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _terminos_terminos_component__WEBPACK_IMPORTED_MODULE_3__["TerminosComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]] }); })();


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

/***/ "BL4B":
/*!********************************************************!*\
  !*** ./src/app/paginas/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/usuarios.service */ "ESM5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class RegisterComponent {
    constructor(service) {
        this.service = service;
        this.pass = "password";
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm(form) {
        if (form != null) {
            form.resetForm();
        }
        this.service.formData = {
            nombre: '',
            apellido: '',
            uemail: '',
            epassword: ''
        };
    }
    onSubmit(form) {
        this.insertRecord(form);
    }
    insertRecord(form) {
        this.service.postUsuario(form.value).subscribe(res => {
            this.resetForm(form);
        });
    }
    verPass() {
        if (this.pass == "password")
            this.pass = "text";
        else
            this.ocultarPass();
    }
    ocultarPass() {
        this.pass = "password";
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__["UsuariosService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 39, vars: 9, consts: [[1, "card", "card-body", 2, "background-color", "rgb(171, 218, 213)", "z-index", "1"], [1, "container", "pb-auto", 2, "padding-left", "30%", "padding-right", "30%", "padding-bottom", "10%"], ["autocomplete", "off", 1, "form-group", 3, "submit"], ["form", "ngForm"], [1, "form-label"], ["name", "nombre", "placeholder", "Juan", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombre", "ngModel"], ["name", "apellido", "placeholder", "Perez", 1, "form-control", 3, "ngModel", "ngModelChange"], ["apellido", "ngModel"], ["type", "email", "name", "uemail", "placeholder", "juanperez@correo.com", 1, "form-control", 3, "ngModel", "ngModelChange"], ["uemail", "ngModel"], [1, "input-group", "mb-3"], ["name", "password", "placeholder", "********", 1, "form-control", 3, "type", "ngModel", "ngModelChange"], ["epassword", "ngModel"], ["type", "button", 1, "verPass", 3, "click"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckChecked", "checked", "", 1, "form-check-input"], ["for", "flexCheckChecked", 1, "form-check-label"], ["href", "/terminos", 1, "link-primary"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-outline-info"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function RegisterComponent_Template_form_submit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_10_listener($event) { return ctx.service.formData.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) { return ctx.service.formData.apellido = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Correo Electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_20_listener($event) { return ctx.service.formData.uemail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_26_listener($event) { return ctx.service.formData.epassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_28_listener() { return ctx.verPass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "He le\u00EDdo los t\u00E9rminos y condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Registrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.apellido);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.uemail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.pass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.epassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", ctx.service.formData.nombre, " ", ctx.service.formData.apellido, " ", ctx.service.formData.uemail, " ", ctx.service.formData.epassword, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["button.verPass[_ngcontent-%COMP%]{\r\n    background-color: white ;\r\n    margin: 0px;\r\n    padding: auto;\r\n    border-radius: 4px;\r\n    border-color: transparent;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmJ1dHRvbi52ZXJQYXNze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ESM5":
/*!**********************************************!*\
  !*** ./src/app/services/usuarios.service.ts ***!
  \**********************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class UsuariosService {
    constructor(http) {
        this.http = http;
        this.rootURL = 'https://localhost:44330/';
    }
    postUsuario(formData) {
        return this.http.post(this.rootURL + 'api/usuarios', formData);
    }
}
UsuariosService.ɵfac = function UsuariosService_Factory(t) { return new (t || UsuariosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsuariosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuariosService, factory: UsuariosService.ɵfac, providedIn: 'root' });


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
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 0, consts: [[1, "navbar-fixed-bottom", "footer"], [1, "mx-auto", 2, "width", "20%"], [2, "font-family", "cursive"], [2, "font-family", "cursive", "color", "red"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/usuarios.service */ "ESM5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class LoginPanelComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.resetForm();
    }
    resetForm(form) {
        if (form != null) {
            form.resetForm();
        }
        this.service.formData = {
            nombre: '',
            apellido: '',
            uemail: '',
            epassword: ''
        };
    }
    onSubmit(form) {
        this.insertRecord(form);
    }
    insertRecord(form) {
        this.service.postUsuario(form.value).subscribe(res => {
            this.resetForm(form);
        });
    }
}
LoginPanelComponent.ɵfac = function LoginPanelComponent_Factory(t) { return new (t || LoginPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuarios_service__WEBPACK_IMPORTED_MODULE_1__["UsuariosService"])); };
LoginPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginPanelComponent, selectors: [["app-login-panel"]], decls: 19, vars: 1, consts: [[1, "login-panel"], [1, "oscurecer-fondo"], [1, "panel"], [1, "card", "card-body", 2, "background-color", "rgb(240, 248, 255)"], ["autocomplete", "off", 1, "form-group", 3, "submit"], ["form", "ngForm"], [1, "form-label"], ["name", "email", "placeholder", "nombre@ejemplo.com", 1, "form-control", 3, "ngModel", "ngModelChange"], ["nombre", "ngModel"], ["type", "password", "name", "pass", "id", "epassword", "placeholder", "********", 1, "form-control"], ["type", "submit", 1, "btn", "btn-outline-info"], ["href", "/registrarse", 1, "link-primary"]], template: function LoginPanelComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginPanelComponent_Template_form_submit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Correo electr\u00F3nico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginPanelComponent_Template_input_ngModelChange_10_listener($event) { return ctx.service.formData.uemail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Acceder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.service.formData.uemail);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["div.oscurecer-fondo[_ngcontent-%COMP%]{\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    margin: 0%;\r\n    padding: 0%;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.671);\r\n    z-index: 0;\r\n}\r\n\r\n.login-panel[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left: 0;\r\n    margin: 0%;\r\n    padding: 0%;\r\n    width: 100%;\r\n    min-height: 100%;\r\n}\r\n\r\ndiv.panel[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    margin-top: 0px;\r\n    padding-left: 80%;\r\n    left: 0px; \r\n    z-index: 1;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2lucGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixzQ0FBc0M7SUFDdEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsU0FBUztJQUNULFVBQVU7QUFDZCIsImZpbGUiOiJsb2dpbnBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYub3NjdXJlY2VyLWZvbmRve1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY3MSk7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4ubG9naW4tcGFuZWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcbmRpdi5wYW5lbHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4MCU7XHJcbiAgICBsZWZ0OiAwcHg7IFxyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuIl19 */"] });


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
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[2, "z-index", "2", "position", "static", "top", "0px"], [2, "z-index", "2!important"], [1, "pagina"], [1, "container", 2, "z-index", "0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-login-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _componentes_loginpanel_loginpanel_component__WEBPACK_IMPORTED_MODULE_2__["LoginPanelComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["app-login-panel[_ngcontent-%COMP%] {\r\n    display:none;\r\n}\r\n\r\n\r\n\r\ndiv.pagina[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: auto;\r\n    margin-bottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7OztBQUlBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtbG9naW4tcGFuZWwge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG5cclxuXHJcbmRpdi5wYWdpbmF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufSJdfQ== */"] });


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
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/usuarios.service */ "ESM5");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _paginas_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./paginas/register/register.component */ "BL4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_services_usuarios_service__WEBPACK_IMPORTED_MODULE_7__["UsuariosService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _paginas_paginas_module__WEBPACK_IMPORTED_MODULE_6__["PaginasModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _componentes_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
        _componentes_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _componentes_loginpanel_loginpanel_component__WEBPACK_IMPORTED_MODULE_4__["LoginPanelComponent"],
        _paginas_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _paginas_paginas_module__WEBPACK_IMPORTED_MODULE_6__["PaginasModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]] }); })();


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
/* harmony import */ var _paginas_terminos_terminos_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paginas/terminos/terminos.component */ "zUnn");
/* harmony import */ var _paginas_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paginas/dashboard/dashboard.component */ "xMWz");
/* harmony import */ var _paginas_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paginas/home/home.component */ "n3/6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _paginas_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paginas/register/register.component */ "BL4B");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: 'home', component: _paginas_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'dash', component: _paginas_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
    { path: 'registrarse', component: _paginas_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'terminos', component: _paginas_terminos_terminos_component__WEBPACK_IMPORTED_MODULE_0__["TerminosComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();


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

/***/ "zUnn":
/*!********************************************************!*\
  !*** ./src/app/paginas/terminos/terminos.component.ts ***!
  \********************************************************/
/*! exports provided: TerminosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminosComponent", function() { return TerminosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class TerminosComponent {
    constructor() { }
    ngOnInit() {
    }
}
TerminosComponent.ɵfac = function TerminosComponent_Factory(t) { return new (t || TerminosComponent)(); };
TerminosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TerminosComponent, selectors: [["app-terminos"]], decls: 90, vars: 0, consts: [[1, "container-fluid", "contenido"], [1, "row"], [1, "col-md-12"], [1, "mt-4"], [1, "row", "my-5"], ["align", "center", 2, "text-align", "center", "margin", "0cm 0cm 0.0001pt"]], template: function TerminosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Condiciones Generales de Contrataci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "NUESTRA EMPRESA OPERA BAJO LAS CONDICIONES GENERALES DE LA SIGUIENTE RESOLUCION N\u00B0 256/00 DE LA SECRETARIA DE ESTADO DE TURISMO.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "BUENOS AIRES, 30 JUN 2000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\nVISTO la Ley N\u00B0 18.829, su Decreto reglamentario N\u00B0 2182 de fecha 19 de abril de 1972, y las disposiciones de la Convenci\u00F3n Internacional relativa al Contrato de Viaje ratificada por la Ley 19.918, y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "CONSIDERANDO:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\nQue la normativa mencionada regula, entre otros aspectos, la relaci\u00F3n de los agentes de viajes con los usuarios.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\nQue es conveniente contribuir a una informaci\u00F3n m\u00E1s amplia y uniforme sobre los derechos y obligaciones que vinculan a las partes en el contrato de viaje.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\nQue la elaboraci\u00F3n de un modelo uniforme sobre las condiciones generales del contrato tur\u00EDstico tiende a evitar o limitar controversias o conflictos interpretativos.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\nQue las facultades para el dictado del acto emergen de las normas citadas y disposiciones expresadas de la Ley N\u00B0 14.574 t.o. 1987, de su Decreto reglamentario N\u00B0 9468/61 y del Decreto N\u00B0 1407/96.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Por ello, EL SECRETARIO DE TURISMO DE LA PRESIDENCIA DE LA NACION RESUELVE:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "ARTICULO 1\u00B0.- Aprobar el modelo de condiciones generales de contrataci\u00F3n de servicios tur\u00EDsticos que se agrega como ANEXO I a la presente. El modelo aprobado podr\u00E1 ser adaptado por la secretaria de turismo para casos particulares a pedido de las agencias de viaje cuando las modalidades operativas as\u00ED lo justifiquen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "ARTICULO 2\u00B0.- La entrega al pasajero de las condiciones generales de la contrataci\u00F3n impresas debe efectuarse en el primer documento de viaje que emita la agencia.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "ARTICULO 3\u00B0.- Las condiciones generales de la contrataci\u00F3n, conjuntamente con el detalle de los servicios a prestar, los billetes del transporte, las \u00F3rdenes de servicios, las facturas emitidas y todo otro documento que contenga especificaciones sobre el viaje, conformar\u00E1n el contrato de viaje.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ARTICULO 4\u00B0.- Las condiciones generales de la contrataci\u00F3n deber\u00E1n ser firmadas por un empleado autorizado de la agencia. La firma podr\u00E1 ser suplida por un sello que contenga la denominaci\u00F3n comercial y el n\u00FAmero de legajo de la agencia de viajes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "ARTICULO 5\u00B0.- En el caso de venta exclusiva por medios electr\u00F3nicos o sistemas de reservas, deber\u00E1 preverse el conocimiento y aceptaci\u00F3n fehaciente por parte de los pasajeros de las condiciones generales de contrataci\u00F3n aprobadas en el art\u00EDculo 1\u00B0 de la presente, con anterioridad a la reserva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "ARTICULO 6\u00B0.- La sola venta de billetes de pasajes de transporte regular y el alquiler de aeronaves o automotores quedan excluidos del r\u00E9gimen y no requieren entrega y suscripci\u00F3n de las condiciones generales.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "ARTICULO 7\u00B0.- Toda infracci\u00F3n a las disposiciones de la presente ser\u00E1 sancionada conforme las determinaciones del art\u00EDculo 10 de la Ley N\u00B0 18.829.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "ARTICULO 8\u00B0.- Las disposiciones de la presente entrar\u00E1n en vigencia a partir del 1\u00B0 de septiembre de 2000.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "ARTICULO 9\u00B0.- Reg\u00EDstrese, comun\u00EDquese, publ\u00EDquese, d\u00E9se a la Direcci\u00F3n Nacional del Registro Oficial y arch\u00EDvese. Firmado: Ing. Hern\u00E1n Lombardi. Secretario de Turismo. Presidencia de la Naci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "ANEXO I");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "CONDICIONES GENERALES DEL CONTRATO DE SERVICIOS TURISTICOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "a. SOLICITUDES Y PAGOS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n1) El precio y/o reservaci\u00F3n de los servicios que componen el tour quedan sujetos a modificaciones sin previo aviso cuando se produzca una alteraci\u00F3n en los servicios, modificaciones en los costos o en los tipos de cambio previstos, por causas no imputables a las partes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "2) Todos los importes pagados antes de la confirmaci\u00F3n definitiva de los servicios son percibidos en concepto de reserva. La confirmaci\u00F3n definitiva de los servicios y precios respectivos se producir\u00E1 con la emisi\u00F3n de pasajes y/u \u00F3rdenes de servicios y la facturaci\u00F3n correspondiente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "3) Las operaciones a cr\u00E9dito deber\u00E1n satisfacer los requisitos propios fijados para las mismas. En su defecto el interesado deber\u00E1 cumplimentar el pago de los saldos en los plazos y condiciones establecidos en la contrataci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "b. LOS PRECIOS INCLUYEN: alojamiento en los hoteles mencionados en los itinerarios u otros de igual o mayor categor\u00EDa, ocupando habitaciones simples, dobles, triples, etc. Seg\u00FAn tarifa elegida, con ba\u00F1o privado e impuestos. R\u00E9gimen de comidas seg\u00FAn se indique en cada oportunidad. Visitas y excursiones que se mencionen. Traslados hasta y desde aeropuertos, terminales y hoteles, cuando se indique. La cantidad prevista de d\u00EDas de alojamiento teniendo en cuenta que el d\u00EDa de alojamiento hotelero se computa desde las quince horas y finaliza a las doce horas del d\u00EDa siguiente, independientemente de la hora de llegada y de salida y de la utilizaci\u00F3n completa o fraccionada del mismo. La duraci\u00F3n del tour ser\u00E1 indicada en cada caso tomando como primer d\u00EDa, el de salida y como \u00FAltimo incluido el d\u00EDa de salida del destino, independientemente del horario de salida o de llegada en el primer d\u00EDa o en el \u00FAltimo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "c. SERVICIOS O RUBROS NO INCLUIDOS: 1) Extras, bebidas, lavado de ropa, propinas, tasas de embarque, tasas sobre servicios, IVA y otros impuestos actuales y/o futuros, ni ning\u00FAn servicio que no se encuentre expresamente indicado en la orden de servicio emitida por el agente de viajes. 2) Estadas, comidas y/o gastos adicionales o perjuicios producidos por cancelaciones, demoras en las salidas o llegadas de los medios de transporte, o por razones imprevistas ajenas a la empresa. 3) Alimentaci\u00F3n en ruta, excepto aquellas que estuviesen expresamente incluidas en los programas. 4) Los gastos e intereses en las operaciones a cr\u00E9dito.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "d. LIMITACIONES AL DERECHO DE PERMANENCIA: La empresa se reserva el derecho de hacer que abandone el tour en cualquier punto del mismo todo pasajero cuya conducta, modo de obrar, estado de salud u otras razones graves a juicio de la empresa provoque peligro o cause molestias a los restantes viajeros o pueda malograr el \u00E9xito de la excursi\u00F3n o el normal desarrollo de la misma.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "e. DOCUMENTACION: Para los viajes al exterior es necesario atender la legislaci\u00F3n vigente en cada caso. Es responsabilidad inexcusable de la agencia informar fehacientemente y con anticipaci\u00F3n suficiente sobre los requisitos que exigen las autoridades migratorias, aduaneras y sanitarias de los destinos que incluye el tour, siendo responsabilidad exclusiva del pasajero contar con la documentaci\u00F3n personal que exijan las autoridades mencionadas anteriormente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "f. CANCELACIONES: 1) En caso de desistimiento de operaciones a cr\u00E9dito no tendr\u00E1n reembolso los importes abonados en concepto de informe, gastos administrativos, sellados e intereses. 2) Cuando se trate de desistimiento que afecte a servicios contratados en firme por la agencia, el reembolso de los mismos estar\u00E1 sujeto a las condiciones contractuales bajo las cuales presten sus servicios las empresas respectivas. En todos los casos de reintegros, la agencia podr\u00E1 retener el precio de los gastos incurridos m\u00E1s la comisi\u00F3n del diez por ciento de los servicios contratados con terceros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "g. TRANSPORTE NO REGULAR O CHARTER: rige lo estipulado en el punto anterior. Sin perjuicio de ello, en estos casos s\u00F3lo se reintegrar\u00E1 la proporci\u00F3n del precio correspondiente a los servicios terrestres (hoteler\u00EDa, pensi\u00F3n, excursiones) que determine el organizador seg\u00FAn la modalidad con que operen los prestadores de los servicios. Para que \u00E9sta cl\u00E1usula sea v\u00E1lida deber\u00E1 determinarse en el primer documento entregado al pasajero la calidad del transporte.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "h. CESION Y TRANSFERENCIA: el derecho que confiere al cliente el contrato de servicios tur\u00EDsticos, podr\u00E1 ser cedido o transferido a otras personas hasta 30 d\u00EDas antes de la fecha de salida, siempre que no se opongan a ello las prescripciones del transportista, del hotelero o prestador de los servicios. En los supuestos que los pasajeros sean de distintas edades (mayores-menores), se ajustar\u00E1 el precio seg\u00FAn tarifarios. En todos los casos de cesi\u00F3n o transferencia, la empresa podr\u00E1 percibir el sobreprecio del 10% del monto convenido.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "i. RESPONSABILIDAD: 1) La empresa declara expresamente que act\u00FAa en el car\u00E1cter de intermediaria en la reserva o contrataci\u00F3n de los distintos servicios vinculados e incluidos en el respectivo tour o reservaci\u00F3n de servicios: hoteles, restaurantes, medios de transportes u otros prestadores. No obstante ello las responsabilidades de la empresa, sea que intervenga como organizadora o intermediaria de viaje ser\u00E1 determinada conforme las disposiciones contenidas en la Convenci\u00F3n Internacional Relativa al Contrato de Viaje aprobada por la Ley N\u00B0 19.918. 2) La empresa no se responsabiliza por los hechos que se produzcan por caso fortuito o fuerza mayor, fen\u00F3menos clim\u00E1ticos o hechos de la naturaleza que acontezcan antes o durante el desarrollo del tour que impidan, demoren o de cualquier modo obstaculicen la ejecuci\u00F3n total o parcial de las prestaciones comprometidas por la empresa, de conformidad con lo dispuesto por el C\u00F3digo Civil.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "j. ALTERACIONES O MODIFICACIONES: 1) La empresa se reserva el derecho, por razones t\u00E9cnicas u operativas, de alterar total o parcialmente el ordenamiento diario y/o de servicios que componen el tour, antes o durante la ejecuci\u00F3n del mismo. 2) Salvo condici\u00F3n expresa en contrario, los hoteles estipulados podr\u00E1n ser cambiados por otro de igual o mayor categor\u00EDa dentro del mismo n\u00FAcleo urbano sin cargo alguno para el pasajero. Respecto de estas variaciones el pasajero no tendr\u00E1 derecho a indemnizaci\u00F3n alguna. 3) La empresa podr\u00E1 anular cualquier tour cuando se configure alguna de las circunstancias previstas en el art.24 del Decreto N\u00B0 2182/72. 4) Una vez comenzado el viaje, la suspensi\u00F3n, modificaci\u00F3n o interrupci\u00F3n de los servicios por parte del pasajero por razones personales de cualquier \u00EDndole, no dar\u00E1 lugar a reclamo alguno, reembolso o devoluci\u00F3n alguna.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "k. CLAUSULA DE ARBITRAJE: Toda cuesti\u00F3n que surja con motivo de la celebraci\u00F3n, cumplimiento, incumplimiento, pr\u00F3rroga o rescisi\u00F3n del presente contrato, podr\u00E1 ser sometida por las partes a la resoluci\u00F3n del Tribunal Arbitral de la Asociaci\u00F3n Argentina de Agencias de Viajes y Turismo y/o de los Tribunales Arbitrales que funcionen en sus Regionales. En caso de sometimiento de dicha jurisdicci\u00F3n, los contratantes se sujetan y dan por aceptadas todas las condiciones establecidas por la Reglamentaci\u00F3n del Tribunal Arbitral.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "l. NORMAS DE APLICACI\u00D3N: El presente contrato y en su caso la prestaci\u00F3n de los servicios, se regir\u00E1 exclusivamente por estas condiciones generales, por la Ley N\u00B0 18.829 y su reglamentaci\u00F3n y por la Convenci\u00F3n de Bruselas aprobada por la Ley 19.918. Las presentes condiciones generales junto con la restante documentaci\u00F3n que se entregue a los pasajeros conformar\u00E1n el Contrato de Viaje que establece la citada Convenci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Firmado Ing. HERNAN LOMBARDI. Secretario de Turismo. Presidencia de la Naci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXJtaW5vcy5jb21wb25lbnQuY3NzIn0= */"] });


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