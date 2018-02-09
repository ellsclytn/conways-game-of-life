const { SCALE } = require('../constants')
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
