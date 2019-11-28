import * as types from '../constants/actionTypes';
const initialState = {
  appMessage: '',
}

const messageReducer = (state = initialState, action) => {
  const { type, message } = action;

  switch (type) {
    case types.SERVER_ERROR:
      return {
        ...state,
        appMessage: message ,
      };
    default:
      return state;
  }
} 

export default messageReducer;
