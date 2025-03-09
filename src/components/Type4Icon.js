import React from 'react'
import '../css/Type4Icon.css'
export const Type4Icon = (prop) => {
  return (
    <div className='Type4Icon'style={{borderRight:prop.border}}>
        <div className='star' >{prop.icon}</div>
        <div className="rate">{prop.rate}</div>
    </div>
  )
}
