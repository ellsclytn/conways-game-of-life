const { SCALE } = require('../constants')

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
