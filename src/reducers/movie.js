import { FETCHING, FETCH_SUCCESS, FETCH_ERROR } from './actions/movie';

export const initialState = {
    fetching : true,
    movie : {},
    error : false
}

export default function movieReducer(state=initialState, action){
    switch (action.type) {
        case FETCHING:
            return initialState;
        case FETCH_SUCCESS:
            return {
                fetching : false,
                movie : action.payload.movie,
                error : false
            }
        case FETCH_ERROR:
            return {
                fetching : false,
                movie : {},
                error : true
            }
        default:
            return state;
    }
}