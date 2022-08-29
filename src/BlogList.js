
function BlogList({blogs, title, HandleDelete}) {


    return (
        <div className="bloglist">
            <h2>{title}</h2>
            {
                blogs.map((blog) => (
                    <div className="blog" key={blog.id}>
                        <a href="" className="blog-titre">{blog.title}</a>
                        <small className="blog-publication-date">Publié le {blog.date}</small>
                        <p className='blog-author'>Auteur de l'oeuvre: {blog.author}</p>
                        <button onClick={() => HandleDelete(blog.id)}>Supprimer cet article</button>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogList