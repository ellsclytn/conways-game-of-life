/* eslint-env mocha */
const assert = require('assert')
const {
  createInitialBoard,
  tick
} = require('../')

describe('Board', () => {
  it('produces an initial state', () => {
    const board = createInitialBoard(1, 1)

    assert(board[0][0] === 0 || board[0][0] === 1)
  })
})

describe('Cell', () => {
  it('dies when only one neighbour is present', () => {
    const board = [[1, 1]]

    assert.deepEqual(tick(board), [[0, 0]])
  })

  it('lives when two neighbours are present', () => {
    const board = [[1, 1, 1]]

    assert.deepEqual(tick(board), [[0, 1, 0]])
  })

  it('lives when three neighbours are present', () => {
    const board = [
      [1, 1],
      [1, 1]
    ]

    assert.deepEqual(tick(board), [
      [1, 1],
      [1, 1]
    ])
  })

  it('dies when four or more neighbours are present', () => {
    const board = [
      [1, 1, 1],
      [1, 1, 1]
    ]

    assert.deepEqual(tick(board), [
      [1, 0, 1],
      [1, 0, 1]
    ])
  })

  it('brings a dead cell back to life, when three neighbours are present', () => {
    const board = [
      [1, 1, 1],
      [0, 0, 0]
    ]

    assert.deepEqual(tick(board), [
      [0, 1, 0],
      [0, 1, 0]
    ])
  })
})
