
/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react"
import '../styles/favorite.css'

const Favorites = () =>{

    const [movies, setMovies] = useState([])
    
    useEffect(()=>{
        let Ids
        if (localStorage.favoriteIds){
            const localStorageIds= localStorage.getItem("favoriteIds")
            Ids = JSON.parse(localStorageIds)
            fetchFavorite(Ids)
        }
    },[])

    const fetchMovie = async (ID) => {
        
        const response = await fetch(`https://api.themoviedb.org/3/movie/${ID}?api_key=fe35d13ec177e4465861d822f792c0a9`)
        const data = await response.json()
        return data
      }

      const fetchFavorite = async (ids) =>{
        const promises = ids.map(id => {
          return fetchMovie(id)
        })
        const promiseAllResult = await Promise.all(promises)
        setMovies(promiseAllResult)
      }

      const handleRemoveClick = (id) => {
        const localStorageIds= localStorage.getItem("favoriteIds")
        const Ids = JSON.parse(localStorageIds)
        const index = Ids.indexOf(id)
        Ids.splice(index,1)
        const stringifiedIds = JSON.stringify(Ids)
        localStorage.setItem('favoriteIds', stringifiedIds)
        fetchFavorite(Ids)
      }



    return(
        <>

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
            <div className="button">
              <button onClick={() => handleRemoveClick(movie.id)}>Remove to Favorite</button>
            </div>
            </div>
          </article>
        })}
        </section>
        </>
    )
}

export default Favorites