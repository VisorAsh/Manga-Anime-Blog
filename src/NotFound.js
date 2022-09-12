import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Désolé</h2>
            <p>La page que vous essayer d'accéder n'existe pas</p>
            <Link to='/'>Retourner à la page d'acceuil</Link>
        </div>
     );
}

export default NotFound;