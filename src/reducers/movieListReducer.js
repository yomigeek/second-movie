import * as types from '../constants/actionTypes';
const initialState = {
  allMovies: [],
  singleMovie: {},
  movieCast: [],
}

const movieListReducer = (state = initialState, action) => {
  const { type, payload, castPayload } = action;

  switch (type) {
    case types.GET_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        allMovies: payload,
      };
    case types.GET_SINGLE_MOVIE_SUCCESS:
      return {
        ...state,
        singleMovie: payload,
        movieCast: castPayload
      };
    default:
      return state;
  }
} 

export default movieListReducer;
