import React from 'react'
import Icon from '../Icon/Icon'
import './Card.css'

function Card(props) {

  let icon = <Icon/>
  if (props.player === 'X') {
    icon = <Icon name="cross"/>
  } else if (props.player === '0') {
    icon = <Icon name = 'circle'/>
  } 
  return (
    <div className='card' onClick={() => props.onPlay(props.index)} >
      {icon}
    </div>
  )
}

export default Card;