

const Card = (props) =>{


    const handleAddClick = (ID) =>{

        let Ids
    
        if (localStorage.favoriteIds){
            const localStorageIds= localStorage.getItem("favoriteIds")
       Ids = JSON.parse(localStorageIds)
        }else{
           Ids=[]
        }
        const newId= Ids.find((id)=>{
            return id === ID
        })
        if(!newId){
            Ids.push(ID)
        }
        const stringifiedIds = JSON.stringify(Ids)
        localStorage.setItem('favoriteIds', stringifiedIds)
    }

   return <>
   { props.movies.map((movie)=>{
        // console.log(movie.id);
        return <article key={movie.title}>
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>
        <h2>{movie.title}</h2>
        <p>release : {movie.release_date}</p>
        <h3>About</h3>
        <p>{movie.overview}</p>

        <button onClick={()=>handleAddClick(movie.id)}>Add to favorite</button>
        </article>
    })}
   </>
}

export default Card