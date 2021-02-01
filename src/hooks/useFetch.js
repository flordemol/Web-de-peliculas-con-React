import { useState, useEffect } from "react";
import { BASE_URL, key } from "./../constants/index";

export const useFetch = (categoria) => {
    const [data, setData] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(false);

    const getMovies = async () => {
        let result = "";
        try {
            switch (categoria) {
                case "populares":
                    result = await fetch(`${BASE_URL}/movie/popular?${key}&language=es-ES`);
                    break;
                case "terror":
                    result = await fetch(`${BASE_URL}/discover/movie?${key}&language=es-ES&sort_by=popularity.desc&with_genres=27`);
                    break;
                default:
                    break;
            }
            const {results : data} = await result.json();
            setData(data);
            setFetching(false);
        } catch (e) {
            setError(true);
            setFetching(false);
            setData([]);
        }
    }

    useEffect(() => {
        getMovies();
    }, []);

    return [data, fetching, error];
}