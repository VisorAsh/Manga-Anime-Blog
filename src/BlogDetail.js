import { useParams } from "react-router-dom";
import Recup from "./Recup";

const BlogDetail = () => {

    const { id } = useParams();
    const { data: blog, isLoading, error} = Recup('http://localhost:8000/blogs/'+id);

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
                </div>
            )}
        </div>
     );
}

export default BlogDetail;