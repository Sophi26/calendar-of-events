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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setColorWeekday__ = __webpack_require__(1);
;

const options = {
    month: 'long',
};
function main(data) {
    const d_obj = document.getElementById('date');
    if (!d_obj)
        return;
    const day = data.getDate();
    const year = data.getFullYear();
    let str_day = day.toString();
    const str_month = data.toLocaleString("ru", options);
    const str_year = year.toString();
    if (day < 10) {
        str_day = '0' + str_day;
    }
    d_obj.textContent = str_day + " " + str_month + " " + str_year;
    const weekday = data.getDay();
    Object(__WEBPACK_IMPORTED_MODULE_0__setColorWeekday__["a" /* default */])(weekday, 'rgba(39, 216, 156, .6)');
}



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
;
function main(weekday, color) {
    const w_d = document.getElementById("week-flex-block" + weekday);
    if (!w_d)
        return;
    w_d.style.background = color;
}



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
function main() {
    const screen_date = document.getElementById("date");
    if (!screen_date)
        return new Date(0);
    const str_date = screen_date.textContent;
    if (!str_date)
        return new Date(0);
    const arr = str_date.split(' ');
    let d;
    if (arr[0][0] == '0') {
        d = Number(arr[0][1]);
    }
    else {
        d = Number(arr[0]);
    }
    let m;
    switch (arr[1]) {
        case 'февраль':
            m = 1;
            break;
        case 'март':
            m = 2;
            break;
        case 'апрель':
            m = 3;
            break;
        case 'май':
            m = 4;
            break;
        case 'июнь':
            m = 5;
            break;
        case 'июль':
            m = 6;
            break;
        case 'август':
            m = 7;
            break;
        case 'сентябрь':
            m = 8;
            break;
        case 'октябрь':
            m = 9;
            break;
        case 'ноябрь':
            m = 10;
            break;
        case 'декабрь':
            m = 11;
            break;
        default:
            m = 0;
    }
    let y = Number(arr[2]);
    const screen_time = document.getElementById("time");
    if (!screen_time)
        return new Date(0);
    const str_time = screen_time.textContent;
    if (!str_time)
        return new Date(0);
    const arr_time = str_time.split(':');
    let h;
    if (arr_time[0][0] == '0') {
        h = Number(arr_time[0][1]);
    }
    else {
        h = Number(arr_time[0]);
    }
    let min;
    if (arr_time[1][0] == '0') {
        min = Number(arr_time[1][1]);
    }
    else {
        min = Number(arr_time[1]);
    }
    return new Date(y, m, d, h, min);
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addEventToScreen__ = __webpack_require__(12);

function main(arr_emitter, eventName) {
    fetch("/api/events", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
        return response.json();
    })
        .then((events) => {
        events.sort((ev1, ev2) => {
            return Date.parse(ev1.startData) - Date.parse(ev2.startData);
        });
        const cur_time = new Date();
        events.forEach((event) => {
            const start_time = new Date(event.startData);
            const end_time = new Date(event.endData);
            if ((cur_time.getDate() == start_time.getDate() && cur_time.getMonth() == start_time.getMonth() && cur_time.getFullYear() == start_time.getFullYear()) ||
                (cur_time.getDate() == end_time.getDate() && cur_time.getMonth() == end_time.getMonth() && cur_time.getFullYear() == end_time.getFullYear())) {
                const cur_hour = cur_time.getHours();
                const cur_min = cur_time.getMinutes();
                const start_hour = start_time.getHours();
                const start_min = start_time.getMinutes();
                const end_hour = end_time.getHours();
                const end_min = end_time.getMinutes();
                if (cur_hour <= 12 && (start_hour != 12 && end_hour <= 12)) {
                    if ((start_hour < cur_hour || start_hour > cur_hour) && end_hour == cur_hour) {
                        if (end_min >= cur_min) {
                            Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                        }
                    }
                    if (start_hour == cur_hour && end_hour == cur_hour) {
                        if (end_min >= cur_min) {
                            Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                        }
                    }
                    if (start_hour == cur_hour && end_hour > cur_hour) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                    }
                    if ((start_hour > cur_hour || start_hour < cur_hour) && end_hour > cur_hour) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                    }
                }
                if (cur_hour >= 12 && (start_hour >= 12 || end_hour >= 12 || end_hour == 0)) {
                    if (start_hour < cur_hour && end_hour == cur_hour) {
                        if (end_min >= cur_min) {
                            Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                        }
                    }
                    if (start_hour == cur_hour && end_hour == cur_hour) {
                        if (end_min >= cur_min) {
                            Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                        }
                    }
                    if (start_hour == cur_hour && (end_hour > cur_hour || end_hour == 0)) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                    }
                    if ((start_hour > cur_hour || start_hour < cur_hour) && (end_hour > cur_hour || end_hour == 0)) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(event.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                    }
                }
            }
        });
    })
        .catch();
}



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
;
function main(arr_emitter) {
    const list = document.getElementById('cur-events');
    if (!list)
        return;
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    for (let i = 0; i < 48; ++i) {
        const sec = document.getElementById('sector' + i);
        if (!sec)
            return;
        sec.style.strokeOpacity = '.2';
        sec.style.stroke = 'snow';
    }
    for (let i = 0; i < 48; ++i) {
        const txt = document.getElementById('text' + i);
        if (!txt)
            return;
        txt.textContent = '';
    }
    while (arr_emitter.length != 0) {
        arr_emitter.shift();
    }
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addEventToList__ = __webpack_require__(11);

function main(new_date) {
    fetch("/api/events", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
        return response.json();
    })
        .then((events) => {
        events.sort((ev1, ev2) => {
            return Date.parse(ev1.startData) - Date.parse(ev2.startData);
        });
        events.forEach((event) => {
            const start_time = new Date(event.startData);
            const end_time = new Date(event.endData);
            if ((new_date.getDate() == start_time.getDate() && new_date.getMonth() == start_time.getMonth() && new_date.getFullYear() == start_time.getFullYear()) ||
                (new_date.getDate() == end_time.getDate() && new_date.getMonth() == end_time.getMonth() && new_date.getFullYear() == end_time.getFullYear())) {
                const start_hour = start_time.getHours();
                const start_min = start_time.getMinutes();
                const end_hour = end_time.getHours();
                const end_min = end_time.getMinutes();
                const list = document.getElementById('cur-events');
                if (!list)
                    return;
                const li = Object(__WEBPACK_IMPORTED_MODULE_0__addEventToList__["a" /* default */])(event.name, start_hour, start_min, end_hour, end_min);
                list.appendChild(li);
            }
        });
    })
        .catch();
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__degrees_to_radian__ = __webpack_require__(9);
;

function main(degrees, r, adjust, x) {
    var x = x || r, adj = adjust || 1;
    return x + r * adj * Math.cos(Object(__WEBPACK_IMPORTED_MODULE_0__degrees_to_radian__["a" /* default */])(degrees));
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__degrees_to_radian__ = __webpack_require__(9);
;

function main(degrees, r, adjust, y) {
    var y = y || r, adj = adjust || 1;
    return y + r * adj * Math.sin(Object(__WEBPACK_IMPORTED_MODULE_0__degrees_to_radian__["a" /* default */])(degrees));
}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
;
function main(table_days) {
    while (table_days.firstChild) {
        table_days.removeChild(table_days.firstChild);
    }
}



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
;
function main(degrees) {
    var adjust = Math.PI / 2;
    return (degrees * Math.PI / 180) - adjust;
}



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
;
function main(data) {
    let d = data.getDate();
    let m = data.getMonth();
    let y = data.getFullYear();
    if (m == 1) {
        if (d == 28) {
            if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
                ++d;
            }
            else {
                d = 1;
                ++m;
            }
        }
        else if (d == 29) {
            d = 1;
            ++m;
        }
        else {
            ++d;
        }
    }
    else if (m == 0 || m == 2 || m == 4 || m == 6 || m == 7 || m == 9 || m == 11) {
        if (d == 31) {
            d = 1;
            if (m == 11) {
                m = 0;
                ++y;
            }
            else {
                ++m;
            }
        }
        else {
            ++d;
        }
    }
    else {
        if (d == 30) {
            d = 1;
            ++m;
        }
        else {
            ++d;
        }
    }
    return new Date(y, m, d);
}



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
function main(name, start_hour, start_min, end_hour, end_min) {
    let str_start_hour = start_hour.toString();
    let str_start_min = start_min.toString();
    let str_end_hour = end_hour.toString();
    let str_end_min = end_min.toString();
    if (start_hour < 10)
        str_start_hour = '0' + str_start_hour;
    if (start_min < 10)
        str_start_min = '0' + str_start_min;
    if (end_hour < 10)
        str_end_hour = '0' + str_end_hour;
    if (end_min < 10)
        str_end_min = '0' + str_end_min;
    let li = document.createElement("li");
    li.setAttribute('class', 'newEvent');
    let flexContainer = document.createElement("div");
    flexContainer.setAttribute('class', 'event-flex-container');
    let markFlexBlock = document.createElement("div");
    markFlexBlock.setAttribute('class', 'mark-flex-block');
    let markText = document.createElement("p");
    markText.appendChild(document.createTextNode(name[0]));
    markFlexBlock.appendChild(markText);
    flexContainer.appendChild(markFlexBlock);
    let textFlexBlock = document.createElement("div");
    textFlexBlock.setAttribute('class', 'text-flex-block');
    let ul = document.createElement("ul");
    ul.setAttribute('class', 'info');
    let liName = document.createElement("li");
    liName.setAttribute('class', 'eventInfo');
    let textName = document.createElement("p");
    textName.setAttribute('class', 'nameEvent');
    textName.appendChild(document.createTextNode(name));
    liName.appendChild(textName);
    ul.appendChild(liName);
    let liTime = document.createElement("li");
    liTime.setAttribute('class', 'eventInfo');
    let textTime = document.createElement("p");
    textTime.setAttribute('class', 'timeEvent');
    textTime.appendChild(document.createTextNode(str_start_hour + ':' + str_start_min + ' - ' + str_end_hour + ':' + str_end_min));
    liTime.appendChild(textTime);
    ul.appendChild(liTime);
    textFlexBlock.appendChild(ul);
    flexContainer.appendChild(textFlexBlock);
    li.appendChild(flexContainer);
    return li;
}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addEventToList__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addListenerToEvent__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setColorSector__ = __webpack_require__(13);
;



function main(name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName) {
    const list = document.getElementById('cur-events');
    if (!list)
        return;
    const li = Object(__WEBPACK_IMPORTED_MODULE_0__addEventToList__["a" /* default */])(name, start_hour, start_min, end_hour, end_min);
    list.appendChild(li);
    Object(__WEBPACK_IMPORTED_MODULE_2__setColorSector__["a" /* default */])(start_hour, start_min, end_hour, end_min, 'rgba(124, 26, 145, .8)', name);
    Object(__WEBPACK_IMPORTED_MODULE_1__addListenerToEvent__["a" /* default */])(li, arr_emitter, eventName, start_hour, start_min, end_hour, end_min);
}



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setNameEventInSector__ = __webpack_require__(31);
;

function main(start_hour, start_min, end_hour, end_min, color, name) {
    if (start_hour >= 12)
        start_hour -= 12;
    if (end_hour >= 12)
        end_hour -= 12;
    const n_start_sec = start_hour * 4 + start_min * 4 / 60;
    const n_end_sec = (end_hour * 4 - 1) + end_min * 4 / 60;
    if (n_end_sec < n_start_sec) {
        for (let i = n_start_sec; i <= 47; i++) {
            const sec = document.getElementById('sector' + i);
            if (!sec)
                return;
            sec.style.strokeOpacity = '.2';
            sec.style.stroke = color;
        }
        for (let i = 0; i <= n_end_sec; i++) {
            const sec = document.getElementById('sector' + i);
            if (!sec)
                return;
            sec.style.strokeOpacity = '.2';
            sec.style.stroke = color;
        }
    }
    else {
        for (let i = n_start_sec; i <= n_end_sec; i++) {
            const sec = document.getElementById('sector' + i);
            if (!sec)
                return;
            sec.style.strokeOpacity = '.2';
            sec.style.stroke = color;
        }
    }
    Object(__WEBPACK_IMPORTED_MODULE_0__setNameEventInSector__["a" /* default */])(n_start_sec, n_end_sec, name);
}



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
;
function main(data) {
    let d = data.getDate();
    let m = data.getMonth();
    let y = data.getFullYear();
    if (m == 2) {
        if (d == 1) {
            if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
                d = 29;
            }
            else {
                d = 28;
            }
            --m;
        }
        else {
            --d;
        }
    }
    else if (m == 4 || m == 6 || m == 7 || m == 9 || m == 11) {
        if (d == 1) {
            d = 30;
            --m;
        }
        else {
            --d;
        }
    }
    else {
        if (d == 1) {
            if (m == 0) {
                d = 31;
                m = 11;
                --y;
            }
            else {
                d = 31;
                --m;
            }
        }
        else {
            --d;
        }
    }
    return new Date(y, m, d);
}



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawWeekdays__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawMonthNavigation__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drawEmptyCell__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drawCellWithDate__ = __webpack_require__(41);
;




function main(data, table_days, arr_emitter, eventName) {
    Object(__WEBPACK_IMPORTED_MODULE_1__drawMonthNavigation__["a" /* default */])(data, table_days, arr_emitter, eventName);
    Object(__WEBPACK_IMPORTED_MODULE_0__drawWeekdays__["a" /* default */])(table_days);
    const month = data.getMonth();
    const year = data.getFullYear();
    let total_days;
    if (month == 1) {
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            total_days = 29;
        }
        else {
            total_days = 28;
        }
    }
    else if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        total_days = 31;
    }
    else {
        total_days = 30;
    }
    let start_day = new Date(year, month, 1).getDay();
    if (start_day == 0) {
        start_day = 7;
    }
    --start_day;
    const final_index = Math.ceil((total_days + start_day) / 7) * 7;
    let day = 1;
    let index = 0;
    let tr;
    do {
        if (index % 7 == 0) {
            tr = document.createElement("tr");
        }
        if ((index < start_day) || (index >= (total_days + start_day))) {
            Object(__WEBPACK_IMPORTED_MODULE_2__drawEmptyCell__["a" /* default */])(tr);
        }
        else {
            Object(__WEBPACK_IMPORTED_MODULE_3__drawCellWithDate__["a" /* default */])(index, day, month, year, tr, table_days, arr_emitter, eventName);
            ++day;
        }
        if (index % 7 == 6) {
            table_days.appendChild(tr);
        }
        ++index;
    } while (index < final_index);
}



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
;
function main(display) {
    const modal_shadow = document.getElementById('modal-shadow1');
    if (!modal_shadow)
        return;
    modal_shadow.style.display = display;
    const modal_window = document.getElementById('modal-window1');
    if (!modal_window)
        return;
    modal_window.style.display = display;
}



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
;
function main(display) {
    const modal_shadow = document.getElementById('modal-shadow');
    if (!modal_shadow)
        return;
    modal_shadow.style.display = display;
    const modal_window = document.getElementById('modal-window');
    if (!modal_window)
        return;
    modal_window.style.display = display;
}



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calendar_index__ = __webpack_require__(19);
;

Object(__WEBPACK_IMPORTED_MODULE_0__calendar_index__["a" /* default */])();


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawClock__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setScreenTime__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setScreenDate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__initNextPrevButtons__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__initChooseWeekdayButtons__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initRefreshButton__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__initCalendarButton__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__initFormButton__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__initEvents__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__setControlEvent__ = __webpack_require__(47);










function main() {
    let arr_emitter = [];
    const eventName = 'time-is-up';
    Object(__WEBPACK_IMPORTED_MODULE_0__drawClock__["a" /* default */])();
    setInterval(__WEBPACK_IMPORTED_MODULE_1__setScreenTime__["a" /* default */], 1000);
    const cur_time = new Date();
    Object(__WEBPACK_IMPORTED_MODULE_2__setScreenDate__["a" /* default */])(cur_time);
    Object(__WEBPACK_IMPORTED_MODULE_3__initNextPrevButtons__["a" /* default */])(arr_emitter, eventName);
    Object(__WEBPACK_IMPORTED_MODULE_4__initChooseWeekdayButtons__["a" /* default */])(arr_emitter, eventName);
    Object(__WEBPACK_IMPORTED_MODULE_5__initRefreshButton__["a" /* default */])(arr_emitter, eventName);
    Object(__WEBPACK_IMPORTED_MODULE_6__initCalendarButton__["a" /* default */])(arr_emitter, eventName);
    Object(__WEBPACK_IMPORTED_MODULE_7__initFormButton__["a" /* default */])(arr_emitter, eventName);
    Object(__WEBPACK_IMPORTED_MODULE_8__initEvents__["a" /* default */])(arr_emitter, eventName);
    setInterval(__WEBPACK_IMPORTED_MODULE_9__setControlEvent__["a" /* default */], 1000, arr_emitter, eventName);
}



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawHours__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__drawHands__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drawText__ = __webpack_require__(24);
;



const r = 100;
function main() {
    const circle = document.getElementById('circle');
    if (!circle)
        return;
    circle.setAttribute('r', (r - 5).toString());
    circle.setAttribute('cx', r.toString());
    circle.setAttribute('cy', r.toString());
    const i_circle = document.getElementById('inner_circle');
    if (!i_circle)
        return;
    i_circle.setAttribute('r', (r / 4).toString());
    i_circle.setAttribute('cx', r.toString());
    i_circle.setAttribute('cy', r.toString());
    Object(__WEBPACK_IMPORTED_MODULE_0__drawHours__["a" /* default */])(r);
    Object(__WEBPACK_IMPORTED_MODULE_2__drawText__["a" /* default */])();
    setInterval(__WEBPACK_IMPORTED_MODULE_1__drawHands__["a" /* default */], 1000);
}



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_point_X_value__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_point_Y_value__ = __webpack_require__(7);
;


function main(r) {
    for (let i = 0; i < 12; i++) {
        const hour = document.getElementById('hour' + i);
        if (!hour)
            return;
        let degrees = i * 30;
        hour.setAttribute('x1', Object(__WEBPACK_IMPORTED_MODULE_0__get_point_X_value__["a" /* default */])(degrees, r, 0.93, NaN).toString());
        hour.setAttribute('y1', Object(__WEBPACK_IMPORTED_MODULE_1__get_point_Y_value__["a" /* default */])(degrees, r, 0.93, NaN).toString());
        hour.setAttribute('x2', Object(__WEBPACK_IMPORTED_MODULE_0__get_point_X_value__["a" /* default */])(degrees, r, NaN, NaN).toString());
        hour.setAttribute('y2', Object(__WEBPACK_IMPORTED_MODULE_1__get_point_Y_value__["a" /* default */])(degrees, r, NaN, NaN).toString());
    }
}



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawHand__ = __webpack_require__(23);
;

const SECONDS_HAND_SIZE = 0.95;
const MINUTES_HAND_SIZE = 0.85;
const HOURS_HAND_SIZE = 0.55;
function main() {
    const currentTime = new Date();
    const second_hand = document.getElementById('secondhand');
    const minute_hand = document.getElementById('minutehand');
    const hour_hand = document.getElementById('hourhand');
    if (!second_hand || !minute_hand || !hour_hand)
        return;
    Object(__WEBPACK_IMPORTED_MODULE_0__drawHand__["a" /* default */])(second_hand, currentTime.getSeconds(), SECONDS_HAND_SIZE, 6);
    Object(__WEBPACK_IMPORTED_MODULE_0__drawHand__["a" /* default */])(minute_hand, currentTime.getMinutes(), MINUTES_HAND_SIZE, 6);
    Object(__WEBPACK_IMPORTED_MODULE_0__drawHand__["a" /* default */])(hour_hand, currentTime.getHours(), HOURS_HAND_SIZE, 30);
}



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_point_X_value__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_point_Y_value__ = __webpack_require__(7);
;


function main(hand, value, size, degrees) {
    const circle = document.getElementById('circle');
    if (!circle)
        return;
    const r = circle.getAttribute('r');
    const c_x = circle.getAttribute('cx');
    const c_y = circle.getAttribute('cy');
    if (!r || !c_x || !c_y)
        return;
    const cr = parseInt(r);
    const cx = parseInt(c_x);
    const cy = parseInt(c_y);
    const deg = degrees * value;
    const x2 = Object(__WEBPACK_IMPORTED_MODULE_0__get_point_X_value__["a" /* default */])(deg, cr, size, cx);
    const y2 = Object(__WEBPACK_IMPORTED_MODULE_1__get_point_Y_value__["a" /* default */])(deg, cr, size, cy);
    hand.setAttribute('x1', cx.toString());
    hand.setAttribute('y1', cy.toString());
    hand.setAttribute('x2', x2.toString());
    hand.setAttribute('y2', y2.toString());
}



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_point_X_value__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__get_point_Y_value__ = __webpack_require__(7);
;


function main() {
    for (let i = 0; i < 24; ++i) {
        const text_line = document.getElementById('for-text' + i);
        if (!text_line)
            return;
        const circle = document.getElementById('circle');
        if (!circle)
            return;
        const r = circle.getAttribute('r');
        const c_x = circle.getAttribute('cx');
        const c_y = circle.getAttribute('cy');
        if (!r || !c_x || !c_y)
            return;
        const cr = parseInt(r) + 5;
        const cx = parseInt(c_x);
        const cy = parseInt(c_y);
        let degrees = i * 7.5;
        text_line.setAttribute('d', 'M ' + cx.toString() + ' ' + cy.toString() + ' L ' + Object(__WEBPACK_IMPORTED_MODULE_0__get_point_X_value__["a" /* default */])(degrees, cr, NaN, NaN).toString() + ' ' + Object(__WEBPACK_IMPORTED_MODULE_1__get_point_Y_value__["a" /* default */])(degrees, cr, NaN, NaN).toString());
    }
    for (let i = 24; i < 48; ++i) {
        const text_line = document.getElementById('for-text' + i);
        if (!text_line)
            return;
        const circle = document.getElementById('circle');
        if (!circle)
            return;
        const r = circle.getAttribute('r');
        const c_x = circle.getAttribute('cx');
        const c_y = circle.getAttribute('cy');
        if (!r || !c_x || !c_y)
            return;
        const cr = parseInt(r) + 5;
        const cx = parseInt(c_x);
        const cy = parseInt(c_y);
        let degrees = i * 7.5;
        text_line.setAttribute('d', 'M ' + Object(__WEBPACK_IMPORTED_MODULE_0__get_point_X_value__["a" /* default */])(degrees, cr, NaN, NaN).toString() + ' ' + Object(__WEBPACK_IMPORTED_MODULE_1__get_point_Y_value__["a" /* default */])(degrees, cr, NaN, NaN).toString() + ' L ' + cx.toString() + ' ' + cy.toString());
    }
}



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
;
function main() {
    let t_obj = document.getElementById('time');
    if (!t_obj)
        return;
    const currentTime = new Date();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    let str_hour = hour.toString();
    let str_minute = minute.toString();
    if (hour < 10) {
        str_hour = '0' + str_hour;
    }
    if (minute < 10) {
        str_minute = '0' + str_minute;
    }
    t_obj.textContent = str_hour + ':' + str_minute;
}



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setNextDay__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setPrevDay__ = __webpack_require__(32);
;


function main(arr_emitter, eventName) {
    const next_button = document.getElementById('next');
    if (!next_button)
        return;
    next_button.addEventListener('click', () => {
        Object(__WEBPACK_IMPORTED_MODULE_0__setNextDay__["a" /* default */])(arr_emitter, eventName);
    });
    const prev_button = document.getElementById('prev');
    if (!prev_button)
        return;
    prev_button.addEventListener('click', () => {
        Object(__WEBPACK_IMPORTED_MODULE_1__setPrevDay__["a" /* default */])(arr_emitter, eventName);
    });
}



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getScreenDate__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setColorWeekday__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getNextDay__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setScreenDate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clearAll__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initOtherDayEvents__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__initEvents__ = __webpack_require__(3);
;







function main(arr_emitter, eventName) {
    const screen_date = Object(__WEBPACK_IMPORTED_MODULE_0__getScreenDate__["a" /* default */])();
    const screen_weekday = screen_date.getDay();
    Object(__WEBPACK_IMPORTED_MODULE_1__setColorWeekday__["a" /* default */])(screen_weekday, 'snow');
    const new_date = Object(__WEBPACK_IMPORTED_MODULE_2__getNextDay__["a" /* default */])(screen_date);
    const new_weekday = new_date.getDay();
    Object(__WEBPACK_IMPORTED_MODULE_1__setColorWeekday__["a" /* default */])(new_weekday, 'rgba(39, 216, 156, .6)');
    Object(__WEBPACK_IMPORTED_MODULE_3__setScreenDate__["a" /* default */])(new_date);
    Object(__WEBPACK_IMPORTED_MODULE_4__clearAll__["a" /* default */])(arr_emitter);
    const cur_date = new Date();
    if (new_date.getDate() == cur_date.getDate() && new_date.getMonth() == cur_date.getMonth() && new_date.getFullYear() == cur_date.getFullYear()) {
        Object(__WEBPACK_IMPORTED_MODULE_6__initEvents__["a" /* default */])(arr_emitter, eventName);
    }
    else {
        Object(__WEBPACK_IMPORTED_MODULE_5__initOtherDayEvents__["a" /* default */])(new_date);
    }
}



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_events__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__endOfEvent__ = __webpack_require__(30);
;


function main(li, arr_emitter, eventName, start_hour, start_min, end_hour, end_min) {
    const emitter = new __WEBPACK_IMPORTED_MODULE_0_events__["EventEmitter"]();
    arr_emitter.push(emitter);
    emitter.on(eventName, () => {
        const current_time = new Date();
        if (end_hour == current_time.getHours()) {
            if (end_min <= current_time.getMinutes()) {
                Object(__WEBPACK_IMPORTED_MODULE_1__endOfEvent__["a" /* default */])(li, arr_emitter, emitter, start_hour, start_min, end_hour, end_min);
            }
        }
    });
}



/***/ }),
/* 29 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setColorSector__ = __webpack_require__(13);
;

function main(li, arr_emitter, emitter, start_hour, start_min, end_hour, end_min) {
    Object(__WEBPACK_IMPORTED_MODULE_0__setColorSector__["a" /* default */])(start_hour, start_min, end_hour, end_min, 'snow', '');
    const list = document.getElementById('cur-events');
    if (!list)
        return;
    list.removeChild(li);
    for (let i = 0; i < arr_emitter.length; ++i) {
        if (arr_emitter[i] == emitter) {
            arr_emitter.splice(i, 1);
            break;
        }
    }
}



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
;
function main(n_start_sec, n_end_sec, name) {
    if (n_start_sec < 24 && n_end_sec >= 24) {
        ++n_start_sec;
        const elem_text = document.getElementById('text' + n_start_sec);
        if (!elem_text)
            return;
        elem_text.textContent = name;
    }
    else if (n_start_sec < 24) {
        const elem_text = document.getElementById('text' + n_end_sec);
        if (!elem_text)
            return;
        elem_text.textContent = name;
    }
    else {
        const elem_text = document.getElementById('text' + n_start_sec);
        if (!elem_text)
            return;
        elem_text.textContent = name;
    }
}



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getScreenDate__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setColorWeekday__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getPrevDay__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setScreenDate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__initOtherDayEvents__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initEvents__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__clearAll__ = __webpack_require__(4);
;







function main(arr_emitter, eventName) {
    const screen_date = Object(__WEBPACK_IMPORTED_MODULE_0__getScreenDate__["a" /* default */])();
    const screen_weekday = screen_date.getDay();
    Object(__WEBPACK_IMPORTED_MODULE_1__setColorWeekday__["a" /* default */])(screen_weekday, 'snow');
    const new_date = Object(__WEBPACK_IMPORTED_MODULE_2__getPrevDay__["a" /* default */])(screen_date);
    const new_weekday = new_date.getDay();
    Object(__WEBPACK_IMPORTED_MODULE_1__setColorWeekday__["a" /* default */])(new_weekday, 'rgba(39, 216, 156, .6)');
    Object(__WEBPACK_IMPORTED_MODULE_3__setScreenDate__["a" /* default */])(new_date);
    Object(__WEBPACK_IMPORTED_MODULE_6__clearAll__["a" /* default */])(arr_emitter);
    const cur_date = new Date();
    if (new_date.getDate() == cur_date.getDate() && new_date.getMonth() == cur_date.getMonth() && new_date.getFullYear() == cur_date.getFullYear()) {
        Object(__WEBPACK_IMPORTED_MODULE_5__initEvents__["a" /* default */])(arr_emitter, eventName);
    }
    else {
        Object(__WEBPACK_IMPORTED_MODULE_4__initOtherDayEvents__["a" /* default */])(new_date);
    }
}



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setWeekday__ = __webpack_require__(34);
;

function main(arr_emitter, eventName) {
    const sunday_click = document.getElementById('week-flex-block0');
    if (!sunday_click)
        return;
    sunday_click.addEventListener('click', () => {
        Object(__WEBPACK_IMPORTED_MODULE_0__setWeekday__["a" /* default */])(0, arr_emitter, eventName);
    });
    const monday_click = document.getElementById('week-flex-block1');
    if (!monday_click)
        return;
    monday_click.addEventListener('click', () => {
        Object(__WEBPACK_IMPORTED_MODULE_0__setWeekday__["a" /* default */])(1, arr_emitter, eventName);
    });
    const tuesday_click = document.getElementById('week-flex-block2');
    if (!tuesday_click)
        return;
    tuesday_click.addEventListener('click', () => {
        Object(__WEBPACK_IMPORTED_MODULE_0__setWeekday__["a" /* default */])(2, arr_emitter, eventName);
    });
    const wednesday_click = document.getElementById('week-flex-block3');
    if (!wednesday_click)
        return;
    wednesday_click.addEventListener('click', () => {
        Object(__WEBPACK_IMPORTED_MODULE_0__setWeekday__["a" /* default */])(3, arr_emitter, eventName);
    });
    const thursday_click = document.getElementById('week-flex-block4');
    if (!thursday_click)
        return;
    thursday_click.addEventListener('click', () => {
        Object(__WEBPACK_IMPORTED_MODULE_0__setWeekday__["a" /* default */])(4, arr_emitter, eventName);
    });
    const friday_click = document.getElementById('week-flex-block5');
    if (!friday_click)
        return;
    friday_click.addEventListener('click', () => {
        Object(__WEBPACK_IMPORTED_MODULE_0__setWeekday__["a" /* default */])(5, arr_emitter, eventName);
    });
    const sutarday_click = document.getElementById('week-flex-block6');
    if (!sutarday_click)
        return;
    sutarday_click.addEventListener('click', () => {
        Object(__WEBPACK_IMPORTED_MODULE_0__setWeekday__["a" /* default */])(6, arr_emitter, eventName);
    });
}



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getScreenDate__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrevDay__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getNextDay__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setScreenDate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__initOtherDayEvents__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__initEvents__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setColorWeekday__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clearAll__ = __webpack_require__(4);








function main(select_weekday, arr_emitter, eventName) {
    Object(__WEBPACK_IMPORTED_MODULE_6__setColorWeekday__["a" /* default */])(select_weekday, 'rgba(39, 216, 156, .6)');
    const screen_date = Object(__WEBPACK_IMPORTED_MODULE_0__getScreenDate__["a" /* default */])();
    let screen_weekday = screen_date.getDay();
    Object(__WEBPACK_IMPORTED_MODULE_6__setColorWeekday__["a" /* default */])(screen_weekday, 'snow');
    if (select_weekday == 0)
        select_weekday = 7;
    if (screen_weekday == 0)
        screen_weekday = 7;
    let new_date = screen_date;
    if (select_weekday < screen_weekday) {
        const inc = screen_weekday - select_weekday;
        for (let i = 0; i < inc; i++) {
            new_date = Object(__WEBPACK_IMPORTED_MODULE_1__getPrevDay__["a" /* default */])(new_date);
        }
    }
    else if (select_weekday > screen_weekday) {
        const inc = select_weekday - screen_weekday;
        for (let i = 0; i < inc; i++) {
            new_date = Object(__WEBPACK_IMPORTED_MODULE_2__getNextDay__["a" /* default */])(new_date);
        }
    }
    Object(__WEBPACK_IMPORTED_MODULE_3__setScreenDate__["a" /* default */])(new_date);
    Object(__WEBPACK_IMPORTED_MODULE_7__clearAll__["a" /* default */])(arr_emitter);
    const cur_date = new Date();
    if (new_date.getDate() == cur_date.getDate() && new_date.getMonth() == cur_date.getMonth() && new_date.getFullYear() == cur_date.getFullYear()) {
        Object(__WEBPACK_IMPORTED_MODULE_5__initEvents__["a" /* default */])(arr_emitter, eventName);
    }
    else {
        Object(__WEBPACK_IMPORTED_MODULE_4__initOtherDayEvents__["a" /* default */])(new_date);
    }
}



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__refreshDate__ = __webpack_require__(36);
;

function main(arr_emitter, eventName) {
    const refresh_button = document.getElementById('refresh');
    if (!refresh_button)
        return;
    refresh_button.addEventListener('click', () => {
        Object(__WEBPACK_IMPORTED_MODULE_0__refreshDate__["a" /* default */])(arr_emitter, eventName);
    });
}



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getScreenDate__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setScreenDate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initEvents__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setColorWeekday__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clearAll__ = __webpack_require__(4);
;





function main(arr_emitter, eventName) {
    const screen_date = Object(__WEBPACK_IMPORTED_MODULE_0__getScreenDate__["a" /* default */])();
    const screen_weekday = screen_date.getDay();
    Object(__WEBPACK_IMPORTED_MODULE_3__setColorWeekday__["a" /* default */])(screen_weekday, 'snow');
    const cur_date = new Date();
    Object(__WEBPACK_IMPORTED_MODULE_1__setScreenDate__["a" /* default */])(cur_date);
    const cur_weekday = cur_date.getDay();
    Object(__WEBPACK_IMPORTED_MODULE_3__setColorWeekday__["a" /* default */])(cur_weekday, 'rgba(39, 216, 156, .6)');
    Object(__WEBPACK_IMPORTED_MODULE_4__clearAll__["a" /* default */])(arr_emitter);
    Object(__WEBPACK_IMPORTED_MODULE_2__initEvents__["a" /* default */])(arr_emitter, eventName);
}



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawCalendar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__showCalendar__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clearCalendar__ = __webpack_require__(8);
;



function main(arr_emitter, eventName) {
    const calendar_button = document.getElementById('calendar');
    if (!calendar_button)
        return;
    calendar_button.addEventListener('click', () => {
        Object(__WEBPACK_IMPORTED_MODULE_1__showCalendar__["a" /* default */])('block');
        const cur_date = new Date();
        const table_days = document.getElementById('days');
        if (!table_days)
            return;
        Object(__WEBPACK_IMPORTED_MODULE_0__drawCalendar__["a" /* default */])(cur_date, table_days, arr_emitter, eventName);
        const modal_shadow = document.getElementById('modal-shadow1');
        if (!modal_shadow)
            return;
        modal_shadow.addEventListener('click', () => {
            Object(__WEBPACK_IMPORTED_MODULE_2__clearCalendar__["a" /* default */])(table_days);
            Object(__WEBPACK_IMPORTED_MODULE_1__showCalendar__["a" /* default */])('none');
        });
        const close_button = document.getElementById('close1');
        if (!close_button)
            return;
        close_button.addEventListener('click', () => {
            Object(__WEBPACK_IMPORTED_MODULE_2__clearCalendar__["a" /* default */])(table_days);
            Object(__WEBPACK_IMPORTED_MODULE_1__showCalendar__["a" /* default */])('none');
        });
    });
}



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
;
function main(table_days) {
    const tr = document.createElement("tr");
    let th = document.createElement("th");
    th.appendChild(document.createTextNode('Пн'));
    tr.appendChild(th);
    th = document.createElement("th");
    th.appendChild(document.createTextNode('Вт'));
    tr.appendChild(th);
    th = document.createElement("th");
    th.appendChild(document.createTextNode('Ср'));
    tr.appendChild(th);
    th = document.createElement("th");
    th.appendChild(document.createTextNode('Чт'));
    tr.appendChild(th);
    th = document.createElement("th");
    th.appendChild(document.createTextNode('Пт'));
    tr.appendChild(th);
    th = document.createElement("th");
    th.setAttribute('class', 'holiday');
    th.appendChild(document.createTextNode('Сб'));
    tr.appendChild(th);
    th = document.createElement("th");
    th.setAttribute('class', 'holiday');
    th.appendChild(document.createTextNode('Вс'));
    tr.appendChild(th);
    table_days.appendChild(tr);
}



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__drawCalendar__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clearCalendar__ = __webpack_require__(8);
;


const options = {
    month: 'long',
};
function main(data, table_days, arr_emitter, eventName) {
    const month = data.getMonth();
    const year = data.getFullYear();
    const str_month = data.toLocaleString("ru", options);
    const str_year = year.toString();
    const tr = document.createElement("tr");
    let td = document.createElement("td");
    td.setAttribute('class', 'navigation');
    td.appendChild(document.createTextNode('\u25C0'));
    tr.appendChild(td);
    const prev = td;
    prev.addEventListener('click', () => {
        Object(__WEBPACK_IMPORTED_MODULE_1__clearCalendar__["a" /* default */])(table_days);
        let prev_m = month;
        let prev_y = year;
        if (month == 0) {
            prev_m = 11;
            --prev_y;
        }
        else {
            --prev_m;
        }
        const new_date = new Date(prev_y, prev_m);
        Object(__WEBPACK_IMPORTED_MODULE_0__drawCalendar__["a" /* default */])(new_date, table_days, arr_emitter, eventName);
    });
    td = document.createElement("td");
    td.setAttribute('colspan', '5');
    td.setAttribute('class', 'navigation');
    td.appendChild(document.createTextNode(str_month + ' ' + str_year));
    tr.appendChild(td);
    td = document.createElement("td");
    td.setAttribute('class', 'navigation');
    td.appendChild(document.createTextNode('\u25B6'));
    tr.appendChild(td);
    const next = td;
    next.addEventListener('click', () => {
        Object(__WEBPACK_IMPORTED_MODULE_1__clearCalendar__["a" /* default */])(table_days);
        let next_m = month;
        let next_y = year;
        if (month == 11) {
            next_m = 0;
            ++next_y;
        }
        else {
            ++next_m;
        }
        const new_date = new Date(next_y, next_m);
        Object(__WEBPACK_IMPORTED_MODULE_0__drawCalendar__["a" /* default */])(new_date, table_days, arr_emitter, eventName);
    });
    table_days.appendChild(tr);
}



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
;
function main(tr) {
    const td = document.createElement("td");
    td.setAttribute('class', 'grayed');
    td.appendChild(document.createTextNode(''));
    tr.appendChild(td);
}



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setEventsInCell__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clickOnCell__ = __webpack_require__(43);
;


function main(index, day, month, year, tr, table_days, arr_emitter, eventName) {
    const cur_date = new Date();
    let class_name = '';
    if (cur_date.getDate() == day && cur_date.getMonth() == month && cur_date.getFullYear() == year) {
        class_name = 'selected';
    }
    else if (index % 7 == 6 || index % 7 == 5) {
        class_name = 'holiday';
    }
    const td = document.createElement("td");
    td.setAttribute('class', class_name);
    td.appendChild(document.createTextNode(day.toString()));
    td.appendChild(document.createElement("br"));
    const d = day;
    Object(__WEBPACK_IMPORTED_MODULE_0__setEventsInCell__["a" /* default */])(td, d, month, year);
    td.addEventListener('click', () => {
        const select_date = new Date(year, month, d);
        Object(__WEBPACK_IMPORTED_MODULE_1__clickOnCell__["a" /* default */])(select_date, table_days, arr_emitter, eventName);
    });
    tr.appendChild(td);
}



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
function main(td, d, month, year) {
    fetch("/api/events", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
        return response.json();
    })
        .then((events) => {
        events.sort((ev1, ev2) => {
            return Date.parse(ev1.startData) - Date.parse(ev2.startData);
        });
        events.forEach((event) => {
            const start_time = new Date(event.startData);
            const end_time = new Date(event.endData);
            if ((d == start_time.getDate() && month == start_time.getMonth() && year == start_time.getFullYear()) ||
                (d == end_time.getDate() && month == end_time.getMonth() && year == end_time.getFullYear())) {
                const start_hour = start_time.getHours();
                let str_start_hour = start_hour.toString();
                if (start_hour < 10)
                    str_start_hour = '0' + str_start_hour;
                const start_min = start_time.getMinutes();
                let str_start_min = start_min.toString();
                if (start_min < 10)
                    str_start_min = '0' + str_start_min;
                const end_hour = end_time.getHours();
                let str_end_hour = end_hour.toString();
                if (end_hour < 10)
                    str_end_hour = '0' + str_end_hour;
                const end_min = end_time.getMinutes();
                let str_end_min = end_min.toString();
                if (end_min < 10)
                    str_end_min = '0' + str_end_min;
                const p = document.createElement("p");
                p.setAttribute('class', 'table-event-text');
                p.appendChild(document.createTextNode(str_start_hour + ':' + str_start_min + ' - ' + str_end_hour + ':' + str_end_min + ' ' + event.name));
                td.appendChild(p);
            }
        });
    })
        .catch();
}



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getScreenDate__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setScreenDate__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__initOtherDayEvents__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__initEvents__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clearCalendar__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__showCalendar__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__setColorWeekday__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__clearAll__ = __webpack_require__(4);
;








function main(select_date, table_days, arr_emitter, eventName) {
    Object(__WEBPACK_IMPORTED_MODULE_4__clearCalendar__["a" /* default */])(table_days);
    Object(__WEBPACK_IMPORTED_MODULE_5__showCalendar__["a" /* default */])('none');
    const screen_date = Object(__WEBPACK_IMPORTED_MODULE_0__getScreenDate__["a" /* default */])();
    const screen_weekday = screen_date.getDay();
    Object(__WEBPACK_IMPORTED_MODULE_6__setColorWeekday__["a" /* default */])(screen_weekday, 'snow');
    const new_weekday = select_date.getDay();
    Object(__WEBPACK_IMPORTED_MODULE_6__setColorWeekday__["a" /* default */])(new_weekday, 'rgba(39, 216, 156, .6)');
    Object(__WEBPACK_IMPORTED_MODULE_1__setScreenDate__["a" /* default */])(select_date);
    Object(__WEBPACK_IMPORTED_MODULE_7__clearAll__["a" /* default */])(arr_emitter);
    const cur_date = new Date();
    if (select_date.getDate() == cur_date.getDate() && select_date.getMonth() == cur_date.getMonth() && select_date.getFullYear() == cur_date.getFullYear()) {
        Object(__WEBPACK_IMPORTED_MODULE_3__initEvents__["a" /* default */])(arr_emitter, eventName);
    }
    else {
        Object(__WEBPACK_IMPORTED_MODULE_2__initOtherDayEvents__["a" /* default */])(select_date);
    }
}



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__showForm__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sendForm__ = __webpack_require__(45);
;


function main(arr_emitter, eventName) {
    const form_button = document.getElementById('addEvent');
    if (!form_button)
        return;
    form_button.addEventListener('click', () => {
        Object(__WEBPACK_IMPORTED_MODULE_0__showForm__["a" /* default */])('block');
        const form = document.forms.namedItem('addevent');
        if (!form)
            return;
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            Object(__WEBPACK_IMPORTED_MODULE_1__sendForm__["a" /* default */])(form, arr_emitter, eventName);
        });
        const modal_shadow = document.getElementById('modal-shadow');
        if (!modal_shadow)
            return;
        modal_shadow.addEventListener('click', () => {
            Object(__WEBPACK_IMPORTED_MODULE_0__showForm__["a" /* default */])('none');
        });
        const close_button = document.getElementById('close');
        if (!close_button)
            return;
        close_button.addEventListener('click', () => {
            Object(__WEBPACK_IMPORTED_MODULE_0__showForm__["a" /* default */])('none');
        });
    });
}



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createEvent__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__showForm__ = __webpack_require__(17);
;


function main(form, arr_emitter, eventName) {
    const name = form.elements.namedItem('name');
    const start = form.elements.namedItem('start');
    const end = form.elements.namedItem('end');
    if (!name || !start || !end)
        return;
    Object(__WEBPACK_IMPORTED_MODULE_0__createEvent__["a" /* default */])(name.value, start.value, end.value, arr_emitter, eventName);
    Object(__WEBPACK_IMPORTED_MODULE_1__showForm__["a" /* default */])('none');
}



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addEventToScreen__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getScreenDate__ = __webpack_require__(2);


function main(event_name, event_start, event_end, arr_emitter, eventName) {
    fetch("/api/events", {
        method: "POST",
        body: JSON.stringify({
            name: event_name,
            startData: event_start,
            endData: event_end
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => {
        return response.json();
    })
        .then((data) => {
        const form = document.forms.namedItem('addevent');
        if (!form)
            return;
        form.reset();
        const cur_time = Object(__WEBPACK_IMPORTED_MODULE_1__getScreenDate__["a" /* default */])();
        const start_time = new Date(data.startData);
        const end_time = new Date(data.endData);
        if ((cur_time.getDate() == start_time.getDate() && cur_time.getMonth() == start_time.getMonth() && cur_time.getFullYear() == start_time.getFullYear()) ||
            (cur_time.getDate() == end_time.getDate() && cur_time.getMonth() == end_time.getMonth() && cur_time.getFullYear() == end_time.getFullYear())) {
            const cur_hour = cur_time.getHours();
            const cur_min = cur_time.getMinutes();
            const start_hour = start_time.getHours();
            const start_min = start_time.getMinutes();
            const end_hour = end_time.getHours();
            const end_min = end_time.getMinutes();
            if (cur_hour <= 12 && (start_hour != 12 && end_hour <= 12)) {
                if ((start_hour < cur_hour || start_hour > cur_hour) && end_hour == cur_hour) {
                    if (end_min >= cur_min) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                    }
                }
                if (start_hour == cur_hour && end_hour == cur_hour) {
                    if (end_min >= cur_min) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                    }
                }
                if (start_hour == cur_hour && end_hour > cur_hour) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                }
                if ((start_hour > cur_hour || start_hour < cur_hour) && end_hour > cur_hour) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                }
            }
            if (cur_hour >= 12 && (start_hour >= 12 || end_hour >= 12 || end_hour == 0)) {
                if (start_hour < cur_hour && end_hour == cur_hour) {
                    if (end_min >= cur_min) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                    }
                }
                if (start_hour == cur_hour && end_hour == cur_hour) {
                    if (end_min >= cur_min) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                    }
                }
                if (start_hour == cur_hour && (end_hour > cur_hour || end_hour == 0)) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                }
                if ((start_hour > cur_hour || start_hour < cur_hour) && (end_hour > cur_hour || end_hour == 0)) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__addEventToScreen__["a" /* default */])(data.name, start_hour, start_min, end_hour, end_min, arr_emitter, eventName);
                }
            }
        }
    })
        .catch();
}



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main; });
;
function main(arr_emitter, eventName) {
    arr_emitter.forEach((emitter) => {
        emitter.emit(eventName);
    });
}



/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map