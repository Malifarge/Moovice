
/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react"
import NavBar from "../components/navBar"
import '../styles/favorite.css'

const Favorites = () =>{

    const [movies, setMovies] = useState([])
    
    useEffect(()=>{
        let Ids
    
        if (localStorage.favoriteIds){
            const localStorageIds= localStorage.getItem("favoriteIds")
            Ids = JSON.parse(localStorageIds)
            const favorite = [...movies]
            Ids.forEach((id)=>{
             fetchFavorite(id,favorite)
       })
        }
    },[])

    const fetchFavorite = async (ID, favorite) => {
        
        const response = await fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=fe35d13ec177e4465861d822f792c0a9`)
        const data = await response.json()
        favorite.push(data)
        setMovies(favorite)
      }



    return(
        <>
        <NavBar/>

        <section className="favorie"> 
        <h1>Favorites</h1>
        {movies.map((movie)=>{
          return  <article key={movie.title}>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
            <div>
            <h2>{movie.title}</h2>
            <p>release : {movie.release_date}</p>
            <h3>About</h3>
            <p>{movie.overview}</p>
            </div>
          </article>
        })}
        </section>
        </>
    )
}

export default Favorites