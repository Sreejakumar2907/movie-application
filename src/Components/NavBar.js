import React ,{useState} from 'react'
import {Routes,Route,NavLink}from "react-router-dom"
import { HiSearch } from "react-icons/hi";
import '../Styles/NavBar.css'
import Movies from './Movies';
import TvShows from './TvShows';
import Trends from './Trends';
import Login from './Login';
import SignUp from './SignUp';
import AuthDetails from './AuthDetails';


export const Container = React.createContext()

const NavBar = () => {
  const [toggle, setToggle] =useState(true)
  const[inputValue,setInputValue]=useState('')
  return (
    <Container.Provider value={{toggle,inputValue}}>
   <>
   <nav className={toggle ? '' : 'navBarColor'}>
        <div className='nav-options'>
            <h2 id={toggle ? '' : 'heading'}>CONNECT</h2>
            <NavLink to='/Movies' style={({isActive}) =>  {return{color : isActive ? '#fff' : '#EE9B00'}}}>
            <span id={toggle ? 'Movies':'MoviesLight'}>Movies</span>
            </NavLink>
              <NavLink to='/TvShows' style={({isActive}) =>  {return{color : isActive ? '#fff' : '#EE9B00'}}}>
            <span id={toggle ? 'Movies':'MoviesLight'}>Tv Shows</span>
            </NavLink>
            <NavLink to="/Trends" style={({isActive}) =>  {return{color : isActive ? '#fff' : '#EE9B00'}}}>
            <span id={toggle ? 'Movies':'MoviesLight'}>Trending</span>
            </NavLink>
            <NavLink to="Login" style={({isActive}) =>  {return{color : isActive ? '#fff' : '#EE9B00'}}}>
            <span id={toggle ? 'Movies':'MoviesLight'}>Login</span>
            </NavLink>
            <NavLink to="SignUp" style={({isActive}) =>  {return{color : isActive ? '#fff' : '#EE9B00'}}}>
            <span id={toggle ? 'Movies':'MoviesLight'}>SignUp</span>
            </NavLink>
        </div>
        <div className='input-group'>
        <input type='text' placeholder='Search' onChange={(e)=>{setInputValue(e.target.value)}}/>
        <HiSearch fontSize={21} color='black' id='search' />
        <div id='Color-switcher' onClick={()=>setToggle (!toggle)}>
          <div id= {toggle ? 'Color-switcher-mover' :'Color-switcher-moved'}></div>
        </div>
        </div>
   </nav>

   <AuthDetails/>
   <Routes>
      <Route path='Movies' element={<Movies/>} />
      <Route path='TvShows' element={<TvShows/>} />
      <Route path='Trends' element={<Trends/>} />
      <Route path='Login' element={<Login/>}/>
      <Route path='SignUp' element={<SignUp/>}/>
   </Routes>
   </>
   </Container.Provider>
  )
}

export default NavBar
