import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import useLogin from '../../apps/Auth/pages/Login/hooks/useLogin'
import * as LayoutPages from '../../apps/Layout/pages'
import Account from '../Account'
import Bell from '../Bell'
import Favorite from '../Favorite'
import Shop from '../Shop'


const LeyoutRoutes = () => {
  const { users } = useLogin()

  const navigate = useNavigate()

  React.useEffect(() => {
    users && navigate('/')
  }, [users])

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<LayoutPages.Colect/>}/>
        <Route path='/bell' element={<Bell/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/basket' element={<Shop/>}/>

      </Routes>
    </React.Fragment>
  )
}

export default LeyoutRoutes

