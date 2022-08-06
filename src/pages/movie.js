
/* eslint-disable react-hooks/exhaustive-deps */


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/card";
import '../styles/Detail.css'

const Movie = ()=>{

    const param=useParams()
    const apiKey = "fe35d13ec177e4465861d822f792c0a9"
    const [movieDetail, setMoviesDetail] = useState([])

    useEffect(()=>{
        fetchMoviesDetail()
    },[])

    const fetchMoviesDetail = async () => {
        const responseMoviesDetail = await fetch(`https://api.themoviedb.org/3/movie/${param.id}?api_key=${apiKey}&language=en-US`)
        const dataMoviesDetail = await responseMoviesDetail.json()
        setMoviesDetail(dataMoviesDetail)
    }

    return(
        <section className="Detail">
            <h1>Movie détails</h1>
            <Card movie={movieDetail} key={movieDetail.title}/>
        </section>
    )
}

export default Movie