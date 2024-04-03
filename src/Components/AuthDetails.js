import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import {auth} from '../Firebase/FireBase'
const AuthDetails = () => {
const[authUser,SetAuthUser]=useState(null)
useEffect(()=>{
    const listen=onAuthStateChanged(auth,(user)=>{
        if(user){
            SetAuthUser(user)
        }
        else{
            SetAuthUser(null)
        }
    })
    return()=>{
        listen()
    }
},[])
const userSignOut=()=>{
    signOut(auth)
    .then(()=>{
        console.log("Signed out successfully");
    })
    .catch((error)=>{
        console.log(error);
    })
}
return (
    <div>
    
      {authUser?(<>  <p>{`signed in as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></>  ):(<p>SignedOut</p>)}
    </div>
  )
}

export default AuthDetails
