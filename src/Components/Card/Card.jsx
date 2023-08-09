import React from 'react'
import Icon from '../Icon/Icon'
import './Card.css'

function Card(props) {

  function playMove() {
    onPlay();
  }

  return (
    <div className='card' onClick={playMove} >
      <Icon name= {props.iconName}/>
    </div>
  )
}

export default Card
