/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import '../styles/home.css'
import CardPres from "../components/cardpres";

const Home = () =>{
    const apiKey = "fe35d13ec177e4465861d822f792c0a9"
    const [moviesNowPlaying,setMoviesNowPlaying]= useState([])
    const [moviesTopRated,setMoviesTopRated]= useState([])
    const [moviesUpComing,setMoviesUpComing]= useState([])
    const [moviesLatest,setMoviesLatest] = useState(null)


    const fetchMovies = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        return data
      }

    useEffect(()=>{
        setMovies()

    },[])

    const setMovies = async () =>{
        const nowPlayin = await fetchMovies(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`)
        setMoviesNowPlaying(nowPlayin.results)

        const topRated = await fetchMovies(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`)
        setMoviesTopRated(topRated.results)

        const upComing = await fetchMovies(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US`)
        setMoviesUpComing(upComing.results)

        const latest = await fetchMovies(`https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`)
        setMoviesLatest(latest)
    }

    return(
        <>
        <section className="home">
            <h1>Home</h1>

            <h2>Latest</h2>
            {moviesLatest && <CardPres movie={moviesLatest} />}

            <h2>Now playing</h2>
            <section className="playing">
                {moviesNowPlaying.map((movie)=>{
                  return  <CardPres movie={movie} key={movie.title}/>
                 })}
            </section>

            <h2>Top Rated</h2>
            <section className="playing">
                {moviesTopRated.map((movie)=>{
                    return  <CardPres movie={movie} key={movie.title}/>
                 })}
            </section>

            <h2>Upcoming</h2>
            <section className="playing">
                {moviesUpComing.map((movie)=>{
                    return  <CardPres movie={movie} key={movie.title}/>
                 })}
            </section>

        </section>
        </>
    )
}

export default Home