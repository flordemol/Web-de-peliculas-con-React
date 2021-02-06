import { useReducer, useEffect } from "react";
import { BASE_URL, key } from "../constants/index";
import movieReducer, {initialState} from './../reducers/movie';
import { FETCH_SUCCESS, FETCH_ERROR } from './../reducers/actions/movie';

export const useMovie = (id) => {
    const [state, dispatch] = useReducer(movieReducer, initialState);

    const getMovieInformation = async () => {
        try {
            const data = await fetch(`${BASE_URL}/movie/${id}?${key}&language=es-ES`);
            const movie = await data.json();
            dispatch({ type: FETCH_SUCCESS, payload: {movie}})
        } catch (e) {
            console.log(e);
            dispatch({ type: FETCH_ERROR})
        }
    }

    useEffect(() => {
        if(id) getMovieInformation();
    }, []);

    return [state];
}
