import React from 'react'
import './Center.css'
//This component is created just to give example for a decorator
function Center(props) {
  return (
    <div className='center'>
      {props.children}
    </div>
  )
}

export default Center
