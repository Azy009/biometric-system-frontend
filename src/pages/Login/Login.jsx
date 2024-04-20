import React from 'react'
import Header from '../../Components/Header'
import Loginform from './Loginform'

const Login = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
        {/* <Header /> */}
        <Loginform />
    </div>
  )
}

export default Login