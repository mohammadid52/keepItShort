import { Dropdown, Menu } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ColorList } from '../../Constants';
import { Text } from '..';
import { Actions } from '../../Redux';

const { changeCardTheme } = Actions;

const MenuContainer = styled(Menu)`
  box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
  transition: box-shadow 0.3s;
  transition-property: box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  height: 200px;
  width: 140px;
  overflow: scroll;
  transition-delay: 0s;
`;

const ItemContainer = styled(Menu.Item)`
  display: flex;
  justify-content: space-between;
  padding: 7px;
`;
const ColorIcon = styled.div`
  height: 14px;
  width: 14px;
  margin-right: 5px;
  background-color: #ec524b;
  border-radius: 50px;
  margin: 5px 10px;
`;

const ColorName = styled(Text)`
  font-size: 14px !important;
  color: #000 !important;
  font-family: 'Rubik', sans-serif;
  font-weight: 400 !important;
  margin: 5px 10px;
`;

const SettingsDropdown = ({ data, children }) => {
  const dispatch = useDispatch();
  const { uid } = useSelector(({ firebase: { auth } }) => auth);

  const changeCardThemeHandler = (theme) => {
    dispatch(changeCardTheme(data, uid, theme));
  };
  const menu = (
    <MenuContainer style={{ borderRadius: 10 }}>
      {map(ColorList, ({ name, color, textColor }) => (
        <ItemContainer
          onClick={() => changeCardThemeHandler({ name, color, textColor })}>
          <ColorIcon style={{ backgroundColor: color }} />
          <ColorName>{name}</ColorName>
        </ItemContainer>
      ))}
    </MenuContainer>
  );

  return <Dropdown overlay={menu}>{children}</Dropdown>;
};

export default SettingsDropdown;

SettingsDropdown.propTypes = {
  data: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired,
};
