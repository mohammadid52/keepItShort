/* eslint-disable no-unused-vars */
import { message } from 'antd';
import { filter } from 'lodash';
import * as actionTypes from '../Types';

const key = 'updatable';

export const refreshPage = (msgDuration, loadingTime) => (dispatch) => {
  dispatch({ type: actionTypes.START_REFRESH_PAGE });
  dispatch({ type: actionTypes.START_LOADER });

  message.loading({ content: 'Refreshing...', key });
  setTimeout(() => {
    message.success({ content: 'Loaded!', key, duration: msgDuration });
    dispatch({ type: actionTypes.STOP_REFRESH_PAGE });
    dispatch({ type: actionTypes.STOP_LOADER });
  }, loadingTime);
};

export const loadArchiveData = (notes) => (dispatch) => {
  if (!notes) {
    return [];
  }
  const data = filter(
    notes,
    (note) => note?.actions.archived && !note?.actions.trash,
  );
  return data;
};

export const loadTrashData = (notes) => (dispatch) => {
  const data = filter(
    notes,
    (note) => !note?.actions.archived && note?.actions.trash,
  );
  return data;
};

export const loadHomeData = (notes = []) => (dispatch) => {
  const data = filter(
    notes,
    (note) => !note?.actions.archived && !note?.actions.trash,
  );
  return data;
};
export const loadSearchedData = (notes = [], searchValue) => (dispatch) => {
  const data = filter(
    notes,
    (note) => note.text.toLowerCase().indexOf(searchValue) > -1,
  );
  return data;
};

export const changeSearchText = (val) => (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_NOTE, val });
};

export const showUserCard = () => (dispatch) => {
  dispatch({ type: actionTypes.SHOW_USERCARD });
};
export const hideUserCard = () => (dispatch) => {
  dispatch({ type: actionTypes.HIDE_USERCARD });
};

export const enableDarkMode = () => (dispatch) => {
  dispatch({ type: actionTypes.ENABLE_DARKMODE, msg: 'Dark Mode Enabled' });
};
export const disableDarkMode = () => (dispatch) => {
  dispatch({ type: actionTypes.DISABLE_DARKMODE, msg: 'Light Mode Enabled' });
};
