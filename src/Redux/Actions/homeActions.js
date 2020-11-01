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

export const loadArchiveData = (notes) => {
  if (!notes) {
    return [];
  }
  const data = filter(
    notes,
    (note) => note?.actions.archived && !note?.actions.trash,
  );
  return data;
};

export const loadTrashData = (notes) => {
  const data = filter(
    notes,
    (note) => !note?.actions.archived && note?.actions.trash,
  );
  return data;
};

export const loadHomeData = (notes) => {
  const data = filter(
    notes,
    (note) => !note?.actions.archived && !note?.actions.trash,
  );
  return data;
};
export const loadSearchedData = (notes, searchValue) => {
  const data = filter(
    notes,
    (note) => note.text.toLowerCase().indexOf(searchValue) > -1,
  );
  return data;
};

export const changeSearchText = (val) => (dispatch) => {
  dispatch({ type: actionTypes.SEARCH_NOTE, val });
};
