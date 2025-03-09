import React from 'react'
import { Type5Icon } from './Type5Icon'
import { Type6range } from './Type6range'
import '../css/Type7collection.css'
import { FaPlay } from "react-icons/fa";

export const Type7collection = () => {
  return (
    <div className='Type7collection'>
        <div className="img" style={{background:`url("/stu.png")`,backgroundSize: "cover"}}></div>
        <div className="player">
            <Type5Icon><FaPlay color='gray'  size={25}  /></Type5Icon>
            <Type6range backgroundColor="white"/>
        </div>
    </div>
  )
}
