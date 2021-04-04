import { UPDATE_COMPLETION } from '../constants/actionTypes';
  
  export default (state = {}, action) => {
    switch (action.type) {
      case UPDATE_COMPLETION:
        return {
          completion: action.payload
        };
      default:
        return state;
    }
  };
  
  