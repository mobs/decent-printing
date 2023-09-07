export default (
  state = { isLoading: true, banners: [] },
  action
) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case 'GET_ALL':
      return {
        ...state,
        banners: action.payload,
      };
    case 'CREATE_NEW':
      return {
        ...state,
        banners: action.payload,
      };
    default:
      return state;
  }
};
