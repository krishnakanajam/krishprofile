(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["experience-experience-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2 p0\">\n\n  <h3>Experience</h3>\n\n</div>\n\n<div class=\"col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2 panel\">\n\n  <div class=\"col-sm-12 pad\">\n\n    <div class=\"col-sm-8 pad\">\n\n      <h4 class=\"back\">UI & UX Developer</h4>\n\n      <table class=\"about\" border=\"1\">\n        <tr>\n          <td>EXADATA CONSULTING Pvt Ltd</td>\n        </tr>\n\n        <tr>\n          <td>Kukutpally, Hyderabad 500072.</td>\n        </tr>\n\n      </table>\n\n    </div>\n\n    <div class=\"col-sm-4 pad\">\n\n      <table class=\"about right\" border=\"1\">\n        <tr>\n          <td>DEC 2017 - FEB 2020</td>\n\n        </tr>\n\n        <tr>\n          <td>\n\n            Work Experience : 2Years 2Months\n\n          </td>\n\n        </tr>\n\n\n      </table>\n\n    </div>\n\n  </div>\n\n  <div class=\"col-sm-12 pad\">\n\n    <div class=\"col-sm-8 pad\">\n\n      <h4 class=\"back\">UI Developer</h4>\n\n      <table class=\"about\" border=\"1\">\n        <tr>\n          <td>KEKA TECHNOLOGIES</td>\n        </tr>\n\n        <tr>\n          <td>Madhapur, Hyderabad 500033.</td>\n        </tr>\n\n      </table>\n\n    </div>\n\n    <div class=\"col-sm-4 pad\">\n\n      <table class=\"about right\" border=\"1\">\n        <tr>\n          <td>MAR 2020 - OCT 2020</td>\n\n        </tr>\n\n        <tr>\n          <td>\n\n            Work Experience : 8Months\n\n          </td>\n\n        </tr>\n\n\n      </table>\n\n    </div>\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExperienceComponent = class ExperienceComponent {
    constructor() { }
    ngOnInit() {
        $(document).ready(function () {
            // for tooltips
            $('[data-toggle="tooltip"]').tooltip();
            // modal popups
            $('[data-magnify=gallery]').magnify({
                // Enable modal to drag
                draggable: true,
                // Enable modal to resize
                resizable: true,
                // Enable image to move
                movable: true,
                // Enable keyboard navigation
                keyboard: true,
                // Shows the title
                title: true,
                // Min width of modal
                modalWidth: 350,
                // Min height of modal
                modalHeight: 350,
                // Disable the image viewer maximized on init
                initMaximized: true,
            });
        });
    }
};
ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-experience',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/experience/experience.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExperienceComponent);



/***/ }),

/***/ "./src/app/experience/experience.module.ts":
/*!*************************************************!*\
  !*** ./src/app/experience/experience.module.ts ***!
  \*************************************************/
/*! exports provided: ExperienceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceModule", function() { return ExperienceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _routing_experience__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routing/experience */ "./src/app/routing/experience.ts");






let ExperienceModule = class ExperienceModule {
};
ExperienceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_routing_experience__WEBPACK_IMPORTED_MODULE_5__["experienceroutes"])
        ]
    })
], ExperienceModule);



/***/ }),

/***/ "./src/app/routing/experience.ts":
/*!***************************************!*\
  !*** ./src/app/routing/experience.ts ***!
  \***************************************/
/*! exports provided: experienceroutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experienceroutes", function() { return experienceroutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../experience/experience.component */ "./src/app/experience/experience.component.ts");


const experienceroutes = [
    { path: '', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_1__["ExperienceComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=experience-experience-module-es2015.js.map