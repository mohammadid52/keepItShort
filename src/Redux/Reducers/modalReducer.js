import * as ActionTypes from '../Types';

const initialState = {
  visible: false,
  text: '',
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOWMODAL:
      return {
        ...state,
        visible: true,
      };
    case ActionTypes.ONOK:
      return {
        ...state,
        visible: false,
      };
    case ActionTypes.ONCANCEL:
      return {
        ...state,
        visible: false,
      };
    case ActionTypes.CHANGE_NOTE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
};

export default modalReducer;
