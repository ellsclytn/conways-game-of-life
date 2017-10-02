const SCALE = 4
const canvas = document.getElementById('lifeBoard').getContext('2d')

module.exports = (board) => (
  board.map((column, x) => (
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
)
