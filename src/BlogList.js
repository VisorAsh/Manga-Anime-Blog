import { Link } from "react-router-dom";

function BlogList({blogs, title}) {


    return (
        <div className="bloglist">
            <h2>{title}</h2>
            {
                blogs.map((blog) => (
                    <div className="blog" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`} className="blog-titre">{blog.title}</Link>
                        <small className="blog-publication-date">Publié le {blog.date}</small>
                        <p className='blog-author'>Auteur de l'oeuvre: {blog.author}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogList;