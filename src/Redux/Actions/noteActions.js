import * as ActionTypes from '../Types';
import firebase from '../../firebase';

const userRef = firebase.firestore().collection('users');

export const addNewNote = ({ uid, text }) => async (dispatch) => {
  try {
    const note = await firebase
      .firestore()
      .collection('users')
      .doc(uid)
      .collection('notes')
      .add({
        text,
        date: new Date(),
        theme: {
          backgroundColor: '#8bcdcd',
          textColor: '#fff',
        },
        actions: {
          archived: false,
          trash: false,
        },
      });

    // * Adding note id in the document

    note.update({
      id: note.id,
    });

    dispatch({ type: ActionTypes.ONOK });
    dispatch({ type: ActionTypes.CHANGE_NOTE_TEXT, text: '' });
    dispatch({ type: ActionTypes.ADD_NOTE, msg: 'Note Added!' });
  } catch (error) {
    dispatch({ type: ActionTypes.ADD_NOTE_ERR, err: error.message });
  }
};

export const deleteNote = (note, uid) => async (dispatch) => {
  dispatch({ type: ActionTypes.START_REFRESH_PAGE });
  try {
    await userRef.doc(uid).collection('notes').doc(note.id).delete();
    dispatch({
      type: ActionTypes.DELETE_NOTE,
      msg: `Note Deleted: ${note.text.substring(0, 25)}...`,
    });
  } catch (error) {
    dispatch({ type: ActionTypes.DELETE_NOTE_ERR, err: error.message });
  } finally {
    dispatch({ type: ActionTypes.STOP_REFRESH_PAGE });
  }
};

export const addToArchive = (note, uid) => async (dispatch) => {
  try {
    await userRef
      .doc(uid)
      .collection('notes')
      .doc(note.id)
      .update({
        ...note,
        date: new Date(),
        actions: {
          ...note.actions,
          archived: true,
        },
      });
    dispatch({
      type: ActionTypes.ADD_TO_ARCHIVE,
      msg: `Added to Archive: ${note.text.substring(0, 25)}...`,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.ADD_TO_ARCHIVE_ERR,
      err: error.message,
    });
  }
};

export const addToTrash = (note, uid) => async (dispatch) => {
  try {
    userRef
      .doc(uid)
      .collection('notes')
      .doc(note.id)
      .update({
        ...note,
        date: new Date(),
        actions: {
          archived: false,
          trash: true,
        },
      });
    dispatch({
      type: ActionTypes.ADD_TO_TRASH,
      msg: 'note added to trash bin',
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.ADD_TO_TRASH_ERR,
      err: error.err,
    });
  }
};

export const removeFromArchive = (note, uid) => async (dispatch) => {
  try {
    userRef
      .doc(uid)
      .collection('notes')
      .doc(note.id)
      .update({
        ...note,
        date: new Date(),
        actions: {
          ...note.actions,
          archived: false,
        },
      });
    dispatch({
      type: ActionTypes.REMOVE_FROM_ARCHIVE,
      msg: `Removed from Archive: ${note.text.substring(0, 25)}...`,
    });
  } catch (error) {
    dispatch({ type: ActionTypes.REMOVE_FROM_ARCHIVE_ERR, err: error.message });
  }
};

export const changeText = (val) => async (dispatch) => {
  await dispatch({ type: ActionTypes.CHANGE_TEXT, text: val });
};

export const changeCardTheme = (
  note,
  uid,
  { color, name, textColor },
) => async (dispatch) => {
  dispatch({
    type: ActionTypes.CHANGE_BACKGROUNDCOLOR_CARD,
    msg: `card background changed to ${name} color`,
  });
  try {
    await userRef
      .doc(uid)
      .collection('notes')
      .doc(note.id)
      .update({
        ...note,
        date: new Date(),
        theme: {
          textColor,
          backgroundColor: color,
        },
      });
  } catch (error) {
    dispatch({
      type: ActionTypes.CHANGE_THEMECOLOR_CARD_ERR,
      err: error.message,
    });
  }
};

export const recoverNote = (note, uid) => async (dispatch) => {
  dispatch({
    type: ActionTypes.RECOVER_NOTE,
    msg: `${note.text.substring(0, 4)}... Recovered`,
  });
  try {
    await userRef
      .doc(uid)
      .collection('notes')
      .doc(note.id)
      .update({
        ...note,
        date: new Date(),
        actions: {
          archived: false,
          trash: false,
        },
      });
  } catch (error) {
    dispatch({
      type: ActionTypes.RECOVER_NOTE_ERR,
      err: error.message,
    });
  }
};

export const startLoadingCard = () => (dispatch) => {
  dispatch({ type: ActionTypes.START_LOADER });
};
export const stopLoadingCard = () => (dispatch) => {
  dispatch({ type: ActionTypes.STOP_LOADER });
};
