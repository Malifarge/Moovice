
const CardPres = (props) =>{
    const {title,poster_path,id} = props.movie
    console.log(props.movie);

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
   return (<article className="weeklyArticle" key={title}>
                        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title}/>
                        <h3>{title}</h3>
                        <button onClick={()=>handleAddClick(id)}>Add to favorite</button>
                    </article>
    )
}

export default CardPres