
const Card = (props) =>{
    console.log(props.movies);
   return <>
   { props.movies.map((movie)=>{
        return <article key={movie.title}>
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
        <h2>{movie.title}</h2>
        <p>release : {movie.release_date}</p>
        <h3>About</h3>
        <p>{movie.overview}</p>
        </article>
    })}
   </>
}

export default Card