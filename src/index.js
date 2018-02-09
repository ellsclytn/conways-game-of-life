const renderBoard = require('./render')
const {
  createInitialBoard,
  tick
} = require('./board')

let board = createInitialBoard()

renderBoard(board)

setInterval(() => {
  board = tick(board)
  renderBoard(board)
}, 200)
