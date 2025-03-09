import React from 'react'
import '../css/Container.css'
export const Container = (prop) => {
  return (
    <div className='Container'>{prop.children}</div>
  )
}
