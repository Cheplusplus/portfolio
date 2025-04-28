import { useState } from 'react'

export const useCheckGameOver = (grid: ('' | 'X' | 'O')[]) => {
  const [isCompleted, setIsCompleted] = useState(false)

  if (grid.every((singleCell) => singleCell === '')) {
    isCompleted ? setIsCompleted(false) : null
    return
  }
  const rows: ('' | 'X' | 'O')[][] = [
    grid.slice(0, 3),
    grid.slice(3, 6),
    grid.slice(6),
  ]

  const cols: ('' | 'X' | 'O')[][] = Array(3)
    .fill(0)
    .map((_, i) => {
      return [grid[i], grid[i + 3], grid[i + 6]]
    })

  const diagNeg: ('' | 'X' | 'O')[] = [grid[0], grid[4], grid[8]]
  const diagPos: ('' | 'X' | 'O')[] = [grid[2], grid[4], grid[6]]

  const testRows = rows.reduce((acc, singleRow) => {
    const [first] = singleRow

    if (first === '') return acc
    if (singleRow.every((singleCell) => singleCell === first)) {
      return true
    }

    return acc
  }, false)

  const testCols = cols.reduce((acc, singleCol) => {
    const [first] = singleCol

    if (first === '') return acc
    if (singleCol.every((singleCell) => singleCell === first)) {
      return true
    }

    return acc
  }, false)

  const testDiagNeg =
    diagNeg[0] !== ''
      ? diagNeg.every((singleCell) => singleCell === diagNeg[0])
      : false
  const testDiagPos =
    diagPos[0] !== ''
      ? diagPos.every((singleCell) => singleCell === diagPos[0])
      : false

  if ((testCols || testRows || testDiagNeg || testDiagPos) && !isCompleted) {
    setIsCompleted(true)
  }
  return isCompleted
}
