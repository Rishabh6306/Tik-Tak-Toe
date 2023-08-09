import React from 'react'
import Icon from '../Icon/Icon'
import './Card.css'

function Card(props) {
  return (
    <div className='card'>
      <Icon name= {props.iconName}/>
    </div>
  )
}

export default Card
