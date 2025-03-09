import React from 'react'
import '../css/IconContainer.css'
export const IconContainer = (prop) => {
  return (
    <div className='IconContainer' style={{width:prop.IconContainerwidth,backgroundColor:prop.backgroundColor,marginBottom:prop.bottommargin}} >{prop.children}</div>
  )
}
