/* eslint-disable react-hooks/exhaustive-deps */

import { useState, useEffect } from "react";
import '../styles/weekly.css'
import CardPres from "../components/cardpres";

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

    return(
        <>
        <section className="weekly">
        <h1>Weekly</h1>
        <section className="moviesWeekly">
        {movies.map((movie)=>{
            return  <CardPres movie={movie} />
        })}
        </section>
        </section>
        </>
    )
}

export default Weekly