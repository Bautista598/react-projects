import { useState } from 'react'

// Constante que contiene los turnos y Las jugadas ganadoras
import { TURNS } from '../constants.js'

// Lógica necesaria para resetear el tablero y actualizar
import { updateBoard } from '../logicBoard/board.js'
import { resetGame } from '../logicBoard/game.js'

import Square from './Square'
import WinnerModal from './WinnerModal.jsx'

function Game() {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [turn, setTurn] = useState(TURNS.X)
	const [winner, setWinner] = useState(null)

	return (
		<main className="board">
			<h1>Tres en ralla</h1>
			<button onClick={() => resetGame(setBoard, setTurn, setWinner)}>
				Empezar de nuevo
			</button>
			<section className="game">
				{board.map((square, index) => {
					return (
						<Square
							key={index}
							index={index}
							updateBoard={() =>
								updateBoard(
									index,
									board,
									setBoard,
									turn,
									setTurn,
									winner,
									setWinner
								)
							}
						>
							{square}
						</Square>
					)
				})}
			</section>

			<section className="turn">
				<Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
				<Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
			</section>

			<WinnerModal winner={winner} resetGame={resetGame} />
		</main>
	)
}

export default Game
