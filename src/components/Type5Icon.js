import React from 'react'
import '../css/Type5Icon.css'
export const Type5Icon = (prop) => {
      return (
            <div className='Type5Icon'style={{backgroundColor:prop.background}}>
                {prop.children}
            </div>
          )
}
