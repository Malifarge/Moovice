
import { useEffect, useState } from "react"
import NavBar from "../components/navBar"
import Card from "../components/card"
import '../styles/popular.css'

const Popular = () =>{

    const [movies,setMovies] = useState([])

    const fetchMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fe35d13ec177e4465861d822f792c0a9`)
        const data = await response.json()
        setMovies(data.results)
      }

    useEffect(()=>{
    fetchMovies()
  },[]
  )


    return(
        <>
        <NavBar/>
        <section>
        <h1>Popular</h1>
        <Card movies={movies}/>
        </section>
        </>
    )
}

export default Popular