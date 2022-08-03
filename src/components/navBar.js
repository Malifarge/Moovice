
import { Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <nav>
            <Link to={`/`}>home</Link>
            <Link to={`/weekly`}>Weekly</Link>
            <Link to={`/popular`}>Popular</Link>
            <Link to={`/favorites`}>Favorites</Link>
        </nav>
    )
}
export default NavBar