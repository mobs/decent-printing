import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  CREATE,
  FETCH_BY_CATEGORY,
} from "../constants/actionTypes";


export default (state = { isLoading: true, products: []}, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_BY_CATEGORY: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case CREATE:
      return {
        ...state,
        products: action.payload,
      };
    case "UPDATE":
      return {
        ...state,
        products: action.payload
      }
    default:
      return state;
  }
};
