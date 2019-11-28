  
import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import movieListReducer from './movieListReducer';
import messageReducer from './messageReducer';


const rootReducer = combineReducers({
  movies: movieListReducer,
  loader: loaderReducer,
  messages: messageReducer
});

export default rootReducer;
