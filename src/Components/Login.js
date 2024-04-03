import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../Firebase/FireBase';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth,email,password)
    .then(( userCredential)=>{
     console.log(userCredential);
    })
    .catch(( error)=>{
      console.log(error);
     })
}
  return (
   <>
  <div className='login'>
    <h2 className='heading'>Login | <span><button className='signUp'>Signup</button></span></h2>
  <form onSubmit={login}>
  <input className='email' value={email}onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' /><MdEmail color=' rgb(69, 68, 68)'  className='email-icon'/><br/>
   <input className='password' value={password}onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' /><RiLockPasswordFill color=' rgb(69, 68, 68)' className='password-icon' /><br/>
   <button type='submit' className='Logins'>Login</button>
  </form>
  
  </div>
   </>
  )
}

export default Login
