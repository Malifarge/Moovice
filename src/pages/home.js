/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import NavBar from "../components/navBar"
import '../styles/home.css'

const Home = () =>{

    const [movies,setMovies]= useState([])

    const fetchMoviesTest = async () => {
        const response = await fetch(` https://api.themoviedb.org/3/movie/now_playing?api_key=fe35d13ec177e4465861d822f792c0a9&language=en-US&page=1`)
        const data = await response.json()
        setMovies(data.results)
      }

    useEffect(()=>{
        fetchMoviesTest()
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
                {movies.map((movie)=>{
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