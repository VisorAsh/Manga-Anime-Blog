import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import './Home.css'

function Home() {

    const [blogs, setBlog] = useState([{
            id: 1,
            title: "Kingdom",
            body: "Dans cette Chine ancestrale, Shin est originaire de l'État de Qin en proie à de nombreux soubresauts aussi bien à l'intérieur du royaume, qu'à l'extérieur. En effet, l'histoire se déroule durant la période des Royaumes combattants, quand la Chine était divisée entre sept royaumes : Qin, Zhao, Han, Wei, Chu, Yan et Qi.Dans cette Chine ancestrale, Shin est originaire de l'État de Qin en proie à de nombreux soubresauts aussi bien à l'intérieur du royaume, qu'à l'extérieur. En effet, l'histoire se déroule durant la période des Royaumes combattants, quand la Chine était divisée entre sept royaumes : Qin, Zhao, Han, Wei, Chu, Yan et Qi.",
            author: "Yasuhisa Hara",
            date: "29 Aoùt 2022",
        },
        {
            id: 2,
            title: "Kimetsu no yaiba",
            body: "Un petit marchand de charbon nommé Tanjiro vit une vie sans histoire dans les montagnes. Jusqu’au jour tragique où, après une courte absence, il retrouve son village et sa famille massacrés par un ogre ! La seule survivante de cette tragédie est sa jeune sœur Nezuko. Hélas, au contact de la bête, celle-ci s’est à son tour métamorphosée en monstre. Afin de renverser le processus et de venger sa famille, Tanjiro décide de partir en quête de vérité. Pour le jeune héros et sa sœur, c’est une longue aventure de sang et d’acier qui commence !",
            author: "Koyoharu Gotoge",
            date: "29 Aoùt 2022",
        },
        {
            id: 3,
            title: "Jujutsu Kaisen",
            body: "Yuji Itadori, un lycéen, se retrouve confronté aux forces occultes et est enrôlé dans une école d'exorcisme le jour où il se voit possédé par le démon millénaire Ryomen Sukuna",
            author: "Gege Akutami",
            date: "30 Aoùt 2022",
        },
    ]);

    const HandleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlog(newBlogs)
    }

    return (
            <div className="home">
                <BlogList 
                    blogs={blogs} 
                    title={'Tous nos mangas'}
                    HandleDelete={HandleDelete}
                />
            </div>
    )
}

export default Home;