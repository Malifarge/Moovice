
/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react"
import NavBar from "../components/navBar"

const Favorites = () =>{

    const [movies, setMovies] = useState([])
    const [moviesList,setMoviesList] = useState([])

    const fetchMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fe35d13ec177e4465861d822f792c0a9`)
        const data = await response.json()
        setMoviesList(data.results)
      }

    useEffect(()=>{
    fetchMovies()
  },[]
  )

  useEffect(()=>{
    let Ids
    const newMovie = movies
        if (localStorage.favoriteIds){
            const localStorageIds= localStorage.getItem("favoriteIds")
       Ids = JSON.parse(localStorageIds)
        }else{
           Ids=[]
        }
    Ids.forEach((id)=>{
        const currentMovie = moviesList.find(movieList => movieList.id === Number(id))
        if(currentMovie){
            newMovie.push(currentMovie)
            setMovies(newMovie)
        }
    })
  },[moviesList]
  )


    return(
        <>
        <NavBar/>
        <h1>Favorites</h1>
        {movies.map((movie)=>{
          return  <article key={movie.title}>
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
        <h2>{movie.title}</h2>
        <p>release : {movie.release_date}</p>
        <h3>About</h3>
        <p>{movie.overview}</p>
          </article>
        })}
        </>
    )
}

export default Favorites