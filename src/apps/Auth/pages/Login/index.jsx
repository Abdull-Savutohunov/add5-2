import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from '../../../../firebase'
import cls from './Login.module.scss'


const Login = () => {
  const provider = new GoogleAuthProvider()

  const handelLoginWithGoogle = () => signInWithPopup(auth , provider)
  
  return (
    <React.Fragment>
      
      <div className={cls.row}>
      <div className={cls.container}>
        <div className={cls.brand_logo}></div>
        <div className={cls.brand_title}>GABE / STORE</div>
        <div className={cls.inputs}>
          <label className={cls.label_password}>EMAIL</label>
          <input className={cls.input_signIn} type="email" placeholder="example@test.com" />
          <label className={cls.label_password}>PASSWORD</label>
          <input className={cls.input_signIn} type="password" placeholder="Min 6 charaters long" />
          <button className={cls.signOut_btn} type="submit">LOGIN</button>
          <div className={cls.card}>
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