import './Add.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Add = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory();

    const HandleBlogAdding = (e) => {
        e.preventDefault();

        const tmp_date = new Date().toISOString().split('T');
        const date = `${tmp_date[0]} ${tmp_date[1]}`;
        const entré = "Synopsis";
        const blog = {title, entré, body, author, date };
        setIsLoading(true);
        
        fetch('http://localhost:8000/blogs/',
        {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }
        ).then( ()=> {
            console.log('Nouveau manga');
            setIsLoading(false);
            history.push('/');
        })
    }

    return (
        <div className="create-blog">
            <form onSubmit={ HandleBlogAdding } className="form">
                <div className="form-group">
                    <label htmlFor="title">Nom du manga</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={ (e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Auteur de l'oeuvre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        value={author}
                        onChange={ (e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Synopsis</label>
                    <textarea
                        required
                        value={body}
                        onChange={ (e) => setBody(e.target.value)}
                        className="form control textarea"
                        id="body"
                        rows={10}></textarea>
                </div>
                <div className="form-group">
                    { !isLoading && <button type="submit" className="btn-create">Ajouter à la liste</button> }
                    { isLoading && <button type="submit" className="btn-create" disabled>Ajout en cours</button> }
                </div>
            </form>
        </div>
    );
}

export default Add;