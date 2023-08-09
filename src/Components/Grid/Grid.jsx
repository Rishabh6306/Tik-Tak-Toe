import React, { useState } from 'react'
import Card from '../Card/Card'
import './Grid.css'
import { FaLastfm } from 'react-icons/fa'

function Grid(props) {
    const [turn, setTurn] = useState(true)
    const [board, setBoard] = useState(Array(numbersOfCards).fill(''))

    function play() {
        console.log("clicked");
        setTurn(!turn)
    }

    return (
        <>
            <h1 className='turn-highlight'>Current Turn: {(turn) ? '0': 'X'}</h1>
            <div className='grid'>
                {Array(props.numbersOfCards).fill(<Card  />).map((el, index) => <Card onPlay={play} key={index} iconName=""  />)}
            </div>
        </>
    )
}

export default Grid