import { message } from 'antd';
import * as actionTypes from '../Types';

const initialState = {
  pageLoading: false,
  searchText: '',
  visibleUserCard: false,
  darkMode: false,
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
    case actionTypes.SHOW_USERCARD:
      return {
        ...state,
        visibleUserCard: true,
      };
    case actionTypes.HIDE_USERCARD:
      return {
        ...state,
        visibleUserCard: false,
      };
    case actionTypes.ENABLE_DARKMODE:
      message.success(action.msg, 2);
      message.warn('This is experimental feature!', 2);

      return {
        ...state,
        darkMode: true,
      };
    case actionTypes.DISABLE_DARKMODE:
      message.success(action.msg, 2);
      return {
        ...state,
        darkMode: false,
      };
    default:
      return state;
  }
};
export default homeReducer;
