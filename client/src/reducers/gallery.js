import {
  START_LOADING,
  END_LOADING,
  FETCH_ALL,
  CREATE,
  FETCH_BY_CATEGORY,
} from "../constants/actionTypes";

export default (state = { isLoading: true, data: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case "FETCH_TOTAL":
      // console.log(action.payload);
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_BY_CATEGORY: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case CREATE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
