import React from 'react'
import {Login as LoginComponent}  from '../components/Login'
function Login() {
  console.log("Login")
  return (
    <div className='py-8'>
    <LoginComponent />
    </div>
  )
}

export default Login