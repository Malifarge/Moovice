/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import NavBar from "../components/navBar"
import '../styles/home.css'

const Home = () =>{
    const apiKey = "fe35d13ec177e4465861d822f792c0a9"
    const [moviesNowPlaying,setMoviesNowPlaying]= useState([])
    const [moviesTopRated,setMoviesTopRated]= useState([])

    const fetchMovies = async () => {
        const responsePlaying = await fetch(` https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
        const dataPlaying = await responsePlaying.json()
        setMoviesNowPlaying(dataPlaying.results)
        const responseTop = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
        const dataTop = await responseTop.json()
        setMoviesTopRated(dataTop.results)
      }

    useEffect(()=>{
        fetchMovies()
    },[])

    const handleAddClick = (ID) =>{

        let Ids
    
        if (localStorage.favoriteIds){
            const localStorageIds= localStorage.getItem("favoriteIds")
            Ids = JSON.parse(localStorageIds)
        }else{
           Ids=[]
        }
        if(!Ids.includes(ID)){
            Ids.push(ID)
        }
        const stringifiedIds = JSON.stringify(Ids)
        localStorage.setItem('favoriteIds', stringifiedIds)
    }

    return(
        <>
        <NavBar/>
        <section className="home">
            <h1>Home</h1>
            <h2>Now playing</h2>
            <section className="playing">
                {moviesNowPlaying.map((movie)=>{
                    return <article className="weeklyArticle" key={movie.title}>
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
                        <h3>{movie.title}</h3>
                        <button onClick={()=>handleAddClick(movie.id)}>Add to favorite</button>
                    </article>
                 })}
            </section>
            <h2>Top Rated</h2>
            <section className="playing">
                {moviesTopRated.map((movie)=>{
                    return <article className="weeklyArticle" key={movie.title}>
                        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
                        <h3>{movie.title}</h3>
                        <button onClick={()=>handleAddClick(movie.id)}>Add to favorite</button>
                    </article>
                 })}
            </section>

        </section>
        </>
    )
}

export default Home