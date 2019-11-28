import * as types from '../constants/actionTypes';
const initialState = {
  allMovies: [],
}

const movieListReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_ALL_MOVIES_SUCCESS:
      return {
        ...state,
        allMovies: payload,
      };
    default:
      return state;
  }
} 

export default movieListReducer;
