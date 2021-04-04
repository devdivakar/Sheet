import { FETCH_QUESTION_SET } from '../constants/actionTypes';

  export default (state = {},action) => {
    switch (action.type) {
      case FETCH_QUESTION_SET:
        return {
          ...state,
          questionset: action.payload,
          isFetching: false
        }
      default:
        return state;
    }
  };
  
  