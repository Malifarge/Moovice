/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import NavBar from "../components/navBar"
import '../styles/weekly.css'

const Weekly = () =>{

    const [movies,setMovies]= useState([])

    let moment = require('moment');
    const TODAY = moment().format("YYYY-MM-DD")
    const LAST_WEEK = moment().subtract(7, 'd').format("YYYY-MM-DD")

    const fetchMoviesWeek = async () => {
        const response = await fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=fe35d13ec177e4465861d822f792c0a9`)
        const data = await response.json()
        setMovies(data.results)
      }

    useEffect(()=>{
        fetchMoviesWeek()
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
        <section className="weekly">
        <h1>Weekly</h1>
        <section className="moviesWeekly">
        {movies.map((movie)=>{
            return <article className="weeklyArticle">
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
                <h2>{movie.title}</h2>
                <button onClick={()=>handleAddClick(movie.id)}>Add to favorite</button>
            </article>
        })}
        </section>
        </section>
        </>
    )
}

export default Weekly