import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
        <div>
            <a href="" className="logo">Manga/Anime Blog</a>
        </div>

        <ul className="liens">
            <li>
                <a href="" className="lien">Acceuil</a>
            </li>
            <li>
                <a href="" className="lien buttonArticle">Ajouter un article</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;