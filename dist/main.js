/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const tabs = document.querySelectorAll(\"[data-tab-target]\");\r\nconst tabContents = document.querySelectorAll(\"[data-tab-content]\")\r\n\r\ntabs.forEach((tab) => {\r\n  tab.addEventListener(\"click\",() => {\r\n    const target = document.querySelector(tab.dataset.tabTarget)\r\n    tabContents.forEach((tabContent) => {\r\n      tabContent.classList.remove(\"active\")\r\n    })\r\n    tabs.forEach((tab) => {\r\n      tab.classList.remove(\"active\");\r\n    })\r\n    tab.classList.add(\"active\")\r\n    target.classList.add(\"active\")\r\n  })\r\n})\r\n\r\n\n\n//# sourceURL=webpack://project/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;