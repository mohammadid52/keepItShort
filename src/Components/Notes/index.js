/* eslint-disable no-nested-ternary */
import React from 'react';
import { Empty, Row } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { values, map } from 'lodash';
import { Note } from '..';
import { Actions } from '../../Redux';

const {
  loadHomeData,
  loadArchiveData,
  loadTrashData,
  loadSearchedData,
  startLoadingCard,
  stopLoadingCard,
} = Actions;

const Notes = ({ uid }) => {
  const notes = useSelector(({ firestore: { data } }) => data.notes);
  const { searchText } = useSelector((state) => state.home);

  useFirestoreConnect({
    collection: `users/${uid}/notes`,
    storeAs: 'notes',
    orderBy: ['date', 'desc'],
  });

  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const home = dispatch(loadHomeData(notes));
  const archived = dispatch(loadArchiveData(notes));
  const trash = dispatch(loadTrashData(notes));
  const searchedData = dispatch(
    loadSearchedData(notes, searchText.toLowerCase()),
  );

  const getData = (data, path) => {
    if (path === '/') {
      if (searchText.length) {
        return searchedData;
      }
      return home;
    }
    if (path === '/archived') {
      if (searchText.length) {
        return searchedData;
      }
      return archived;
    }
    if (path === '/trash') {
      if (searchText.length) {
        return searchedData;
      }
      return trash;
    }
    return home;
  };

  const data = getData(notes, pathname);

  if (!data) {
    dispatch(() => startLoadingCard());
  } else {
    dispatch(() => stopLoadingCard());
  }

  return (
    <>
      <Row gutter={[16, 24]}>
        {!data.length ? (
          <EmptyContainer>
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="No Notes. Click on the add button to add new note"
            />
          </EmptyContainer>
        ) : (
          map(values(data), (noteData) => (
            <Note key={noteData.id} data={noteData} />
          ))
        )}
      </Row>
    </>
  );
};

const EmptyContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
`;

export default Notes;

Notes.propTypes = {
  uid: PropTypes.string.isRequired,
};
