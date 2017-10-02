const { SCALE, WIDTH, HEIGHT } = require('../constants')
const canvas = document.getElementById('lifeBoard').getContext('2d')

module.exports = (board) => {
  canvas.clearRect(0, 0, WIDTH * SCALE, HEIGHT * SCALE)

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
