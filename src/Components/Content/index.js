import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from 'antd';
import { Actions } from '../../Redux';
import { Notes, AddNoteButton, Modal } from '..';

const { ShowModal } = Actions;
const { Content } = Layout;

const MainContent = () => {
  const { uid } = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();
  return (
    <Content
      style={{
        background: '#f6f6f6',
        paddingTop: '8%',
        paddingLeft: '3%',
        paddingRight: '2%',
      }}>
      <Notes uid={uid} />
      <AddNoteButton onClick={() => dispatch(ShowModal())} />
      <Modal uid={uid} />
    </Content>
  );
};

export default MainContent;
