import React from 'react'
import '../css/Type6range.css'
export const Type6range = (props) => {
  return (
    <div className='Type6range' style={{backgroundColor:props.backgroundColor}}>
        <input type="range"value={props.value} />
    </div>
  )
}
