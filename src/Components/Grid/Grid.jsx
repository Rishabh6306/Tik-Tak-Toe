import React, { useState } from 'react'
import Card from '../Card/Card'
import './Grid.css'
import { FaLastfm } from 'react-icons/fa'

function Grid(props) {
    const [turn, setTurn] = useState(true)
    const [board, setBoard] = useState(Array(props.numbersOfCards).fill(''))

    function play(index) {
        console.log("clicked", index);
        setTurn(!turn)
    }

    return (
        <>
            <h1 className='turn-highlight'>Current Turn: {(turn) ? '0' : 'X'}</h1>
            <div className='grid'>
               {board.map((value, index) => {
                   return <Card onPlay={play} key={index} index={index} player={value} iconName="" />
                })}
            </div>
        </>
    )
}

export default Grid