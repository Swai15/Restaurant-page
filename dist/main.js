/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n\r\n\r\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\r\n//Tab switching\r\nconst tabs = document.querySelectorAll(\"[data-tab-target]\");\r\nconst tabContents = document.querySelectorAll(\"[data-tab-content]\")\r\n\r\ntabs.forEach((tab) => {\r\n  tab.addEventListener(\"click\",() => {\r\n    const target = document.querySelector(tab.dataset.tabTarget)\r\n    tabContents.forEach((tabContent) => {\r\n      tabContent.classList.remove(\"active\")\r\n    })\r\n    tabs.forEach((tab) => {\r\n      tab.classList.remove(\"active\");\r\n    })\r\n    tab.classList.add(\"active\")\r\n    target.classList.add(\"active\")\r\n  })\r\n})\r\n\r\n\n\n//# sourceURL=webpack://project/./src/index.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPage)\n/* harmony export */ });\nfunction createPage() {\r\n  const element = document.createElement(\"div\");\r\n  element.setAttribute(\"id\",\"content\")\r\n\r\n  element.innerHTML = `\r\n        <div class=\"content-top\">\r\n      <img src=\"/src/images/Ice cream 1.webp\" alt=\"ice cream image\">\r\n      <div class=\"content-top-description\">\r\n        <h1>#1 Best selling Icecream in the state</h1>\r\n        <p>\r\n          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit temporibus, obcaecati iure aut a et.\r\n          Obcaecati repudiandae architecto eveniet, qui facere voluptates veritatis mollitia! Aperiam nostrum ex,\r\n          consequuntur veniam doloribus esse delectus adipisci cumque impedit. Cupiditate eum error dolor soluta fugiat\r\n          quae eveniet, dolores eius quaerat nemo nam, illo accusantium.\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Start of MAIN section -->\r\n    <ul class=\"tabs\">\r\n      <li data-tab-target=\"#home\" class=\"tab active\">Home</li>\r\n      <li data-tab-target=\"#menu\" class=\"tab\">Menu</li>\r\n      <li data-tab-target=\"#contact\" class=\"tab\">Contact us</li>\r\n    </ul>\r\n\r\n    <div class=\"content-main\">\r\n\r\n\r\n      <!-- Home -->\r\n      <div id=\"home\" data-tab-content class=\"active\">\r\n        <h3>\r\n          Our Products trully are the finest in the market\r\n        </h3>\r\n        <p>\r\n          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ullam neque deserunt facere eaque dicta\r\n          corrupti eius, amet est, accusamus temporibus odio corporis deleniti et asperiores illo quia libero dolorum,\r\n          modi fugit beatae ducimus ut quas nulla? Ratione tempore rem odio odit, velit distinctio molestias quam\r\n          repudiandae, sit possimus cupiditate voluptates cumque accusamus dolorem illum optio earum labore cum a.\r\n        </p>\r\n      </div>\r\n\r\n      <!-- Menu -->\r\n      <div id=\"menu\" class=\"menu-container\" data-tab-content>\r\n        <div class=\"menu one\">\r\n          <img src=\"/src/images/civilization.jpg\" alt=\"civilization\">\r\n          <p><b>I was created at a time when the relevant images couldn't be fetched due to net issues. Here are some placeholder images in the meantime</b></p>\r\n        </div>\r\n        <div class=\"menu two\">\r\n          <img src=\"/src/images/female titan.jpg\" alt=\"Female Titan\">\r\n          <div class=\"menu-para\">\r\n            <p>*Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, qui.</p>\r\n            <p> *Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, qui.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"menu three\">\r\n          <img src=\"/src/images/rumbling.jpg\" alt=\"The rumbling\">\r\n          <div class=\"menu-para\">\r\n            <p>*Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, qui.</p>\r\n            <p> *Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, qui.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"menu four\">\r\n          <img src=\"/src/images/Ymir paths.jpg\" alt=\"Ymir in Paths\">\r\n          <div class=\"menu-para\">\r\n            <p>*Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, qui.</p>\r\n            <p> *Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, qui.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Contact us -->\r\n      <div id=\"contact\" data-tab-content>\r\n        <p><span class=\"contact\">Phone Number:</span> 0787654321 </p>\r\n        <p><span class=\"contact\">Email: </span>Icecreampalour@gmail.com</p>\r\n        <!-- <form action=\"\">\r\n          <textarea name=\"Feedback\" id=\"textarea\" cols=\"30\" rows=\"10\"></textarea>\r\n        </form> -->\r\n      </div>\r\n      <!-- end of MAIN section -->\r\n    </div>\r\n  `\r\n\r\n  const parentContainer = document.querySelector(\".content-attach\");\r\n  parentContainer.appendChild(element)\r\n}\r\n\n\n//# sourceURL=webpack://project/./src/page-load.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;