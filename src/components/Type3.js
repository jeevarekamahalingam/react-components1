import React from 'react'
import '../css/Type3.css'
export const Type3 = (props) => {
  return (
    <div className='Type3'style={{width:props.totalwidth,marginBottom:props.marginBottom}}>
        <div className="div1" style={{background:`url(${props.img})`,backgroundColor:props.background1, width:props.width1, padding:props.padding}}>{props.icon1}</div>
        <div className='content'  style={{backgroundColor:props.background2, width:props.contentwidth}}>
            {props.val}
            <div className="name">
                {props.name}
            </div>
            <div className="designation">
                {props.designation}
            </div>
        </div>
        <div className='icon' style={{backgroundColor:props.background1,width:props.width2, padding:props.padding,borderLeft:props.borderLeft}}> {props.icon2}</div>
    </div>
  )
}
