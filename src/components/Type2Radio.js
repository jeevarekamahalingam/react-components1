import React from 'react'

import '../css/Type2Radio.css'

export const Type2Radio= (props) => {
  const options1 = props.options||[];
  const options2=props.options1||[];
  const options=options1.length>1?options1:options2;
  return (
    <div className='Type2Radio' style={{backgroundColor:props.backgroundColorRadio}}>
      
         {options.map((option, index) => (
          <div className='insidediv'>
        <label 
          key={index} 
         name="radio-group"
        >
          {props.options?.length > 0 && (
              <span className="option" style={{ padding: props.paddingOption }}>
                {option}
              </span>
            )}
          
          <input 
            className='radio'
            type={props.type} 
            name="radio-group" 
            checked="false"
          />
            {props.options1?.length > 0 && <span className="option1" style={{ padding: props.paddingOption }}>{option}</span>}

        </label>
        </div>
      ))}
      {props.isDisabled&&<label 
         name="radio-group"
        >          
          <input 
            className='radio'
            type={props.type} 
            name="radio-group" 
            checked="false"
          />
            <span className="option1" disabled style={{ padding: props.paddingOption,color:"gray",cursor:'not-allowed' }}>{"Disabled"}</span>

        </label>}
      
    </div>
  )
}
