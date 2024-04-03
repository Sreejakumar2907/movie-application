import { useContext } from "react";
import {AuthContext} from "../Firebase/FireBase"
export const useAuth =()=>{
    useContext(AuthContext)
}