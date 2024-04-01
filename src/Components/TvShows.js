import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from './NavBar'

function TvShows ()  {
  const {toggle,inputValue}=useContext(Container)
  const[TvShowData, setTvShowData]=useState([])
  const input=inputValue
  const shown=input?'search':'discover' 
  const Api=`https://api.themoviedb.org/3/${shown}/tv`
  const Images=  "https://image.tmdb.org/t/p/w500"
  const TvShowCall =async ()=>{

    const res =await axios.get( Api ,{
      params:{
      api_key:'c733bcdd9cb816dcd24ecdcf26327fd1',
      query:input
      }
    })
    // console.log(data.data);

    const results = res.data.results.map(tvShow => ({
      ...tvShow,
       overview: tvShow.overview.length > 200 ? tvShow.overview.slice(0, 200) + '...' : tvShow.overview

      
    }))
  console.log(results);
  setTvShowData(results)
  }

  useEffect(()=>{
    TvShowCall()
  },[input] )

  console.log(TvShowData);
  return (
    <div  className={toggle ? 'mainBgColor': 'secondaryBgColor'}>
    <div className='box'>
    
    {TvShowData.map(({ id,name,popularity,poster_path,overview})=>(
      
      
      <>

      
      <div className='container'  id ='container' key={id}>
        
 
      {/* <AiFillPlayCircle size='2em' className='playCircle' /> */}
     <img className='image' src={`${Images +poster_path}`}/>
   <div className='details'>
     <h3 >{name}</h3> 
     <p>{popularity}</p>
  
   </div>
   <p className='overview'>{overview}</p>
      </div>
      </>
    ))}
    </div>
    </div>
  )
}

export default TvShows
