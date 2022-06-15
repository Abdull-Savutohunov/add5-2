import React from "react";
import useLogin from "./apps/Auth/pages/Login/hooks/useLogin";
import LeyoutRoutes from "./pages/LayoutRoutes";
import AuthRoutes from "./pages/AuthRoutes";
import Loader from "./components/Loader";
 
// CSS Imports

import './App.css'

export const App = () =>{

  const { users , loading } = useLogin()

  if(loading) return <Loader />


  return users ? <LeyoutRoutes /> : <AuthRoutes />

  
}

export default App;
