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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../js/calc.js":
/*!*********************!*\
  !*** ../js/calc.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function calc() {
    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById("total"),
        personsSum = 0,
        daysSum = 0,
        total = 0;
    totalValue.textContent = 0;


    persons.addEventListener("input", () => {
        persons.value = persons.value.replace(/[^0-9]/, " ");
    });

    restDays.addEventListener("input", () => {
        restDays.value = restDays.value.replace(/[^0-9]/, " ");
    });
  
    let payment = () => {
        daysSum = +restDays.value;
        personsSum = +persons.value;
        total = (daysSum * personsSum) * 4000;
        if (restDays.value == "") {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total;
        }
        if (restDays.value == "" || persons.value == "") {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total * place.options[place.selectedIndex].value;
        }
    };
    persons.addEventListener("input", payment);
    restDays.addEventListener("input", payment);
    place.addEventListener("change", payment);
}
module.exports = calc;

/***/ }),

/***/ "../js/form.js":
/*!*********************!*\
  !*** ../js/form.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function form() {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };
    let form = document.querySelector(".main-form"),
        input = form.querySelector("input"),
        contactForm = document.getElementById("form"),
        inp = contactForm.getElementsByTagName("input"),
        statusMessage = document.createElement("div");

        
        statusMessage.classList.add("status");
    
    input.addEventListener("input", () => {
        input.value = input.value.replace(/[^0-9+]/ig, "");
    });
    inp[1].addEventListener("input", () => {
        inp[1].value = inp[1].value.replace(/[^0-9+]/ig, "");
    });

    function sendForm(form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let formData = new FormData(form);
            let obj = {};
            formData.forEach(function (value, key) {
                obj[key] = value;
            });

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open("POST", "server.php");
                    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    };
                    request.send(data);
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    }
    function clearInp() {
		statusMessage.textContent = "";
	}
	input.oninput = clearInp;
    inp[0].oninput = clearInp;
    inp[1].oninput = clearInp;
    sendForm(form);
    sendForm(contactForm);
}
module.exports = form;

/***/ }),

/***/ "../js/modal.js":
/*!**********************!*\
  !*** ../js/modal.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function modal() {
    let body = document.querySelector("body"),
        overlay = document.querySelector(".overlay"),
        detail = document.querySelector(".more");

    body.addEventListener("click", (event) => {
        let target = event.target;
        if (target && target.classList.contains("more") || target.classList.contains("description-btn")) {
            overlay.style.display = "block";
            detail.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        }
        if (target && target.classList.contains("popup-close")) {
            overlay.style.display = "none";
            detail.classList.remove("more-splash");
            document.body.style.overflow = "";
            
        }
    });
}
module.exports = modal;

/***/ }),

/***/ "../js/slider.js":
/*!***********************!*\
  !*** ../js/slider.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function slider() {
    let slideIndex = 1,
        slides = document.querySelectorAll(".slider-item"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dotsWrap = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = "none");
        dots.forEach((item) => item.classList.remove("dot-active"));
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("dot-active");
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener("click", function () {
        plusSlides(-1);
    });
    next.addEventListener("click", function () {
        plusSlides(1);
    });
    dotsWrap.addEventListener("click", function (event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });
}
module.exports = slider;

/***/ }),

/***/ "../js/tabs.js":
/*!*********************!*\
  !*** ../js/tabs.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function tabs() {
	let tab = document.querySelectorAll(".info-header-tab"),
		info = document.querySelector(".info-header"),
		tabContent = document.querySelectorAll(".info-tabcontent");

	let hideTabContent = (a) => {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide");
		}
	};
	hideTabContent(1);

	let showTabContent = (b) => {
		if (tabContent[b].classList.contains("hide")); {
			tabContent[b].classList.remove("hid");
			tabContent[b].classList.add("show");
		}
	};

	info.addEventListener("click", (event) => {
		let target = event.target;
		if (target && target.classList.contains("info-header-tab")) {
			for (let i = 0; i < tab.length; i++) {
				if (target == tab[i]) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}

	});
}
module.exports = tabs;

/***/ }),

/***/ "../js/timer.js":
/*!**********************!*\
  !*** ../js/timer.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/*jshint esversion: 6 */
function timer() {
    let deadline = "2018-12-30";

    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        return {
            "total": t,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds,
        };
    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds");


        let updateClock = () => {
            let t = getTimeRemaining(endtime);
            hours.textContent = ("0" + t.hours).slice(-2);
            minutes.textContent = ("0" + t.minutes).slice(-2);
            seconds.textContent = ("0" + t.seconds).slice(-2);
            if (t.total <= 0) {
                document.querySelector(".hours").textContent = "00";
                document.querySelector(".minutes").textContent = "00";
                document.querySelector(".seconds").textContent = "00";
                clearInterval(timeInterval);

            }
        };
        let timeInterval = setInterval(updateClock, 1000);
        updateClock();
    };
    setClock("timer", deadline);
}
module.exports = timer;

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*jshint esversion: 6 */
window.addEventListener ('DOMContentLoaded', () => {
    'use strict';
    let calc = __webpack_require__(/*! ../js/calc.js */ "../js/calc.js"),
        form = __webpack_require__(/*! ../js/form.js */ "../js/form.js"),
        modal = __webpack_require__(/*! ../js/modal.js */ "../js/modal.js"),
        slider = __webpack_require__(/*! ../js/slider.js */ "../js/slider.js"),
        tabs = __webpack_require__(/*! ../js/tabs.js */ "../js/tabs.js"),
        timer = __webpack_require__(/*! ../js/timer.js */ "../js/timer.js");

        calc();
        form();
        modal();
        tabs();
        slider();
        timer();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map