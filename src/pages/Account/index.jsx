import React from 'react'
import useLogin from '../../apps/Auth/pages/Login/hooks/useLogin'
import cls from './Account.module.scss'


const Account = () => {

  const {users} = useLogin()

  if(!users) return <h1>loading..</h1>

  return (
    <div>
      <div className={cls.row}>
        <div className={cls.card}>
          <img  className={cls.photoURL} src={users.photoURL} alt="" />
        </div>
        <div className={cls.row_title}>
          <div className={cls.title}>
            <h1 className={cls.Name}>Name: {users.name}</h1>
            <h1  className={cls.Email}>Email: {users.email}</h1>
            <h1  className={cls.idUser}>ID: {users.id}</h1>
            <h1  className={cls.Number}>Number: {users.number ? users.number : 'No number'}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account