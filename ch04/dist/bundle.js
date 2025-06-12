/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/cals.js":
/*!*************************!*\
  !*** ./modules/cals.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   div: () => (/* binding */ div),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   num1: () => (/* binding */ num1),
/* harmony export */   num2: () => (/* binding */ num2),
/* harmony export */   num3: () => (/* binding */ num3),
/* harmony export */   num4: () => (/* binding */ num4),
/* harmony export */   sub: () => (/* binding */ sub)
/* harmony export */ });
// cals.js
const num1 = 1;
const num2 = 2;

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

// 한꺼번에 내보내기
const num3 = 3;
const num4 = 4;

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./main3.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_cals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cals.js */ "./modules/cals.js");
/*
    날짜 : 2025.06.12
    이름 : 김태경
    내용 : 모듈 번들러
*/



console.log(`add : ${(0,_modules_cals_js__WEBPACK_IMPORTED_MODULE_0__.add)(1, 2)}`);
console.log(`sub : ${(0,_modules_cals_js__WEBPACK_IMPORTED_MODULE_0__.sub)(1, 2)}`);
console.log(`mul : ${(0,_modules_cals_js__WEBPACK_IMPORTED_MODULE_0__.mul)(2, 3)}`);
console.log(`div : ${(0,_modules_cals_js__WEBPACK_IMPORTED_MODULE_0__.div)(4, 2)}`);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map