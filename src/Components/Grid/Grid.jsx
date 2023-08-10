import React, { useCallback, useState } from 'react'
import Card from '../Card/Card'
import './Grid.css'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

function isWinner(board, symbol) {
    if (board[0] === board[1] && board[1] === board[2] && board[2] === symbol) return symbol;
    if (board[3] === board[4] && board[4] === board[5] && board[5] === symbol) return symbol;
    if (board[6] === board[7] && board[7] === board[8] && board[8] === symbol) return symbol;


    if (board[0] === board[3] && board[3] === board[6] && board[6] === symbol) return symbol;
    if (board[1] === board[4] && board[4] === board[7] && board[7] === symbol) return symbol;
    if (board[2] === board[5] && board[5] === board[8] && board[8] === symbol) return symbol;


    if (board[0] === board[4] && board[4] === board[8] && board[4] === symbol) return symbol;
    if (board[2] === board[4] && board[4] === board[6] && board[4] === symbol) return symbol;

    return '';
}

function Grid(props) {
    const [turn, setTurn] = useState(true);
    const [board, setBoard] = useState(Array(props.numbersOfCards).fill(''));
    const [winner, setWinner] = useState('');

    const play = useCallback(
        function playCallback(index) {
            if (board[index] === '' && winner === '') {
                const newBoard = [...board];
                newBoard[index] = turn ? '0' : 'X';

                setBoard(newBoard);

                const win = isWinner(newBoard, newBoard[index]);
                if (win) {
                    setWinner(win);
                    toast(`Congratulations ${win} has won the game.`);
                } else if (!newBoard.includes('')) {
                    setWinner('Tie'); // Game over in a tie
                    toast('Game Over: It\'s a tie.');
                }

                setTurn(!turn);
            }
        },
        [board, turn, winner]
    );

    function reset() {
        setBoard(Array(props.numbersOfCards).fill(''));
        setWinner('');
    }

    return (
        <div className='grid-wrapper'>
            <h1 className='turn-highlight'>{winner ? (winner === 'Tie' ? 'Game Over' : 'Winner is ' + winner) : 'Current Turn: ' + (turn ? '0' : 'X')}</h1>
            <div className='grid'>
                {board.map((value, index) => {
                    return (
                        <Card
                            gameEnd={winner ? true : false}
                            onPlay={play}
                            key={index}
                            index={index}
                            player={value}
                            iconName=''
                        />
                    );
                })}
            </div>
            {winner && (
                <div className='result-message'>
                    <button className='reset' onClick={reset}>Reset Game</button>
                    {winner === 'Tie' ? 'It\'s a tie.' : `Congratulations ${winner} has won the game.`}
                </div>
            )}
            <ToastContainer position='top-center' />
        </div>
    );
}

export default Grid;