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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./assets/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _videoPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoPlayer */ \"./assets/js/videoPlayer.js\");\n/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prefix */ \"./assets/js/prefix.js\");\n/* harmony import */ var _videoRecorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videoRecorder */ \"./assets/js/videoRecorder.js\");\n/* harmony import */ var _videoRecorder__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_videoRecorder__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/prefix.js":
/*!*****************************!*\
  !*** ./assets/js/prefix.js ***!
  \*****************************/
/*! exports provided: addPrefixToExitFS, addPrefixToGoFS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPrefixToExitFS\", function() { return addPrefixToExitFS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPrefixToGoFS\", function() { return addPrefixToGoFS; });\nconst addPrefixToExitFS = () => {\r\n    if (document.exitFullscreen) {\r\n        document.exitFullscreen();\r\n      } else if (document.mozCancelFullScreen) {\r\n            document.mozCancelFullScreen();\r\n      } else if (document.webkitExitFullscreen) {\r\n            document.webkitExitFullscreen();\r\n      } else if (document.msExitFullscreen) {\r\n            document.msExitFullscreen();\r\n      }\r\n}\r\n\r\n\r\nconst addPrefixToGoFS = (videoContainer) => {\r\n    if (videoContainer.requestFullscreen) {\r\n        videoContainer.requestFullscreen();\r\n      } else if (videoContainer.mozRequestFullScreen) {\r\n            videoContainer.mozRequestFullScreen();\r\n      } else if (videoContainer.webkitRequestFullscreen) {\r\n            videoContainer.webkitRequestFullscreen();\r\n      } else if (videoContainer.msRequestFullscreen) {\r\n            videoContainer.msRequestFullscreen();\r\n      }\r\n}\n\n//# sourceURL=webpack:///./assets/js/prefix.js?");

/***/ }),

/***/ "./assets/js/videoPlayer.js":
/*!**********************************!*\
  !*** ./assets/js/videoPlayer.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prefix */ \"./assets/js/prefix.js\");\n\r\n\r\nconst videoContainer = document.getElementById('jsVideoPlayer');\r\nconst videoplayer = document.querySelector('#jsVideoPlayer video');\r\nconst playBtn = document.getElementById('jsVideoPlayBtn');\r\nconst volumeBtn = document.getElementById('jsVolumeBtn');\r\nconst fullScrnBtn = document.getElementById('jsFullScreen');\r\nconst currentTime = document.getElementById(\"currentTime\");\r\nconst totalTime = document.getElementById(\"totalTime\");\r\nconst volumeRange = document.getElementById(\"jsVolume\");\r\n\r\nconst handlePlayClick = () => {\r\n    if(videoplayer.paused){\r\n        videoplayer.play();\r\n        playBtn.innerHTML = `<i class=\"fas fa-pause\"></i>`;\r\n    } else {\r\n        videoplayer.pause();\r\n        playBtn.innerHTML = `<i class=\"fas fa-play\"></i>`;\r\n    }\r\n}\r\n\r\nconst handleVolumeClick = () => {\r\n    if(videoplayer.muted){\r\n        videoplayer.muted = false;\r\n        volumeBtn.innerHTML = `<i class=\"fas fa-volume-up\"></i>`\r\n        volumeRange.value = 0.5;\r\n    } else {\r\n        if(!videoplayer.muted) {\r\n            videoplayer.muted = true;\r\n            volumeBtn.innerHTML = `<i class=\"fas fa-volume-mute\"></i>` \r\n            volumeRange.value = 0;\r\n                   \r\n        }\r\n    }\r\n}\r\n\r\nconst exitFullScreen = () => {\r\n    videoplayer.classList.remove(\"fullscreen-width\");\r\n    Object(_prefix__WEBPACK_IMPORTED_MODULE_0__[\"addPrefixToExitFS\"])();\r\n    fullScrnBtn.innerHTML = `<i class=\"fas fa-expand\"></i>`\r\n    fullScrnBtn.addEventListener(\"click\", goFullScreen);\r\n}\r\n\r\nconst goFullScreen = () => {\r\n    videoplayer.classList.add(\"fullscreen-width\");\r\n    Object(_prefix__WEBPACK_IMPORTED_MODULE_0__[\"addPrefixToGoFS\"])(videoContainer);\r\n    fullScrnBtn.innerHTML = `<i class=\"fas fa-compress\"></i>`;\r\n    fullScrnBtn.removeEventListener(\"click\", goFullScreen);\r\n    fullScrnBtn.addEventListener(\"click\", exitFullScreen);\r\n}\r\n\r\n\r\nconst formatDate = (seconds) => {\r\n    \r\n    const secondsNumber = parseInt(seconds, 10);\r\n    // 1시간 = 3600초 / 1분 = 60초 즉. 1시간, 1분 이하의 비디오의 경우 hours, minutes = 0\r\n    let hours = Math.floor( secondsNumber / 3600 );\r\n    // 전체 초수 - 시간 초수 / 60 = 분 초수\r\n    let minutes = Math.floor( (secondsNumber - (hours * 3600)) / 60 );\r\n    // 전체 초수 - 시간 초수 - 분 초수 = 초수\r\n    let totalSeconds = secondsNumber - (hours * 3600) - (minutes * 60);\r\n\r\n    // 1의 자리 수일 때, n이 아닌 0n으로 표기되게끔 만들어줌.\r\n    if(hours < 10) {\r\n        hours = `0${hours}`;\r\n    }\r\n\r\n    if(minutes < 10) {\r\n        minutes = `0${minutes}`;\r\n    }\r\n\r\n    if(seconds < 10) {\r\n        totalSeconds = `0${totalSeconds}`;\r\n    }\r\n\r\n    return `${hours}:${minutes}:${totalSeconds}`;\r\n\r\n}\r\n\r\nconst getCurrentTime = () => {\r\n    currentTime.innerHTML = formatDate(Math.floor(videoplayer.currentTime));\r\n    \r\n}\r\n\r\n\r\nconst setTotalTime = () => {\r\n    const totalTimeString = formatDate(Math.floor(videoplayer.duration));\r\n    totalTime.innerHTML = totalTimeString;\r\n    const setinterval = (function(){setInterval(getCurrentTime, 1000);})();\r\n    // if(Math.floor(videoplayer.currentTime) >= Math.floor(videoplayer.duration)){\r\n    //     clearInterval(setinterval);\r\n    // }\r\n   \r\n}\r\n\r\nconst handleEnded = () => {\r\n    videoplayer.currentTime = 0;\r\n    playBtn.innerHTML = `<i class=\"fas fa-play\"></i>`;\r\n}\r\n\r\n\r\nconst handleDrag = (e) => {\r\n    const {\r\n        target : { value }\r\n    } = e;\r\n\r\n    videoplayer.volume = value;\r\n    console.log(value)\r\n    if(vlaue >= 0.6){\r\n        volumeBtn.innerHTML = `<i class=\"fas fa-volume-up\"></i>`;\r\n        console.log(volumeBtn.innerHTML)\r\n    } else {\r\n        if(vlaue >= 0.2) {\r\n            volumeBtn.innerHTML = `<i class=\"fas fa-volume-down\"></i>`;\r\n        } else {\r\n            volumeBtn.innerHTML = `<i class=\"fas fa-volume-off\"></i>`;\r\n        }\r\n    }\r\n}\r\n\r\nconst init = () => {\r\n    \r\n    playBtn.addEventListener(\"click\", handlePlayClick);\r\n    volumeBtn.addEventListener(\"click\", handleVolumeClick);\r\n    fullScrnBtn.addEventListener(\"click\", goFullScreen);\r\n    videoplayer.addEventListener(\"loadedmetadata\", setTotalTime);\r\n    videoplayer.addEventListener(\"ended\", handleEnded);\r\n    volumeRange.addEventListener(\"input\", handleDrag);\r\n}\r\n\r\nif(videoContainer){\r\n    // window.onload = () => {\r\n        init();\r\n    // }\r\n}\n\n//# sourceURL=webpack:///./assets/js/videoPlayer.js?");

/***/ }),

/***/ "./assets/js/videoRecorder.js":
/*!************************************!*\
  !*** ./assets/js/videoRecorder.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const recorderContainer = document.getElementById(\"jsRecordContainer\");\r\nconst recordBtn = document.getElementById(\"jsRecordBtn\");\r\nconst recordedVideo = document.getElementById(\"jsVideoPreview\");\r\n\r\nlet videoRecorder;\r\n\r\n\r\n\r\nconst handleVideoData = (e) => {\r\n    const { data: videoFile } = e;\r\n    const link = document.createElement(\"a\");\r\n    link.href = URL.createObjectURL(videoFile);\r\n    link.download = \"recorded.webm\";\r\n    document.body.appendChild(link);\r\n    link.click();\r\n}\r\n\r\n\r\nconst stopRecording = () => {\r\n    videoRecorder.stop();\r\n    // start부터 stop까지 레코딩 된 결과물이 생기면 dataavailable 이벤트가 발생\r\n    videoRecorder.addEventListener(\"dataavailable\", handleVideoData);\r\n    recordBtn.removeEventListener(\"click\", stopRecording);\r\n    recordBtn.addEventListener(\"click\", getVideo);\r\n    recordBtn.innerHTML = `START RECORDING`;\r\n    \r\n}\r\n\r\n\r\nconst startRecording = (stream) => {\r\n    videoRecorder = new MediaRecorder(stream);\r\n    videoRecorder.start();\r\n    recordBtn.addEventListener(\"click\", stopRecording)\r\n}\r\n\r\nconst getVideo = async () => {\r\n    try {\r\n\r\n        const stream = await navigator.mediaDevices.getUserMedia({\r\n            audio: true\r\n            // video: { width: 1280, height: 720 }\r\n        });\r\n        console.log(stream);\r\n        recordedVideo.srcObject = stream;\r\n        recordedVideo.muted = true;\r\n        recordedVideo.play();\r\n        recordBtn.innerHTML = `STOP RECORDING`;\r\n        startRecording(stream);\r\n\r\n    } catch(error){\r\n        console.log(error);\r\n        recordBtn.innerHTML = `YOU CAN'T RECORD`\r\n\r\n    } finally {\r\n        recordBtn.removeEventListener(\"click\", getVideo);\r\n    }\r\n}\r\n\r\nconst init = () => {\r\n    recordBtn.addEventListener(\"click\", getVideo);\r\n}\r\n\r\nif(recorderContainer) {\r\n    init();\r\n}\r\n\n\n//# sourceURL=webpack:///./assets/js/videoRecorder.js?");

/***/ }),

/***/ "./assets/scss/styles.scss":
/*!*********************************!*\
  !*** ./assets/scss/styles.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./assets/scss/styles.scss?");

/***/ })

/******/ });