import React from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { Actions } from '../Redux';
import { Button } from '.';

const { OnCancel, OnOk, addNewNote, changeNoteText } = Actions;

const CutstomModal = styled(Modal)``;
const Input = styled.input`
  background-color: transparent;
  height: 50px;
  width: 90%;
  padding: 4px 10px;
  font-size: 16px;
  border: 1px solid #eeeeee;
`;

const MyModal = ({ uid }) => {
  const history = useHistory();
  const { note, modal } = useSelector((state) => state);
  const loading = get(note, 'loading');
  const visible = get(modal, 'visible');
  const noteText = get(modal, 'text');

  const dispatch = useDispatch();

  const updateData = async (text) => {
    const dataTobeSend = { uid, text };
    await dispatch(addNewNote(dataTobeSend));
    history.push('/');
  };

  const disableSaveBtn = !noteText.length;

  return (
    <div>
      <CutstomModal
        title="Add Short Note"
        visible={visible}
        onCancel={() => dispatch(OnCancel())}
        onOk={() => dispatch(OnOk())}
        footer={[
          <Button shape="round" key="back" onClick={() => dispatch(OnCancel())}>
            Return
          </Button>,
          <Button
            shape="round"
            key="submit"
            type="primary"
            loading={loading}
            disabled={disableSaveBtn}
            onClick={() => dispatch(OnOk(updateData(noteText)))}>
            Save
          </Button>,
        ]}>
        <Input
          onChange={(e) => dispatch(changeNoteText(e.target.value))}
          value={noteText}
        />
      </CutstomModal>
    </div>
  );
};

export default MyModal;

MyModal.propTypes = {
  uid: PropTypes.string.isRequired,
};
