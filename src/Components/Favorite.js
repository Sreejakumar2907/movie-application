// import React, { useEffect, useState } from 'react'
// import firebase from '../Firebase/FireBase'
// import 'firebase/database'

// const Favorite = ({movie}) => {
// const [isFavorite,setIsFavorite]=useState;
// useEffect(()=>{
//   const fetchFavoriteStatus =async()=>{
//     const snapshot=await firebase.database().ref(`favorites/${movie.id}`).once('value')
//     console.log(snapshot);
//     setIsFavorite(snapshot.exists())
//  }
// fetchFavoriteStatus()

// },[movie.id])





// const toggleFavorite=()=>{
//   setIsFavorite(!isFavorite)
//   if (isFavorite) {
//     firebase.database().ref(`favorites/${movie.id}`).remove()
//   }
//   else{
//     firebase.database().ref(`favorites/${movie.id}`).set(movie)
//   }
// }
//   return (
//     <div>
//       <button onClick={toggleFavorite}> {isFavorite? 'Remove from favorites' : 'Add to favorites'} </button>
//     </div>
//   )
// }

// export default Favorite
