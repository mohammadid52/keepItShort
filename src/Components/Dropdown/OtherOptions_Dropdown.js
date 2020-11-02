/* eslint-disable no-nested-ternary */
import React from 'react';
import { Menu, Dropdown } from 'antd';
import { AiOutlineSave } from 'react-icons/ai';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Text } from '..';
import { Actions } from '../../Redux';

const { addToArchive, removeFromArchive, recoverNote } = Actions;

const ArchiveIcon = styled(AiOutlineSave)`
  font-size: 14px;
  margin-right: 5px;
`;

const ArchiveText = styled(Text)`
  font-size: 12px !important;
  color: #333 !important;
  font-weight: 400 !important;
`;

const ItemContainer = styled(Menu.Item)`
  display: flex;
  justify-content: center;
`;

const MyDropdown = ({ data, children }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { uid } = useSelector((state) => state.firebase.auth);

  const onTrashPage = pathname === '/trash';
  const onHomePage = pathname === '/';

  const archiveActionText = onHomePage
    ? 'Add to archive'
    : onTrashPage
    ? 'Recover'
    : 'Remove to archive';

  const addToArchiveBtn = () => {
    dispatch(addToArchive(data, uid));
  };
  const removeFromArchiveBtn = () => {
    dispatch(removeFromArchive(data, uid));
  };

  const recoverNoteBtn = () => {
    dispatch(recoverNote(data, uid));
  };

  const actionHandler = onHomePage
    ? addToArchiveBtn
    : onTrashPage
    ? recoverNoteBtn
    : removeFromArchiveBtn;

  const menu = (
    <Menu style={{ borderRadius: 10 }}>
      <ItemContainer onClick={actionHandler}>
        <ArchiveIcon />
        <ArchiveText>{archiveActionText}</ArchiveText>
      </ItemContainer>
    </Menu>
  );

  return <Dropdown overlay={menu}>{children}</Dropdown>;
};

export default MyDropdown;

MyDropdown.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};
