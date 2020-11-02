import { Menu, Dropdown } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Actions } from '../../Redux';

const { enableDarkMode, disableDarkMode } = Actions;

const MenuContainer = styled(Menu)`
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
  transition: box-shadow 0.3s;
  transition-property: box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  height: 100%;
  width: 190px;
  border-radius: 10px;
  overflow: scroll;
  transition-delay: 0s;
`;
const MenuItem = styled(Menu.Item)``;

const OnHeaderDropdown = ({ children }) => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.home);

  const enableDark = () => {
    dispatch(enableDarkMode());
  };
  const disableDark = () => {
    dispatch(disableDarkMode());
  };

  const modeHandler = darkMode ? disableDark : enableDark;
  const modeText = darkMode ? 'disable dark mode' : 'enable dark mode';

  const menu = (
    <MenuContainer>
      <MenuItem danger onClick={modeHandler} key="1">
        {modeText}
      </MenuItem>
    </MenuContainer>
  );
  return (
    <Dropdown trigger={['click']} overlay={menu}>
      {children}
    </Dropdown>
  );
};

export default OnHeaderDropdown;
