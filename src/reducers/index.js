  
import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import movieListReducer from './movieListReducer';


const rootReducer = combineReducers({
  movies: movieListReducer,
  loader: loaderReducer,
});

export default rootReducer;
