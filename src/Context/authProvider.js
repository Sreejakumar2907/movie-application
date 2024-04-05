import { auth } from "../Services/firebase";
import {createContext, useEffect, useState} from 'react'
import propTypes from 'prop-types'
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext= createContext()
export const AuthProvider=({children})=>{
const [user,setUser]=useState(null)
const [isLoading,setIsLoading]=useState(null)
function signInWithGoogle(){
    const Provider = new GoogleAuthProvider()
    return signInWithPopup(auth,Provider)
}
function logout(){
    return signOut(auth)
}
useEffect(()=>{
onAuthStateChanged(auth,(currentUser)=>{
    if(currentUser){
        setUser(currentUser)
    }
    else{
        setUser(null)
    }
    setIsLoading(false)
})
},[])

return <AuthContext.Provider value={{user,isLoading,signInWithGoogle,logout}}>
    {children}
</AuthContext.Provider>

}

AuthProvider.propTypes={children:propTypes.node.isRequired}
