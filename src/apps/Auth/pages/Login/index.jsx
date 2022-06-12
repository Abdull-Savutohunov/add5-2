import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from '../../../../firebase'
import cls from './Login.module.scss'


const Login = () => {
  const provider = new GoogleAuthProvider()

  const handelLoginWithGoogle = () => signInWithPopup(auth , provider)
  
  return (
    <React.Fragment>
      <div className={cls.container}>
        <div className={cls.row} style={{height:'80vh'}}>
            <div className={cls.card}>
              <h1 className='text-center'>Login</h1>

              <div >
                <img
                  className={cls.img_google} 
                  onClick={handelLoginWithGoogle}
                  width={'200px'} 
                  style={{cursor:'pointer'}} 
                  src="https://i.ya-webdesign.com/images/logo-google-chrome-png.png" 
                  alt="" />
              </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login