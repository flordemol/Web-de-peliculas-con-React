import { useState, useEffect, useContext } from "react";
import { SearchContext } from "./../context/Search";
import { BASE_URL, key } from "./../constants/index";

export const useFetch = (categoria) => {
    const [data, setData] = useState([]);
    const [fetching, setFetching] = useState(true);
    const [error, setError] = useState(false);

    const { search } = useContext(SearchContext);

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
                case "cienciaFiccion":
                    result = await fetch(`${BASE_URL}/discover/movie?${key}&language=es-ES&sort_by=popularity.desc&with_genres=878`);
                    break; 
                case "fantasia":
                    result = await fetch(`${BASE_URL}/discover/movie?${key}&language=es-ES&sort_by=popularity.desc&with_genres=14`);
                    break;  
                case "familiar":
                    result = await fetch(`${BASE_URL}/discover/movie?${key}&language=es-ES&sort_by=popularity.desc&with_genres=10751`);
                    break;  
                case "search":
                    result = await fetch(`${BASE_URL}/search/movie?${key}&language=es-ES&&query=${search}&include_adult=false`);
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
    }, [search]);

    return [data, fetching, error];
}