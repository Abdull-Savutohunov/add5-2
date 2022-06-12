import { onAuthStateChanged } from 'firebase/auth'
import React from 'react'
import { auth } from '../../../../../firebase/index'

const useLogin = () => {
  const [users , setUsers] = React.useState(null)
  const [loading ,  setLoading] = React.useState(true)

    React.useEffect(() => {
      const Listen = onAuthStateChanged(auth , user => {
        if(user) {
          setLoading(false)
          setUsers({
            id:user.uid,
            name:user.displayName,
            email:user.email,
            photoURL:user.photoURL,
            number: user.phoneNumber
          })
        }else{
          setLoading(false)
        }
      })

      return () => Listen()
    }, [])

  return {
    users,
    loading
  }
}

export default useLogin