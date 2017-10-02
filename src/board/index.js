const WIDTH = 60
const HEIGHT = 60

const createBoardArray = (width, height) => (
  Array(width).fill(
    Array(height).fill(0)
  )
)

const createInitialBoard = (
  width = WIDTH,
  height = HEIGHT
) => (
  createBoardArray(width, height).map((column) => (
    column.map((cell) => (
      Math.round(Math.random())
    ))
  ))
)

module.exports = {
  createInitialBoard
}
