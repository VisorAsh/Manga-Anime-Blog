import { useState, useEffect } from 'react';

const Recup = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((reponse) => {
                if (!reponse.ok) {
                    throw Error("Désolé une erreur est survenue")
                }
                return reponse.json();
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
                setIsLoading(false);
            })
    }, [url]);

    return { data, isLoading, error }
}

export default Recup;