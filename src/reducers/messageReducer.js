import * as types from '../constants/actionTypes';
const initialState = {
  networkMessage: '',
}

const messageReducer = (state = initialState, action) => {
  const { type, message } = action;

  switch (type) {
    case types.SERVER_ERROR:
      return {
        ...state,
        networkMessage: message ,
      };
    default:
      return state;
  }
} 

export default messageReducer;
