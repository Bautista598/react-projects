import confetti from 'canvas-confetti'

import { TURNS } from "../constants"
import { checkWinner, checkEndGame } from "./game"

export const updateBoard = (index, board, setBoard, turn, setTurn, winner, setWinner) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }