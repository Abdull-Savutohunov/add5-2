import React from "react";
import {AiOutlineArrowUp , AiOutlineArrowDown} from 'react-icons/ai'

const Button = ({direction , handelSlide}) => {
  return (
    <>
    {
      direction === 'prev' 
      ? <button className={direction === 'prev' && 'prev submitBtn'} onClick={handelSlide}><AiOutlineArrowUp /></button> 
      : <button className={direction === 'next' && 'next submitBtn'} onClick={handelSlide}><AiOutlineArrowDown /></button>
    }
    </>
  )
}

export default Button