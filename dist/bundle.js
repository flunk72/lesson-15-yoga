/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/calc.js":
/*!********************!*\
  !*** ./js/calc.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*jshint esversion: 6 */\r\nfunction calc() {\r\n    let persons = document.querySelectorAll(\".counter-block-input\")[0],\r\n        restDays = document.querySelectorAll(\".counter-block-input\")[1],\r\n        place = document.getElementById(\"select\"),\r\n        totalValue = document.getElementById(\"total\"),\r\n        personsSum = 0,\r\n        daysSum = 0,\r\n        total = 0;\r\n    totalValue.textContent = 0;\r\n\r\n\r\n    persons.addEventListener(\"input\", () => {\r\n        persons.value = persons.value.replace(/[^0-9]/, \" \");\r\n    });\r\n\r\n    restDays.addEventListener(\"input\", () => {\r\n        restDays.value = restDays.value.replace(/[^0-9]/, \" \");\r\n    });\r\n  \r\n    let payment = () => {\r\n        daysSum = +restDays.value;\r\n        personsSum = +persons.value;\r\n        total = (daysSum * personsSum) * 4000;\r\n        if (restDays.value == \"\") {\r\n            totalValue.textContent = 0;\r\n        } else {\r\n            totalValue.textContent = total;\r\n        }\r\n        if (restDays.value == \"\" || persons.value == \"\") {\r\n            totalValue.textContent = 0;\r\n        } else {\r\n            totalValue.textContent = total * place.options[place.selectedIndex].value;\r\n        }\r\n    };\r\n    persons.addEventListener(\"input\", payment);\r\n    restDays.addEventListener(\"input\", payment);\r\n    place.addEventListener(\"change\", payment);\r\n}\r\nmodule.exports = calc;\n\n//# sourceURL=webpack:///./js/calc.js?");

/***/ }),

/***/ "./js/form.js":
/*!********************!*\
  !*** ./js/form.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*jshint esversion: 6 */\r\nfunction form() {\r\n    let message = {\r\n        loading: 'Загрузка...',\r\n        success: 'Спасибо! Скоро мы с Вами свяжемся!',\r\n        failure: 'Что-то пошло не так...'\r\n    };\r\n    let form = document.querySelector(\".main-form\"),\r\n        input = form.querySelector(\"input\"),\r\n        contactForm = document.getElementById(\"form\"),\r\n        inp = contactForm.getElementsByTagName(\"input\"),\r\n        statusMessage = document.createElement(\"div\");\r\n\r\n        \r\n        statusMessage.classList.add(\"status\");\r\n    \r\n    input.addEventListener(\"input\", () => {\r\n        input.value = input.value.replace(/[^0-9+]/ig, \"\");\r\n    });\r\n    inp[1].addEventListener(\"input\", () => {\r\n        inp[1].value = inp[1].value.replace(/[^0-9+]/ig, \"\");\r\n    });\r\n\r\n    function sendForm(form) {\r\n        form.addEventListener(\"submit\", function (event) {\r\n            event.preventDefault();\r\n            form.appendChild(statusMessage);\r\n\r\n            let formData = new FormData(form);\r\n            let obj = {};\r\n            formData.forEach(function (value, key) {\r\n                obj[key] = value;\r\n            });\r\n\r\n            function postData(data) {\r\n                return new Promise(function (resolve, reject) {\r\n                    let request = new XMLHttpRequest();\r\n                    request.open(\"POST\", \"server.php\");\r\n                    request.setRequestHeader(\"Content-type\", \"application/json; charset=utf-8\");\r\n                    request.onreadystatechange = function () {\r\n                        if (request.readyState < 4) {\r\n                            resolve();\r\n                        } else if (request.readyState === 4 && request.status == 200) {\r\n                            resolve();\r\n                        } else {\r\n                            reject();\r\n                        }\r\n                    };\r\n                    request.send(data);\r\n                });\r\n            }\r\n\r\n            function clearInput() {\r\n                for (let i = 0; i < input.length; i++) {\r\n                    input[i].value = '';\r\n                }\r\n            }\r\n            postData(formData)\r\n                .then(() => statusMessage.innerHTML = message.loading)\r\n                .then(() => statusMessage.innerHTML = message.success)\r\n                .catch(() => statusMessage.innerHTML = message.failure)\r\n                .then(clearInput);\r\n        });\r\n    }\r\n    function clearInp() {\r\n\t\tstatusMessage.text.content = \"\";\r\n\t}\r\n\tinput.oninput = clearInp;\r\n\tinp.oninput = clearInp;\r\n    sendForm(form);\r\n    sendForm(contactForm);\r\n}\r\nmodule.exports = form;\n\n//# sourceURL=webpack:///./js/form.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*jshint esversion: 6 */\r\nfunction modal() {\r\n    let body = document.querySelector(\"body\"),\r\n        overlay = document.querySelector(\".overlay\"),\r\n        detail = document.querySelector(\".more\");\r\n\r\n    body.addEventListener(\"click\", (event) => {\r\n        let target = event.target;\r\n        if (target && target.classList.contains(\"more\") || target.classList.contains(\"description-btn\")) {\r\n            overlay.style.display = \"block\";\r\n            detail.classList.add(\"more-splash\");\r\n            document.body.style.overflow = \"hidden\";\r\n        }\r\n        if (target && target.classList.contains(\"popup-close\")) {\r\n            overlay.style.display = \"none\";\r\n            detail.classList.remove(\"more-splash\");\r\n            document.body.style.overflow = \"\";\r\n            \r\n        }\r\n    });\r\n}\r\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./js/modal.js?");

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*jshint esversion: 6 */\r\nfunction slider() {\r\n    let slideIndex = 1,\r\n        slides = document.querySelectorAll(\".slider-item\"),\r\n        prev = document.querySelector(\".prev\"),\r\n        next = document.querySelector(\".next\"),\r\n        dotsWrap = document.querySelector(\".slider-dots\"),\r\n        dots = document.querySelectorAll(\".dot\");\r\n\r\n    showSlides(slideIndex);\r\n\r\n    function showSlides(n) {\r\n        if (n > slides.length) {\r\n            slideIndex = 1;\r\n        }\r\n        if (n < 1) {\r\n            slideIndex = slides.length;\r\n        }\r\n        slides.forEach((item) => item.style.display = \"none\");\r\n        dots.forEach((item) => item.classList.remove(\"dot-active\"));\r\n        slides[slideIndex - 1].style.display = \"block\";\r\n        dots[slideIndex - 1].classList.add(\"dot-active\");\r\n    }\r\n\r\n    function plusSlides(n) {\r\n        showSlides(slideIndex += n);\r\n    }\r\n\r\n    function currentSlide(n) {\r\n        showSlides(slideIndex = n);\r\n    }\r\n\r\n    prev.addEventListener(\"click\", function () {\r\n        plusSlides(-1);\r\n    });\r\n    next.addEventListener(\"click\", function () {\r\n        plusSlides(1);\r\n    });\r\n    dotsWrap.addEventListener(\"click\", function (event) {\r\n        for (let i = 0; i < dots.length + 1; i++) {\r\n            if (event.target.classList.contains(\"dot\") && event.target == dots[i - 1]) {\r\n                currentSlide(i);\r\n            }\r\n        }\r\n    });\r\n}\r\nmodule.exports = slider;\n\n//# sourceURL=webpack:///./js/slider.js?");

/***/ }),

/***/ "./js/tabs.js":
/*!********************!*\
  !*** ./js/tabs.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*jshint esversion: 6 */\r\nfunction tabs() {\r\n\tlet tab = document.querySelectorAll(\".info-header-tab\"),\r\n\t\tinfo = document.querySelector(\".info-header\"),\r\n\t\ttabContent = document.querySelectorAll(\".info-tabcontent\");\r\n\r\n\tlet hideTabContent = (a) => {\r\n\t\tfor (let i = a; i < tabContent.length; i++) {\r\n\t\t\ttabContent[i].classList.remove(\"show\");\r\n\t\t\ttabContent[i].classList.add(\"hide\");\r\n\t\t}\r\n\t};\r\n\thideTabContent(1);\r\n\r\n\tlet showTabContent = (b) => {\r\n\t\tif (tabContent[b].classList.contains(\"hide\")); {\r\n\t\t\ttabContent[b].classList.remove(\"hid\");\r\n\t\t\ttabContent[b].classList.add(\"show\");\r\n\t\t}\r\n\t};\r\n\r\n\tinfo.addEventListener(\"click\", (event) => {\r\n\t\tlet target = event.target;\r\n\t\tif (target && target.classList.contains(\"info-header-tab\")) {\r\n\t\t\tfor (let i = 0; i < tab.length; i++) {\r\n\t\t\t\tif (target == tab[i]) {\r\n\t\t\t\t\thideTabContent(0);\r\n\t\t\t\t\tshowTabContent(i);\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t});\r\n}\r\nmodule.exports = tabs;\n\n//# sourceURL=webpack:///./js/tabs.js?");

/***/ }),

/***/ "./js/timer.js":
/*!*********************!*\
  !*** ./js/timer.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*jshint esversion: 6 */\r\nfunction timer() {\r\n    let deadline = \"2018-12-30\";\r\n\r\n    let getTimeRemaining = (endtime) => {\r\n        let t = Date.parse(endtime) - Date.parse(new Date()),\r\n            seconds = Math.floor((t / 1000) % 60),\r\n            minutes = Math.floor((t / 1000 / 60) % 60),\r\n            hours = Math.floor((t / (1000 * 60 * 60)));\r\n        return {\r\n            \"total\": t,\r\n            \"hours\": hours,\r\n            \"minutes\": minutes,\r\n            \"seconds\": seconds,\r\n        };\r\n    };\r\n\r\n    let setClock = (id, endtime) => {\r\n        let timer = document.getElementById(id),\r\n            hours = timer.querySelector(\".hours\"),\r\n            minutes = timer.querySelector(\".minutes\"),\r\n            seconds = timer.querySelector(\".seconds\");\r\n\r\n\r\n        let updateClock = () => {\r\n            let t = getTimeRemaining(endtime);\r\n            hours.textContent = (\"0\" + t.hours).slice(-2);\r\n            minutes.textContent = (\"0\" + t.minutes).slice(-2);\r\n            seconds.textContent = (\"0\" + t.seconds).slice(-2);\r\n            if (t.total <= 0) {\r\n                document.querySelector(\".hours\").textContent = \"00\";\r\n                document.querySelector(\".minutes\").textContent = \"00\";\r\n                document.querySelector(\".seconds\").textContent = \"00\";\r\n                clearInterval(timeInterval);\r\n\r\n            }\r\n        };\r\n        let timeInterval = setInterval(updateClock, 1000);\r\n        updateClock();\r\n    };\r\n    setClock(\"timer\", deadline);\r\n}\r\nmodule.exports = timer;\n\n//# sourceURL=webpack:///./js/timer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*jshint esversion: 6 */\r\nwindow.addEventListener ('DOMContentLoaded', () => {\r\n    'use strict';\r\n    let calc = __webpack_require__(/*! ../js/calc.js */ \"./js/calc.js\"),\r\n        form = __webpack_require__(/*! ../js/form.js */ \"./js/form.js\"),\r\n        modal = __webpack_require__(/*! ../js/modal.js */ \"./js/modal.js\"),\r\n        slider = __webpack_require__(/*! ../js/slider.js */ \"./js/slider.js\"),\r\n        tabs = __webpack_require__(/*! ../js/tabs.js */ \"./js/tabs.js\"),\r\n        timer = __webpack_require__(/*! ../js/timer.js */ \"./js/timer.js\");\r\n\r\n        calc();\r\n        form();\r\n        modal();\r\n        tabs();\r\n        slider();\r\n        timer();\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });