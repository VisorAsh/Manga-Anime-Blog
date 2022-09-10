import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
        <div>
            <Link to="/" className="logo">Manga/Anime Blog</Link>
        </div>

        <ul className="liens">
            <li>
                <Link to="/" className="lien">Acceuil</Link>
            </li>
            <li>
                <Link to="/add" className="lien buttonArticle">Ajouter un manga</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;