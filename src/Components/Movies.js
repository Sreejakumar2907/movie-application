import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from './NavBar'
import { FaHeart } from "react-icons/fa";
import firebase from '../Firebase/FireBase'
import { collection, addDoc } from "firebase/firestore";
import Favorite from './Favorite';

// import { AiFillPlayCircle } from "react-icons/ai";
function Movies ()  {
  const {toggle,inputValue}=useContext(Container)

  const[moviesData, setMovieData]=useState([])
  console.log(moviesData);
  const input=inputValue

  const shown=input?'search':'discover'
  const Api=`https://api.themoviedb.org/3/${shown}/movie`
  const Images=  "https://image.tmdb.org/t/p/w500"
  const MovieCall =async ()=>{
    const res =await axios.get( Api ,{
      params:{
      api_key:'c733bcdd9cb816dcd24ecdcf26327fd1',
      query:input
      }
    })
   const results = res.data.results.map(movie => ({
      ...movie,
      overview: movie.overview.length > 200 ? movie.overview.slice(0, 200) + '...' : movie.overview
    }))

    // const db = firebase.firestore();
    // const moviesCollection = db.collection('movies');
    // results.forEach(async(movie)=>{
    //   await moviesCollection.doc(movie.id.toString()).set(movie)
    // })
  console.log('Movies stored in firebase successfully');
  // console.log(results);
  setMovieData(results)
  }
const handleSaveToWatchList=async(movie)=>{
  const data={
    id:movie.id,title:movie.title,poster_path:movie.poster_path,popularity:movie.popularity,overview:movie.overview
  }
  console.log(data);
}

  useEffect(()=>{
    MovieCall()
  },[input] )

  console.log(moviesData);

  return (
    <div className={toggle ? 'mainBgColor': 'secondaryBgColor'}>
    <div className='box'>
    {moviesData.map((movie)=>( 
      <>    
  <div className='container'  id ='container' key={movie.id}>
  <div className='heart'>
 <a href='#'><FaHeart onClick={() => handleSaveToWatchList(movie)} size='1.5rem' className='fav' /></a>
     <img className='image' src={`${Images +movie.poster_path}`}/>
  </div>

   <div className='details'>
     <h3 >{movie.title}</h3> 
     <p>{movie.popularity}</p>
    {/* <Favorite movie={movie} /> */}
   </div>
   <p className='overview'>{movie.overview}</p>
      </div>
      </>
    ))}
    </div>
    </div>
  )
}

export default Movies
