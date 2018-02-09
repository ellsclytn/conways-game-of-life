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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
  SCALE: 4
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const renderBoard = __webpack_require__(2)
const {
  createInitialBoard,
  tick
} = __webpack_require__(3)

let board = createInitialBoard()

renderBoard(board)

setInterval(() => {
  board = tick(board)
  renderBoard(board)
}, 200)


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const { SCALE } = __webpack_require__(0)
const canvasElement = document.getElementById('lifeBoard')
const canvas = canvasElement.getContext('2d')

canvasElement.setAttribute('width', window.innerWidth)
canvasElement.setAttribute('height', window.innerHeight)

module.exports = (board) => {
  canvas.clearRect(0, 0, window.innerWidth, window.innerHeight)

  return board.map((column, x) => (
    column.map((cell, y) => {
      if (cell) {
        canvas.fillRect(
          x * SCALE,
          y * SCALE,
          SCALE,
          SCALE
        )
      }
    })
  ))
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const { SCALE } = __webpack_require__(0)

const createBoardArray = (width, height) => (
  Array(width).fill(
    Array(height).fill(0)
  )
)

const createInitialBoard = (
  width = Math.floor(window.innerWidth / SCALE),
  height = Math.floor(window.innerHeight / SCALE)
) => (
  createBoardArray(width, height).map((column) => (
    column.map((cell) => (
      Math.round(Math.random())
    ))
  ))
)

const liveOrDie = (neighbours, cell) => {
  if (cell === 1) {
    if (neighbours < 2) {
      return 0
    } else if (neighbours > 1 && neighbours < 4) {
      return 1
    } else {
      return 0
    }
  } else {
    if (neighbours === 3) {
      return 1
    } else {
      return 0
    }
  }
}

const tick = (board) => {
  const getCell = (x, y) => {
    const column = board[x] || []

    return column[y] || 0
  }

  return board.map((column, x) => (
    column.map((cell, y) => {
      /* This could definitely be revisited (and I may).
       * I'm using a hardcoded set here because
       * the set is small, and fixed, and I'm being lazy. But it's not DRY.
       * Needs thought, but could use reducers to make this set,
       * and just exclude the middle entry (self cell)
       */
      const neighbours = [
        getCell(x - 1, y - 1),
        getCell(x - 1, y),
        getCell(x - 1, y + 1),
        getCell(x, y - 1),
        getCell(x, y + 1),
        getCell(x + 1, y - 1),
        getCell(x + 1, y),
        getCell(x + 1, y + 1)
      ].reduce((acc, cell) => (
        acc + cell
      ), 0)

      return liveOrDie(neighbours, cell)
    })
  ))
}

module.exports = {
  createInitialBoard,
  tick
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGFhNmY1ZDY1YjM3OGRjZGI0N2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm9hcmQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7O0FDYkQsT0FBTyxRQUFRO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7OztBQ3RCQSxPQUFPLFFBQVE7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRhYTZmNWQ2NWIzNzhkY2RiNDdiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFNDQUxFOiA0XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgcmVuZGVyQm9hcmQgPSByZXF1aXJlKCcuL3JlbmRlcicpXG5jb25zdCB7XG4gIGNyZWF0ZUluaXRpYWxCb2FyZCxcbiAgdGlja1xufSA9IHJlcXVpcmUoJy4vYm9hcmQnKVxuXG5sZXQgYm9hcmQgPSBjcmVhdGVJbml0aWFsQm9hcmQoKVxuXG5yZW5kZXJCb2FyZChib2FyZClcblxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICBib2FyZCA9IHRpY2soYm9hcmQpXG4gIHJlbmRlckJvYXJkKGJvYXJkKVxufSwgMjAwKVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgeyBTQ0FMRSB9ID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJylcbmNvbnN0IGNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlmZUJvYXJkJylcbmNvbnN0IGNhbnZhcyA9IGNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKVxuXG5jYW52YXNFbGVtZW50LnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aW5kb3cuaW5uZXJXaWR0aClcbmNhbnZhc0VsZW1lbnQuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG5cbm1vZHVsZS5leHBvcnRzID0gKGJvYXJkKSA9PiB7XG4gIGNhbnZhcy5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodClcblxuICByZXR1cm4gYm9hcmQubWFwKChjb2x1bW4sIHgpID0+IChcbiAgICBjb2x1bW4ubWFwKChjZWxsLCB5KSA9PiB7XG4gICAgICBpZiAoY2VsbCkge1xuICAgICAgICBjYW52YXMuZmlsbFJlY3QoXG4gICAgICAgICAgeCAqIFNDQUxFLFxuICAgICAgICAgIHkgKiBTQ0FMRSxcbiAgICAgICAgICBTQ0FMRSxcbiAgICAgICAgICBTQ0FMRVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSlcbiAgKSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3JlbmRlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB7IFNDQUxFIH0gPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKVxuXG5jb25zdCBjcmVhdGVCb2FyZEFycmF5ID0gKHdpZHRoLCBoZWlnaHQpID0+IChcbiAgQXJyYXkod2lkdGgpLmZpbGwoXG4gICAgQXJyYXkoaGVpZ2h0KS5maWxsKDApXG4gIClcbilcblxuY29uc3QgY3JlYXRlSW5pdGlhbEJvYXJkID0gKFxuICB3aWR0aCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVyV2lkdGggLyBTQ0FMRSksXG4gIGhlaWdodCA9IE1hdGguZmxvb3Iod2luZG93LmlubmVySGVpZ2h0IC8gU0NBTEUpXG4pID0+IChcbiAgY3JlYXRlQm9hcmRBcnJheSh3aWR0aCwgaGVpZ2h0KS5tYXAoKGNvbHVtbikgPT4gKFxuICAgIGNvbHVtbi5tYXAoKGNlbGwpID0+IChcbiAgICAgIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSlcbiAgICApKVxuICApKVxuKVxuXG5jb25zdCBsaXZlT3JEaWUgPSAobmVpZ2hib3VycywgY2VsbCkgPT4ge1xuICBpZiAoY2VsbCA9PT0gMSkge1xuICAgIGlmIChuZWlnaGJvdXJzIDwgMikge1xuICAgICAgcmV0dXJuIDBcbiAgICB9IGVsc2UgaWYgKG5laWdoYm91cnMgPiAxICYmIG5laWdoYm91cnMgPCA0KSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAobmVpZ2hib3VycyA9PT0gMykge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgdGljayA9IChib2FyZCkgPT4ge1xuICBjb25zdCBnZXRDZWxsID0gKHgsIHkpID0+IHtcbiAgICBjb25zdCBjb2x1bW4gPSBib2FyZFt4XSB8fCBbXVxuXG4gICAgcmV0dXJuIGNvbHVtblt5XSB8fCAwXG4gIH1cblxuICByZXR1cm4gYm9hcmQubWFwKChjb2x1bW4sIHgpID0+IChcbiAgICBjb2x1bW4ubWFwKChjZWxsLCB5KSA9PiB7XG4gICAgICAvKiBUaGlzIGNvdWxkIGRlZmluaXRlbHkgYmUgcmV2aXNpdGVkIChhbmQgSSBtYXkpLlxuICAgICAgICogSSdtIHVzaW5nIGEgaGFyZGNvZGVkIHNldCBoZXJlIGJlY2F1c2VcbiAgICAgICAqIHRoZSBzZXQgaXMgc21hbGwsIGFuZCBmaXhlZCwgYW5kIEknbSBiZWluZyBsYXp5LiBCdXQgaXQncyBub3QgRFJZLlxuICAgICAgICogTmVlZHMgdGhvdWdodCwgYnV0IGNvdWxkIHVzZSByZWR1Y2VycyB0byBtYWtlIHRoaXMgc2V0LFxuICAgICAgICogYW5kIGp1c3QgZXhjbHVkZSB0aGUgbWlkZGxlIGVudHJ5IChzZWxmIGNlbGwpXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IG5laWdoYm91cnMgPSBbXG4gICAgICAgIGdldENlbGwoeCAtIDEsIHkgLSAxKSxcbiAgICAgICAgZ2V0Q2VsbCh4IC0gMSwgeSksXG4gICAgICAgIGdldENlbGwoeCAtIDEsIHkgKyAxKSxcbiAgICAgICAgZ2V0Q2VsbCh4LCB5IC0gMSksXG4gICAgICAgIGdldENlbGwoeCwgeSArIDEpLFxuICAgICAgICBnZXRDZWxsKHggKyAxLCB5IC0gMSksXG4gICAgICAgIGdldENlbGwoeCArIDEsIHkpLFxuICAgICAgICBnZXRDZWxsKHggKyAxLCB5ICsgMSlcbiAgICAgIF0ucmVkdWNlKChhY2MsIGNlbGwpID0+IChcbiAgICAgICAgYWNjICsgY2VsbFxuICAgICAgKSwgMClcblxuICAgICAgcmV0dXJuIGxpdmVPckRpZShuZWlnaGJvdXJzLCBjZWxsKVxuICAgIH0pXG4gICkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVJbml0aWFsQm9hcmQsXG4gIHRpY2tcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JvYXJkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=