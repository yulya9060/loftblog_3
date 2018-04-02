webpackJsonp([3],{

/***/ 18:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flip_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_js_base_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_footer_footer_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_scss__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__welcome_scss__);





__WEBPACK_IMPORTED_MODULE_0__flip_js__["a" /* default */].init();

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let flip = {
  init(){
    let link = document.querySelector('.welcome__main-link');
    let flipBtn = document.getElementById('btn');
    let formFlip = document.querySelector('.welcome-flip');

    link.addEventListener('click',e=>{
      e.preventDefault();
      console.log('111');
      formFlip.classList.add('flip');
      link.classList.add('authhide');
    })

    flipBtn.addEventListener('click',e=>{
      e.preventDefault();
      console.log('222');
      formFlip.classList.remove('flip');
      link.classList.remove('authhide');
    })
    }
}
/* harmony default export */ __webpack_exports__["a"] = (flip);

/***/ })

},[8]);