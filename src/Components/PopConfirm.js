/* eslint-disable operator-linebreak */
import React from 'react';
import { Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Actions } from '../Redux';

const { addToTrash, deleteNote } = Actions;

const PopConfirm = ({ data, children }) => {
  const { pathname } = useLocation();

  const { uid } = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();
  const confirmForTrash = () => {
    dispatch(addToTrash(data, uid));
  };
  const confirmForDelete = () => {
    dispatch(deleteNote(data, uid));
  };

  const onTrashPage = pathname === '/trash';

  const deleteActionsHandler = onTrashPage ? confirmForDelete : confirmForTrash;
  const deleteTitleHandler = onTrashPage
    ? 'You cannot undo this!'
    : 'Are you sure you want to delete this note?';
  const deleteOKText = onTrashPage ? 'I know that' : 'ok';
  const deleteCancelText = onTrashPage ? 'cancel' : 'cancel';

  return (
    <Popconfirm
      placement="bottom"
      title={deleteTitleHandler}
      onConfirm={deleteActionsHandler}
      okText={deleteOKText}
      cancelText={deleteCancelText}>
      {children}
    </Popconfirm>
  );
};

export default PopConfirm;

PopConfirm.propTypes = {
  data: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired,
};
