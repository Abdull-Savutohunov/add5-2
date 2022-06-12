import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className='d-flex justify-content-center' style={{height:'80vh'}}>
        <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader