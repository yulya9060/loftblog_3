webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fixedNav_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fixedNav_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__fixedNav_scss__);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hamburger_scss__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hamburger_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__hamburger_scss__);


let hamb = {
    init() {
        let bodyNode = document.body || document.getElementsByTagName('body')[0];
        let hamburger = document.getElementById('hamb');
        let hambSlider = document.querySelector('.hamburger--slider');
        let fixed = document.querySelector('.fixed');
        hamburger.addEventListener('click',()=>{
            hambSlider.classList.toggle('is-active');
            fixed.classList.toggle('fixed_shown');
            bodyNode.classList.toggle('body_overflow');
        })
    }
}

/* harmony default export */ __webpack_exports__["a"] = (hamb);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_scss__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__header_scss__);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_js_base_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_fixedNav_fixedNav_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_hamburger_hamburger_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header_header_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer_footer_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__work_scss__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__work_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__work_scss__);







__WEBPACK_IMPORTED_MODULE_2__components_hamburger_hamburger_js__["a" /* default */].init();

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[23]);