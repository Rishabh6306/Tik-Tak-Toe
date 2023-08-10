import React, { useState } from 'react'
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
    const [turn, setTurn] = useState(true)
    const [board, setBoard] = useState(Array(props.numbersOfCards).fill(''))
    const [winnner, setWinner] = useState('')

    function play(index) {
        console.log("clicked", index);
        if (turn === true) {
            board[index] = '0'
        } else {
            board[index] = 'X'
        }

        const win = isWinner(board, turn ? '0' : 'X');
        if (win) {
            setWinner(win)
            toast(`Congratulation ${win} is win the game.`)
        }
        setTurn([...board])
        setTurn(!turn)

    }

       function reset() {
           setBoard(Array(props.numbersOfCards).fill())
           setWinner(null)
       }

    return (
        <div className='grid-wrapper'>
            {winnner && (
                <>
                    <h1 className='turn-highlight'>Winner is {winnner} </h1>
                    <button className='reset' onClick={reset}>Reset Game</button>
                    <ToastContainer position='top-center' />
                </>
            )}

            <h1 className='turn-highlight'>Current Turn: {(turn) ? '0' : 'X'}</h1>
            <div className='grid'>
                {board.map((value, index) => {
                    return <Card gameEnd={winnner?true:false} onPlay={play} key={index} index={index} player={value} iconName="" />
                })}
            </div>
        </div>
    )
}

export default Grid;