/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import NavBar from "../components/navBar"
import '../styles/home.css'
import CardPres from "../components/cardpres";

const Home = () =>{
    const apiKey = "fe35d13ec177e4465861d822f792c0a9"
    const [moviesNowPlaying,setMoviesNowPlaying]= useState([])
    const [moviesTopRated,setMoviesTopRated]= useState([])
    const [moviesUpComing,setMoviesUpComing]= useState([])
    const [moviesLatest,setMoviesLatest] = useState([])


    const fetchMovies = async () => {
        const responsePlaying = await fetch(` https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
        const dataPlaying = await responsePlaying.json()
        setMoviesNowPlaying(dataPlaying.results)
        const responseTop = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
        const dataTop = await responseTop.json()
        setMoviesTopRated(dataTop.results)
        const responseUpcoming = await fetch (`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
        const dataUpcoming = await responseUpcoming.json()
        setMoviesUpComing(dataUpcoming.results)
        const responseLatest = await fetch (`https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`)
        const dataLatest = await responseLatest.json()
        setMoviesLatest(dataLatest)
      }

    useEffect(()=>{
        fetchMovies()
    },[])

    return(
        <>
        <NavBar/>
        <section className="home">
            <h1>Home</h1>

            <h2>Latest</h2>
           <CardPres movie={moviesLatest} />

            <h2>Now playing</h2>
            <section className="playing">
                {moviesNowPlaying.map((movie)=>{
                  return  <CardPres movie={movie} />
                 })}
            </section>

            <h2>Top Rated</h2>
            <section className="playing">
                {moviesTopRated.map((movie)=>{
                    return  <CardPres movie={movie} />
                 })}
            </section>

            <h2>Upcoming</h2>
            <section className="playing">
                {moviesUpComing.map((movie)=>{
                    return  <CardPres movie={movie} />
                 })}
            </section>

        </section>
        </>
    )
}

export default Home