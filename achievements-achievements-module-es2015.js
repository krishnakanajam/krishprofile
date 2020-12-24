(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["achievements-achievements-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/achievements/achievements.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/achievements/achievements.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2 p0\">\n\n  <h3>Achievements</h3>\n\n</div>\n\n<div class=\"col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2 panel\">\n\n\n  <div class=\"col-sm-12 pad\">\n\n    <h4 class=\"back\">Awards & Certifications</h4>\n\n    <table class=\"about\" border=\"1\">\n      <tr>\n        <td>\n          <i class=\"fas fa-trophy\"></i>&nbsp;&nbsp;&nbsp;MY EMACET rank is : 9055 (Free Education\n          for B.Tech)\n\n          <a data-magnify=\"gallery\" data-caption=\"EMACET Rank Card\" data-group=\"\" class=\"pop\" data-toggle=\"tooltip\"\n            data-placement=\"right\" title=\"click here to see Certificate\" href=\"./assets/images/emacet.jpg\"><i\n              class=\"fas fa-award\"></i></a>\n\n\n        </td>\n\n      </tr>\n\n      <tr>\n        <td>\n          <i class=\"fas fa-trophy\"></i>&nbsp;&nbsp;&nbsp;Awarded with Second prize in Robotics\n          and Matlab workshop in GEC 2015.\n\n\n          <a data-magnify=\"gallery\" data-caption=\"Workshop Certificate\" data-group=\"\" class=\"pop\" data-toggle=\"tooltip\"\n            data-placement=\"right\" title=\"click here to see Certificate\" href=\"./assets/images/robotics.jpg\"><i\n              class=\"fas fa-award\"></i></a>\n\n        </td>\n\n      </tr>\n\n\n      <tr>\n        <td>\n          <i class=\"fas fa-trophy\"></i>&nbsp;&nbsp;&nbsp;Awarded with First prize in sports such\n          as cricket and volley ball in GEC 2017.\n\n          <a data-magnify=\"gallery\" data-caption=\"Sports Certificate\" data-group=\"\" class=\"pop\" data-toggle=\"tooltip\"\n            data-placement=\"right\" title=\"click here to see Certificate\" href=\"./assets/images/sports.jpg\"><i\n              class=\"fas fa-award\"></i></a>\n\n        </td>\n\n      </tr>\n\n\n\n    </table>\n\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./src/app/achievements/achievements.component.css":
/*!*********************************************************!*\
  !*** ./src/app/achievements/achievements.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjaGlldmVtZW50cy9hY2hpZXZlbWVudHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/achievements/achievements.component.ts":
/*!********************************************************!*\
  !*** ./src/app/achievements/achievements.component.ts ***!
  \********************************************************/
/*! exports provided: AchievementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementsComponent", function() { return AchievementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AchievementsComponent = class AchievementsComponent {
    constructor() { }
    ngOnInit() {
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
    }
};
AchievementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-achievements',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./achievements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/achievements/achievements.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./achievements.component.css */ "./src/app/achievements/achievements.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AchievementsComponent);



/***/ }),

/***/ "./src/app/achievements/achievements.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/achievements/achievements.module.ts ***!
  \*****************************************************/
/*! exports provided: AchievementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementsModule", function() { return AchievementsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../achievements/achievements.component */ "./src/app/achievements/achievements.component.ts");
/* harmony import */ var _routing_achievements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../routing/achievements */ "./src/app/routing/achievements.ts");






let AchievementsModule = class AchievementsModule {
};
AchievementsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_4__["AchievementsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_routing_achievements__WEBPACK_IMPORTED_MODULE_5__["achievementsroutes"])
        ]
    })
], AchievementsModule);



/***/ }),

/***/ "./src/app/routing/achievements.ts":
/*!*****************************************!*\
  !*** ./src/app/routing/achievements.ts ***!
  \*****************************************/
/*! exports provided: achievementsroutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "achievementsroutes", function() { return achievementsroutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../achievements/achievements.component */ "./src/app/achievements/achievements.component.ts");


const achievementsroutes = [
    { path: '', component: _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_1__["AchievementsComponent"] }
];


/***/ })

}]);
//# sourceMappingURL=achievements-achievements-module-es2015.js.map