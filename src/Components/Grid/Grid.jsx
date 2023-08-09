import React from 'react'
import Card from '../Card/Card'
import './Grid.css'

function Grid(props) {
    return (
        <div className='grid'>
            {Array(props.numbersOfCards).fill(<Card />).map((el, index) => <Card key={index} iconName="" />)}
        </div>
    )
}

export default Grid