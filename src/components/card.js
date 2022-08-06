
import { Link } from "react-router-dom";

const Card = (props) =>{

    const {title,poster_path,id,release_date,overview} = props.movie

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

   return <><article>
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title}/>
        <div>
        <h2>{title}</h2>
        <p>release : {release_date}</p>
        <h3>About</h3>
        <p>{overview}</p>
        <div className="button">
            <Link to={`/Review/${id}`}><button>Reviews</button></Link>
            <button onClick={()=>handleAddClick(id)}>Add to favorite</button>
        </div>
        
        </div>
        </article>
   </>
}

export default Card