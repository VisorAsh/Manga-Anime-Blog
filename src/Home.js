import BlogList from './BlogList';
import './Home.css'
import Recup from './Recup';

function Home() {

    const {data: blogs, isLoading, error} = Recup("http://localhost:8000/blogs");
    
    return (
            <div className="home">
                { error && <div className='err-message'>Désolé une erreur est survenue</div>}
                { isLoading && <div>Chargement</div>}
                { blogs && <BlogList blogs={blogs} title={'Tous nos mangas'}/>}
            </div>
    )
}

export default Home;