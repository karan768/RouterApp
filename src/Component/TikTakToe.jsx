import React, { useState } from 'react'

const initialValue = Array(9).fill(null);

const winningPatterns = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function TikTakToe() {
    const [board, setBoard] = useState(initialValue)
	const [isXNext, setIsXNest] = useState(true);

	const getMessage = () => {
		const winner = calculateWinner();

		if(winner) return `Player ${winner} won the game!!`;
			if(!board.includes(null)) return 'It is a draw ;(';
				return `${isXNext ? 'X' : 'O' } turn`
	};

	const calculateWinner = () => {	
		for(let i = 0; i < winningPatterns.length; i++) {
			const [a, b, c] = winningPatterns[i];
			if(board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a];
			}
		}
		return null;
	};

	const handleClick = (i) => {
		const winner = calculateWinner();

		if(winner) return; 

		const boardCp = [...board]
		boardCp[i] = isXNext ? 'X' : 'O';
		setBoard(boardCp);
		setIsXNest(!isXNext);
	};

	const reset = () => {
		setBoard(initialValue);
		setIsXNest(true);
	}

	return(
		<div className="game-container">
			<div className="game-nav">
				<span className="message">{getMessage()}</span>
				<button onClick={() => reset()}className="reset">Reset</button>
			</div>
			<div className="board">
				{
					board.map((el, i) => {
						return (
							<button disabled={el !== null} onClick={() => handleClick(i)} key={i} className="cell">{el}</button>
						)
					})
				}
			</div>
		</div>
	)
}

export default TikTakToe