import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
const Login = () => {
  return (
   <>
  <div className='login'>
    <h2 className='heading'>Login | <span><button>Signup</button></span></h2>
    <p className='para'>Get login to access your account</p>
    <input className='email' type='email' placeholder='Email' /><MdEmail  className='email-icon'/><br/>
   <input className='password' type='password' placeholder='Password' /><RiLockPasswordFill className='password-icon' /><br/>
   <button className='Login'>Login</button>
  </div>
   </>
  )
}

export default Login
