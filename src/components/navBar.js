
import { Link } from "react-router-dom"
import '../styles/nav.css'

const NavBar = () =>{
    return(
        <nav>
            <Link to={`/`}>home</Link>
            <Link to={`/weekly`} className='mleft'>Weekly</Link>
            <Link to={`/popular`} className='mleft'>Popular</Link>
            <Link to={`/favorites`} className='mleft'>Favorites</Link>
        </nav>
    )
}
export default NavBar