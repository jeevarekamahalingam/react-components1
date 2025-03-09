import React from 'react'
import '../css/Type1text.css';
export const Type1text = (props) => {

  return (
    <div  className='Type1text' style={{marginBottom:props.margin}}>
        <input type={props.type} name="search" id="search" placeholder={props.placeholder}  />
        <div className='buttondiv' style={{backgroundColor:props.background}}><button style={{backgroundColor:props.background}}>{props.icon}</button></div>
    </div>
  )
}
