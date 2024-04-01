import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from './NavBar'

// import { AiFillPlayCircle } from "react-icons/ai";
function Movies ()  {
  const {toggle,inputValue}=useContext(Container)

  const[moviesData, setMovieData]=useState([])
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
    // console.log(data.data);

    const results = res.data.results.map(movie => ({
      ...movie,
      overview: movie.overview.length > 200 ? movie.overview.slice(0, 200) + '...' : movie.overview
    }))
  console.log(results);
  setMovieData(results)
  }

  useEffect(()=>{
    MovieCall()
  },[input] )

  console.log(moviesData);
  return (
    <div className={toggle ? 'mainBgColor': 'secondaryBgColor'}>
    <div className='box'>
    
    {moviesData.map(({ id,title,popularity,poster_path,overview,release_date})=>(
      
      
      <>

      
      <div className='container'  id ='container' key={id}>
        
 
      {/* <AiFillPlayCircle size='2em' className='playCircle' /> */}
     <img className='image' src={`${Images +poster_path}`}/>
   <div className='details'>
     <h3 >{title}</h3> 
     <p>{popularity}</p>
     <p>{release_date}</p>
   </div>
   <p className='overview'>{overview}</p>
      </div>
      </>
    ))}
    </div>
    </div>
  )
}

export default Movies
