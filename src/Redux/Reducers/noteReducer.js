import { message } from 'antd';
import * as ActionTypes from '../Types';

const initialState = {
  loading: false,
  text: '',
};
const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_NOTE:
      message.success(action.msg, 2);
      return state;
    case ActionTypes.ADD_NOTE_ERR:
      message.error(action.err, 10);
      return state;
    case ActionTypes.START_LOADER:
      return { ...state, loading: true };
    case ActionTypes.STOP_LOADER:
      return { ...state, loading: false };
    case ActionTypes.DELETE_NOTE:
      message.success(action.msg, 2);
      return state;
    case ActionTypes.DELETE_NOTE_ERR:
      message.error(action.err, 10);
      return state;
    case ActionTypes.CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ActionTypes.ADD_TO_ARCHIVE:
      message.success(action.msg, 2);
      return state;
    case ActionTypes.ADD_TO_ARCHIVE_ERR:
      message.err(action.err, 2);
      return state;
    case ActionTypes.REMOVE_FROM_ARCHIVE:
      message.success(action.msg, 2);
      return state;
    case ActionTypes.REMOVE_FROM_ARCHIVE_ERR:
      message.success(action.err, 2);
      return state;
    case ActionTypes.ADD_TO_TRASH:
      message.warn(action.msg, 2);
      return state;
    case ActionTypes.CHANGE_BACKGROUNDCOLOR_CARD:
      message.success(action.msg, 1);
      return state;
    case ActionTypes.CHANGE_THEMECOLOR_CARD_ERR:
      message.error(action.err, 2);
      return state;
    case ActionTypes.RECOVER_NOTE:
      message.success(action.msg, 2);
      return state;
    case ActionTypes.RECOVER_NOTE_ERR:
      message.error(action.err, 2);
      return state;
    case ActionTypes.CLEAR_NOTE_DATA_FROM_STATE:
      return {
        ...state,
        note: action.note,
      };

    default:
      return state;
  }
};

export default noteReducer;
