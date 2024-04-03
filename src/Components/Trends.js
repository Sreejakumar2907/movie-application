import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from './NavBar'
import { FaHeart } from "react-icons/fa";
function Trending ()  {
  const {toggle}=useContext(Container)
  const[TrendingData, setTrendingData]=useState([])
  const Api=`https://api.themoviedb.org/3/trending/movie/day`
  const Images=  "https://image.tmdb.org/t/p/w500"
  const TrendingCall =async ()=>{
    const res =await axios.get( Api ,{
      params:{
      api_key:'c733bcdd9cb816dcd24ecdcf26327fd1',
      
      }
    })
    const results = res.data.results.map(Trending => ({
      ...Trending,
      overview: Trending.overview.length > 200 ? Trending.overview.slice(0, 200) + '...' : Trending.overview
    }))
  console.log(results);
  setTrendingData(results)
  }

  useEffect(()=>{
    TrendingCall()
  },[] )

  console.log(TrendingData);
  return (
    <div className={toggle ? 'mainBgColor': 'secondaryBgColor'}>
    <div className='box'>
    
    {TrendingData.map(({ id,title,popularity,poster_path,overview,release_date})=>(
      
      
      <>

      
      <div className='container'  id ='container' key={id}>
    <div className='heart'>
    <a href='#'><FaHeart size='1.5rem' className='fav' /></a>
     <img className='image' src={`${Images +poster_path}`}/>
    </div>
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

export default Trending
