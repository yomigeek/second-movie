import fetchData from '../utilities/fetchData';
import * as types from '../constants/actionTypes';


const getAllMovies = () => async (dispatch) => {
  dispatch({ type: types.IS_LOADING });
  try {
    const response = await fetchData({
      apiUrl: '/schedule',
    });
    console.log(response, 'in action');
 
    // if(response) {
    //   console.log(response, 'in action');
    //   dispatch({ 
    //     type: types.GET_ALL_MOVIES_SUCCESS, 
    //     payload: response
    //   });
    // }

  }
  catch (err) {
    console.log(err);
  }
  return null;
};

export { getAllMovies } ;
