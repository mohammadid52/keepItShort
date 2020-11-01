import React from 'react';
import { Menu, Divider } from 'antd';
import styled from 'styled-components';
import { FaRegStickyNote } from 'react-icons/fa';
import { BiArchiveIn } from 'react-icons/bi';
import { FiTrash } from 'react-icons/fi';
import { useHistory, useLocation } from 'react-router-dom';
import { Text } from '..';

const Sidebar = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const goToArchivedPage = () => {
    history.push('/archived');
  };
  const goToHomePage = () => {
    history.push('/');
  };
  const goToTrashPage = () => {
    history.push('/trash');
  };

  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={[pathname]}
      style={{ height: '100%' }}>
      <SideHeaderText>
        <Text level={3}>Short Notes!</Text>
        <Divider dashed />
      </SideHeaderText>
      <Menu.Item
        onClick={goToHomePage}
        key="/"
        icon={<FaRegStickyNote style={{ marginRight: 10 }} />}>
        All Notes
      </Menu.Item>
      <Menu.Item
        onClick={goToArchivedPage}
        key="/archived"
        icon={<BiArchiveIn style={{ marginRight: 10 }} />}>
        Archived
      </Menu.Item>
      <Menu.Item
        onClick={goToTrashPage}
        key="/trash"
        icon={<FiTrash style={{ marginRight: 10 }} />}>
        Trash
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;

const SideHeaderText = styled.div`
  text-align: center;
  margin: 9px 0;
`;
