import * as actionTypes from '../Types';

const initialState = {
  pageLoading: false,
  searchText: '',
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_REFRESH_PAGE:
      return {
        ...state,
        pageLoading: true,
      };
    case actionTypes.STOP_REFRESH_PAGE:
      return {
        ...state,
        pageLoading: false,
      };
    case actionTypes.SEARCH_NOTE:
      return {
        ...state,
        searchText: action.val,
      };
    default:
      return state;
  }
};
export default homeReducer;
