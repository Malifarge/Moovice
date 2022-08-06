


import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import '../styles/Review.css'

const Review = () =>{
    const param = useParams()
    const apiKey = "fe35d13ec177e4465861d822f792c0a9"
    const [movieReviews, setMoviesReviews] = useState([])

    useEffect(()=>{
        fetchMoviesReviews()
    },[])

    useEffect(()=>{
        console.log(movieReviews[0]);
    },[movieReviews])

    const fetchMoviesReviews = async () => {
        const responseMoviesReviews = await fetch(`https://api.themoviedb.org/3/movie/${param.id}/reviews?api_key=${apiKey}&language=en-US&page=1`)
        const dataMoviesReviews = await responseMoviesReviews.json()
        setMoviesReviews(dataMoviesReviews.results)
    }
    
    return (
        <section>
            <h1>Reviews</h1>
             {movieReviews.map((movie)=>{
                return  <article key={movie.author} className="ArticleReview">
                    <img src={`https://image.tmdb.org/t/p/w300/${movie.author_details.avatar_path}`} alt={movie.author} className="Avatar" />
                    <div>
                        <h2>{movie.author}</h2>
                        <p>{movie.content}</p>
                        <p>Create : {movie.created_at}</p>
                        <p>Update : {movie.updated_at}</p>
                    </div>
                </article>
             })}

        </section>

    )
}

export default Review