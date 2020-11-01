import * as ActionTypes from '../Types';

export const ShowModal = () => (dispatch) => {
  dispatch({ type: ActionTypes.SHOWMODAL });
};
export const OnOk = () => (dispatch) => {
  dispatch({ type: ActionTypes.ONOK });
};
export const OnCancel = () => (dispatch) => {
  dispatch({ type: ActionTypes.ONCANCEL });
};

export const changeNoteText = (text) => (dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_NOTE_TEXT, text });
};
