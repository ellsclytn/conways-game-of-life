/* eslint-env mocha */
const assert = require('assert')
const { createInitialBoard } = require('../')

describe('Board', () => {
  it('produces an initial state', () => {
    const board = createInitialBoard(1, 1)

    assert(board[0][0] === 0 || board[0][0] === 1)
  })
})
