(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _person_grid_person_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person-grid/person-grid.component */ "./src/app/person-grid/person-grid.component.ts");




var routes = [
    { path: '', redirectTo: '/grid', pathMatch: 'full' },
    { path: 'grid', component: _person_grid_person_grid_component__WEBPACK_IMPORTED_MODULE_3__["PersonGridComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'PG-Member-Tool';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/header/header.component */ "./src/app/shared/components/header/header.component.ts");
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ "./src/app/shared/components/footer/footer.component.ts");
/* harmony import */ var _person_grid_person_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./person-grid/person-grid.component */ "./src/app/person-grid/person-grid.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_person_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/person.service */ "./src/app/shared/services/person.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_pipes_personFilter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/pipes/personFilter.pipe */ "./src/app/shared/pipes/personFilter.pipe.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _person_grid_person_grid_component__WEBPACK_IMPORTED_MODULE_7__["PersonGridComponent"],
                _shared_pipes_personFilter_pipe__WEBPACK_IMPORTED_MODULE_11__["PersonFilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_shared_services_person_service__WEBPACK_IMPORTED_MODULE_9__["PersonService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/person-grid/person-grid.component.html":
/*!********************************************************!*\
  !*** ./src/app/person-grid/person-grid.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-bottom: 10px\" class=\"row\">\n  <form class=\"col s12\">\n    <input\n      [(ngModel)]=\"searchInput\"\n      name=\"search_input\"\n      id=\"search_input\"\n      placeholder=\"Search ...\"\n      type=\"text\"\n      class=\"validate\"\n    />\n  </form>\n</div>\n\n<div class=\"row\">\n  <div *ngIf=\"persons | personFilterPipe: searchInput; let filteredPersons\">\n    <div *ngFor=\"let person of filteredPersons\" class=\"col s12 m6 l4\">\n      <div class=\"card hoverable pg-card\" [ngStyle]=\"getPersonStatus(person)\">\n        <div class=\"card-image pg-card-image\">\n          <img [src]=\"person.backgroundImgPath\" />\n          <a\n            #openingElement\n            class=\"btn-floating halfway-fab pg-red pg-btn hoverable activator\"\n          >\n            <i class=\"material-icons\">more_vert</i>\n          </a>\n        </div>\n        <div class=\"user-image\">\n          <img [src]=\"person.userImgPath\" alt=\"header-1\" />\n        </div>\n        <div class=\"card-content\">\n          <span class=\"card-title center-align\">{{ person.name }}</span>\n          <span class=\"card-sub-title center-align grey-text\">{{\n            person.currentPGRole.name\n          }}</span>\n          <!-- <blockquote class=\"pg-red-blockquote blockquote-lighten-2\">\n            {{ person.description | slice: 0:140 }}\n          </blockquote> -->\n        </div>\n        <div #cardReveal class=\"card-reveal\">\n          <span #closingElement class=\"card-title grey-text text-darken-4\">\n            {{ person.name }}\n            <i class=\"material-icons right\">close</i>\n          </span>\n          <ul>\n            <li class=\"pg-card-subheading\">\n              <i class=\"material-icons\">today</i>Mitglied seit\n            </li>\n            <li class=\"pg-card-content\">\n              {{ person.memberSince | date: \"LL / yyyy\" }}\n            </li>\n            <li class=\"list-separator\"></li>\n            <li class=\"pg-card-subheading\">\n              <i class=\"material-icons\">supervisor_account</i>Bisherige\n              Positionen in der PG\n            </li>\n            <li class=\"pg-card-content\">\n              <ul class=\"card-reveal-list\">\n                <li *ngFor=\"let role of person.pgRoles\">{{ role.name }}</li>\n              </ul>\n            </li>\n            <li class=\"list-separator\"></li>\n            <a\n              *ngIf=\"person.email\"\n              [href]=\"'mailto:' + person.email\"\n              target=\"_blank\"\n            >\n              <li style=\"color: rgba(0,0,0,0.87);\" class=\"pg-card-subheading\">\n                <i class=\"material-icons\">mail</i>Mail\n              </li>\n            </a>\n            <a *ngIf=\"person.linkedIn\" [href]=\"person.linkedIn\" target=\"_blank\">\n              <li style=\"color: rgba(0,0,0,0.87);\" class=\"pg-card-subheading\">\n                <i class=\"material-icons\">account_box</i>LinkedIn\n              </li>\n            </a>\n          </ul>\n        </div>\n      </div>\n    </div>\n    <div\n      *ngIf=\"filteredPersons.length === 0\"\n      class=\"col s12 m12 center-align grey-text text-darken-1\"\n      style=\"padding-top: 50px\"\n    >\n      <i class=\"large material-icons\">highlight_off</i>\n      <h4>something went wrong</h4>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/person-grid/person-grid.component.scss":
/*!********************************************************!*\
  !*** ./src/app/person-grid/person-grid.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pg-card {\n  height: 400px; }\n\n.pg-card-image img {\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.user-image {\n  margin-top: -50px; }\n\n.user-image img {\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  border: 4px solid #ffffff;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  -webkit-transform: translateZ(100px);\n          transform: translateZ(100px);\n  background-color: #fff;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.card-title {\n  margin-bottom: 0px !important; }\n\n.card-sub-title {\n  display: block;\n  margin-bottom: 8px; }\n\n.card-content {\n  padding: 12px; }\n\n.list-separator {\n  border-top: 1px solid rgba(160, 160, 160, 0.2);\n  margin: 5px 0; }\n\n.pg-card-subheading {\n  font-weight: bold;\n  display: flex;\n  padding: 1rem 0rem; }\n\n.pg-card-subheading i {\n  width: 2rem;\n  font-size: 1.6rem;\n  display: inline-block;\n  text-align: center;\n  margin-right: 1rem; }\n\n.pg-card-content {\n  padding: 0rem 0.5rem 1rem 0.5rem; }\n\n.card-reveal-list li {\n  list-style: disc inside; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvbWluaWMvYW5ndWxhcl9wcm9qZWN0cy9tZW1iZXItdG9vbC9NZW1iZXJUb29sL0NsaWVudEFwcC9zcmMvYXBwL3BlcnNvbi1ncmlkL3BlcnNvbi1ncmlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLDZCQUE2QixFQUFBOztBQUUvQjtFQUNFLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxhQUFhLEVBQUE7O0FBRWY7RUFDRSw4Q0FBOEM7RUFDOUMsYUFBYSxFQUFBOztBQUVmO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZ0NBQWdDLEVBQUE7O0FBRWxDO0VBQ0UsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wZXJzb24tZ3JpZC9wZXJzb24tZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZy1jYXJkIHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgLy8gaGVpZ2h0OiA1MDBweDsgLy8gd2l0aCBibG9ja3F1b3RlXG59XG4ucGctY2FyZC1pbWFnZSBpbWcge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi51c2VyLWltYWdlIHtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG59XG4udXNlci1pbWFnZSBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi5jYXJkLXN1Yi10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMTJweDtcbn1cbi5saXN0LXNlcGFyYXRvciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE2MCwgMTYwLCAxNjAsIDAuMik7XG4gIG1hcmdpbjogNXB4IDA7XG59XG4ucGctY2FyZC1zdWJoZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcbn1cbi5wZy1jYXJkLXN1YmhlYWRpbmcgaSB7XG4gIHdpZHRoOiAycmVtO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cbi5wZy1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcmVtIDAuNXJlbSAxcmVtIDAuNXJlbTtcbn1cbi5jYXJkLXJldmVhbC1saXN0IGxpIHtcbiAgbGlzdC1zdHlsZTogZGlzYyBpbnNpZGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/person-grid/person-grid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/person-grid/person-grid.component.ts ***!
  \******************************************************/
/*! exports provided: PersonGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonGridComponent", function() { return PersonGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_person_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/person.service */ "./src/app/shared/services/person.service.ts");



var PersonGridComponent = /** @class */ (function () {
    function PersonGridComponent(memberService) {
        this.memberService = memberService;
        // person filter
        this.searchInput = '';
        // all persons
        this.persons = [];
        // subscription
        this.subscriptions = [];
    }
    PersonGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to persons
        this.subscriptions.push(this.memberService.getPersons().subscribe(function (persons) {
            console.log(persons);
            _this.persons = persons;
        }, function (error) {
            console.log(error);
        }));
    };
    PersonGridComponent.prototype.ngOnDestroy = function () {
        // unsubscribe all subscriptions
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    PersonGridComponent.prototype.getPersonStatus = function (person) {
        // opacity value
        var opacity = 0.7;
        if (person.currentPGRole.name.toLowerCase() === 'alumnus') {
            return {
                '-webkit-filter': "opacity(" + opacity + ")",
                filter: "opacity(" + opacity + ")"
            };
        }
    };
    PersonGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person-grid',
            template: __webpack_require__(/*! ./person-grid.component.html */ "./src/app/person-grid/person-grid.component.html"),
            styles: [__webpack_require__(/*! ./person-grid.component.scss */ "./src/app/person-grid/person-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_person_service__WEBPACK_IMPORTED_MODULE_2__["PersonService"]])
    ], PersonGridComponent);
    return PersonGridComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer\n  class=\"page-footer pg-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div>\n        <a href=\"https://pioniergarage.de/\" target=\"_blank\">\n          <img\n            style=\"height: 60px;\"\n            src=\"assets/img/pioniergarage_logo.png\">\n        </a>\n        <p class=\"pg-footer-text\" style=\"margin-top: 10px;\">\n          Diese App präsentiert alle Mitglieder der Hochschulgruppe PionierGarage. Falls du auch dargestellt werden möchtest oder bei sonstigen Fragen, wende dich bitte an\n          <a href=\"mailto:it@pioniergarage.de\" class=\"footer-link\">it@pioniergarage.de</a>.\n        </p>\n        <p class=\"pg-footer-text\">\n          Entwickelt von Dominic Seitz (<a href=\"https://github.com/dome4\" target=\"_blank\">@dome4</a> ) und Dominik Doerner (<a href=\"https://github.com/DDoerner\" target=\"_blank\">@DDoerner</a> ).\n        </p>\n      </div>\n    </div>\n  </div>\n  <div\n    class=\"footer-copyright pg-footer-copyright\">\n    <div class=\"container pg-footer-text\">\n      <strong>Copyright © 2018</strong>\n      <a href=\"https://pioniergarage.de/\" target=\"_blank\">PionierGarage e.V.</a>\n      <span class=\"footer-separator\"> | </span>\n      <a href=\"https://pioniergarage.de/impressum\" target=\"_blank\">Impressum</a>\n      <span class=\"footer-separator\"> | </span>\n      <a href=\"https://pioniergarage.de/datenschutz\" target=\"_blank\">Datenschutz</a>\n    </div>\n  </div>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * footer links\n */\na {\n  color: #888888; }\na:hover {\n  color: #fff; }\n.footer-separator {\n  margin: 0 5px; }\n/*\n * footer background color\n */\n.pg-footer {\n  background-color: #262626 !important; }\n.pg-footer-copyright {\n  background-color: #1b1b1b; }\n/*\n * footer text color\n */\n.pg-footer-text {\n  color: #888888; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvbWluaWMvYW5ndWxhcl9wcm9qZWN0cy9tZW1iZXItdG9vbC9NZW1iZXJUb29sL0NsaWVudEFwcC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QURDRDtFQUNDLGNBQWMsRUFBQTtBQUVoQjtFQUNFLFdBQVcsRUFBQTtBQUViO0VBQ0UsYUFBYSxFQUFBO0FBR2Y7O0VDQ0U7QURFRjtFQUNFLG9DQUFvQyxFQUFBO0FBRXRDO0VBQ0UseUJBQXlCLEVBQUE7QUFFM0I7O0VDQ0U7QURFRjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogZm9vdGVyIGxpbmtzXG4gKi9cbiBhIHtcbiAgY29sb3I6ICM4ODg4ODg7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uZm9vdGVyLXNlcGFyYXRvciB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi8qXG4gKiBmb290ZXIgYmFja2dyb3VuZCBjb2xvclxuICovXG4ucGctZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNiAhaW1wb3J0YW50O1xufVxuLnBnLWZvb3Rlci1jb3B5cmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxYjFiO1xufVxuLypcbiAqIGZvb3RlciB0ZXh0IGNvbG9yXG4gKi9cbi5wZy1mb290ZXItdGV4dCB7XG4gIGNvbG9yOiAjODg4ODg4O1xufVxuXG4iLCIvKlxuICogZm9vdGVyIGxpbmtzXG4gKi9cbmEge1xuICBjb2xvcjogIzg4ODg4ODsgfVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmZvb3Rlci1zZXBhcmF0b3Ige1xuICBtYXJnaW46IDAgNXB4OyB9XG5cbi8qXG4gKiBmb290ZXIgYmFja2dyb3VuZCBjb2xvclxuICovXG4ucGctZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNiAhaW1wb3J0YW50OyB9XG5cbi5wZy1mb290ZXItY29weXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWIxYjsgfVxuXG4vKlxuICogZm9vdGVyIHRleHQgY29sb3JcbiAqL1xuLnBnLWZvb3Rlci10ZXh0IHtcbiAgY29sb3I6ICM4ODg4ODg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"pg-red\">\n  <div class=\"nav-wrapper\">\n    <a href=\"https://pioniergarage.de/\" class=\"brand-logo\">\n      <img\n        style=\"height: 50px; padding-top: 5px;\"\n        src=\"assets/img/pioniergarage_logo.png\" alt=\"PionierGarage-Logo\">\n    </a>\n    <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li>\n        <a [routerLink]=\"['/carousel']\"><i class=\"material-icons\">view_carousel</i></a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/grid']\"><i class=\"material-icons\">view_module</i></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n * header modification\n */\nnav .brand-logo {\n  position: relative; }\n.nav-wrapper {\n  padding: 0px 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RvbWluaWMvYW5ndWxhcl9wcm9qZWN0cy9tZW1iZXItdG9vbC9NZW1iZXJUb29sL0NsaWVudEFwcC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VDRUU7QURDRDtFQUNDLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIGhlYWRlciBtb2RpZmljYXRpb25cbiAqL1xuIG5hdiAuYnJhbmQtbG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5uYXYtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuIiwiLypcbiAqIGhlYWRlciBtb2RpZmljYXRpb25cbiAqL1xubmF2IC5icmFuZC1sb2dvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5uYXYtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweCAxMHB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/personFilter.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/pipes/personFilter.pipe.ts ***!
  \***************************************************/
/*! exports provided: PersonFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonFilterPipe", function() { return PersonFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PersonFilterPipe = /** @class */ (function () {
    function PersonFilterPipe() {
    }
    PersonFilterPipe.prototype.transform = function (value, searchInput) {
        return value.filter(function (person) {
            // return person.name.toLowerCase().trim().includes(searchInput.toLowerCase().trim());
            return JSON.stringify(Object.values(person)).toLowerCase().trim().includes(searchInput.toLowerCase().trim());
            // ToDo search in each property of a person
        });
    };
    PersonFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'personFilterPipe'
        })
    ], PersonFilterPipe);
    return PersonFilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/person.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/person.service.ts ***!
  \***************************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var PersonService = /** @class */ (function () {
    function PersonService(http) {
        this.http = http;
        // api url
        this.API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].peopleApiUrl;
    }
    PersonService.prototype.getPersons = function () {
        return this.http.get('assets/people.json');
    };
    PersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    // URL of development API
    peopleApiUrl: 'assets/people.json'
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dominic/angular_projects/member-tool/MemberTool/ClientApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map