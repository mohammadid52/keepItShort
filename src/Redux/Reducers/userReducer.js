import * as actionTypes from '../Types';

const initialState = {
  imageUrl: null,
  progress: 0,
  errorOnProgress: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_PHOTO_ERR:
      return {
        ...state,
        err: action.err,
      };
    case actionTypes.CHANGE_PROGRESS:
      return {
        ...state,
        errorOnProgress: false,
        progress: action.progress,
        err: action.err,
      };
    case actionTypes.CHANGE_PROGRESS_ERR:
      return {
        ...state,
        errorOnProgress: true,
      };
    case actionTypes.SET_IMAGE_URL:
      return {
        ...state,
        imageUrl: action.imageUrl,
      };
    default:
      return state;
  }
};

export default userReducer;
