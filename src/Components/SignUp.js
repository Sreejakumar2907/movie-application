import { createUserWithEmailAndPassword } from "firebase/auth";
import React from 'react'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import {Link} from "react-router-dom"
import { useState } from 'react';

import { auth } from '../Firebase/FireBase'
// import { FirebaseError } from 'firebase/app';


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const signUp=(e)=>{
      e.preventDefault()
      createUserWithEmailAndPassword(auth,email,password)
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
    
    <h2  ><Link className='SignUp' to='/Login'><span >Login</span></Link>| Signup</h2>

  <form onSubmit={signUp}>
  <input value={email}onChange={(e) => setEmail(e.target.value)} className='email' type='email' placeholder='Email' /><MdEmail color=' rgb(69, 68, 68)'  className='email-icon'/><br/>
   <input value={password}onChange={(e) => setPassword(e.target.value)} className='password' type='password' placeholder='Password' /><RiLockPasswordFill color=' rgb(69, 68, 68)' className='password-icon' /><br/>
   <input value={confirmPassword}onChange={(e) => setConfirmPassword(e.target.value)} type="password"  placeholder='Confirm Password' className='confirm-password'/>
   <button type="submit" className='Login'>SignUp</button>
   <div className='guest'>
    <p>Guest Mode</p>
   </div>
   <div className='google'>
    <p>Continue with Google</p>
   </div>
  </form>
  </div>
   </>
  )
}

export default SignUp
