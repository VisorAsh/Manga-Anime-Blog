import { useParams } from "react-router-dom";
import Recup from "./Recup";
import { useHistory } from "react-router-dom";

const BlogDetail = () => {

    const { id } = useParams();
    const { data: blog, isLoading, error} = Recup('http://localhost:8000/blogs/'+id);
    const history = useHistory();

    const HandleDelete = () => {
        fetch('http://localhost:8000/blogs/'+id, {
            method: 'DELETE'
        }).then( () => {
            console.log('Article supprimé');
            history.push('/')
        }) 
    }

    return ( 
        <div className="">
            { isLoading && <div>Chargement du contenu</div>}
            { error && <div>{error}</div>}
            { blog && (
                <div className="">
                    <h1 className="blog-titre">{blog.title}</h1>
                    <small className="blog-publication-date">{`Publier le ${blog.date}`}</small>
                    <p className="blog-entré">{blog.entré}</p>
                    <p className="blog-body">{blog.body}</p>
                    <p className="blog-author">{`Auteur de l'oeuvre: ${blog.author}`}</p>
                    <button onClick={ HandleDelete } className="btn-danger">Supprimer de la liste</button>
                </div>
            )}
        </div>
     );
}

export default BlogDetail;