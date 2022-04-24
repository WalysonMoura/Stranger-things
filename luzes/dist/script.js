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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

document.addEventListener("DOMContentLoaded", function (event) {
  var letters = [].concat(_toConsumableArray(document.querySelectorAll('.letter')));
  var numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  letters.forEach(function (l) {
    return l.addEventListener('click', blinkInfinite);
  });

  function blinkInfinite() {
    if (this.classList.contains('blink')) {
      this.classList.remove('blink');
      this.classList.remove('light');
    } else {
      this.classList.add('blink');
      this.classList.add('light');
    }
  }

  function blinkAll() {
    letters.forEach(function (l) {
      var blink = blinkInfinite.bind(l);
      blink();
    });
  }

  function turnOffAll() {
    letters.forEach(function (l) {
      l.classList.remove('light');
      l.classList.remove('blink');
    });
  }

  function blinkWords(w) {
    turnOffAll();
    var word = w.toUpperCase().replace(/[^A-Z]+/g, '').split('');
    word.forEach(function (ch, idx) {
      var letter = document.querySelector('#' + ch);
      setTimeout(function () {
        letter.classList.add('light');
      }, idx * 1500);
      setTimeout(function () {
        letter.classList.remove('light');
      }, 1000 + idx * 1500);
    });
  }

  blinkWords('Stranger Things');

  function blinkAlphabet() {
    var toAndFro = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    toAndFro ? letters.reverse() : letters;
    letters.forEach(function (l, idx) {
      setTimeout(function () {
        l.classList.add('light');
        l.classList.add('blink');
      }, idx * 50);
    });
    setTimeout(function () {
      letters.forEach(function (l, idx) {
        setTimeout(function () {
          l.classList.remove('light');
          l.classList.remove('blink');
        }, idx * 50);
      });
    }, 1300);
  }

  document.addEventListener('keydown', lightOn);

  function lightOn(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
      if (e.key == e.key.toUpperCase()) {
        //Uppercase
        var letter = document.querySelector('#' + e.key);
        if (!letter.classList.contains('light') && !letter.classList.contains('blink')) {
          turnOffAll();
          letter.classList.add('light');
        } else if (letter.classList.contains('light') && !letter.classList.contains('blink')) {
          letter.classList.add('blink');
        } else {
          letter.classList.remove('blink');
          letter.classList.remove('light');
        }
      } else {
        //Lowercase
        var key = e.key.toUpperCase();
        var _letter = document.querySelector('#' + key);
        !_letter.classList.contains('blink') ? _letter.classList.toggle('light') : _letter.classList.toggle('blink');
      }
      return;
    }

    //Numbers
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      turnOffAll();
      var idx = Number(e.key);
      blinkWords(numbers[idx]);
      return;
    }
    //Shift
    if (e.keyCode === 16) {
      blinkAll();
      return;
    }
    //Backspace
    if (e.keyCode === 8) {
      blinkAlphabet(true);
      return;
    }
    //Enter
    if (e.keyCode == 13) {
      var arr = [];
      while (arr.length < 26) {
        var randomnumber = Math.floor(Math.random() * 26);
        if (arr.indexOf(randomnumber) > -1) continue;
        arr[arr.length] = randomnumber;
      }
      letters.forEach(function (l, idx) {
        setTimeout(function () {
          letters[arr[idx]].classList.add('light');
          if (letters[arr[idx]].classList.contains('blink')) {
            letters[arr[idx]].classList.remove('blink');
          }
        }, idx * 200);
      });
      return;
    }
    //Space
    if (e.keyCode == 32) {
      letters.forEach(function (l, idx) {
        setTimeout(function () {
          l.classList.toggle('light');
          l.classList.toggle('blink');
          addLightIfBlink(l);
        }, idx * 100);
        setTimeout(function () {
          letters[idx].classList.toggle('light');
          letters[idx].classList.toggle('blink');
          addLightIfBlink(letters[idx]);
        }, idx * 100);
      });
      letters.reverse();
      return;
    }
    //Control
    if (e.keyCode == 17) {
      letters.reverse();
      letters.forEach(function (l, idx) {
        if (idx % 2 === 1) {
          l.classList.add('light');
          l.classList.add('blink');
        } else {
          l.classList.remove('light');
          l.classList.remove('blink');
        }
      });
      return;
    }
  }

  function addLightIfBlink(el) {
    if (el.classList.contains('blink') && !el.classList.contains('light')) {
      el.classList.add('light');
    }
  }

  var btn = document.querySelector('#btnBlink');
  var input = document.querySelector('input');

  input.addEventListener('focus', function () {
    input.value = '';
    document.removeEventListener('keydown', lightOn);
  });

  input.addEventListener('blur', function () {
    document.addEventListener('keydown', lightOn);
  });
  btn.addEventListener('click', function () {
    blinkWords(input.value);
  });
});

/***/ })
/******/ ]);