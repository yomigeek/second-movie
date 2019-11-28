import API from '../utilities/api';
import * as types from '../constants/actionTypes';
import * as status from '../constants/statusCodes';
import { SERVER_ERROR_MESSAGE } from '../constants/messages';


const getAllMovies = () => async (dispatch) => {
  dispatch({ type: types.IS_LOADING });
  try {
    const response = await API.get(`/schedule`)
    .then(res => {
      return res;
    });    
 
    if(response.status === status.STATUS_OK) {
      dispatch({ 
        type: types.GET_ALL_MOVIES_SUCCESS, 
        payload: response.data
      });
      dispatch({ type: types.IS_COMPLETE });

    }
  }
  catch (err) {
    dispatch({ type: types.IS_COMPLETE });
    dispatch({ type: types.SERVER_ERROR, message: SERVER_ERROR_MESSAGE  });
  }
};

const getSingleMovie = (movieId) => async (dispatch) => {
  dispatch({ type: types.IS_LOADING });
  try {
    const response = await API.get(`/shows/${movieId}`)
    .then(res => {
      return res;
    });  
    const responseCast = await API.get(`/shows/${movieId}/cast`)
    .then(res => {
      return res;
    });  

    if(response.status === status.STATUS_OK) {
      dispatch({ 
        type: types.GET_SINGLE_MOVIE_SUCCESS, 
        payload: response.data,
        castPayload: responseCast.data
      });
      dispatch({ type: types.IS_COMPLETE });

    }
  }
  catch (err) {
    dispatch({ type: types.IS_COMPLETE });
    dispatch({ type: types.SERVER_ERROR, message: SERVER_ERROR_MESSAGE  });
  }
};

const searchMovie = (query) => async (dispatch) => {
  dispatch({ type: types.IS_LOADING });
  try {
    const response = await API.get(`/search/shows?q=${query}`)
    .then(res => {
      return res;
    });  

    if(response.status === status.STATUS_OK) {
      dispatch({ 
        type: types.SEARCH_MOVIE_SUCCESS, 
        payload: response.data,
      });
      dispatch({ type: types.IS_COMPLETE });

    }
  }
  catch (err) {
    dispatch({ type: types.IS_COMPLETE });
    dispatch({ type: types.SERVER_ERROR, message: SERVER_ERROR_MESSAGE  });
  }
};




export { getAllMovies, getSingleMovie, searchMovie } ;
