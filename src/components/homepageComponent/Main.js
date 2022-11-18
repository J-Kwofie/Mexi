import React from 'react'
import { MainSectionStyled } from './MainStyled'

export default function Main() {
  return (
        <MainSectionStyled>
          <div>
          <h1 className='heading'>New product</h1>
           <div className='product'>
            <span> XX99 Mark II </span>
            <span> Headphones </span>
           </div>
           <p className='product-message'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button className='see-product'>See product</button>  
          </div>          
        </MainSectionStyled>
  )
}
