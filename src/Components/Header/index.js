import { Layout } from 'antd';
import styled from 'styled-components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Actions } from '../../Redux';
import HeaderOptions from './HeaderOptions';
import SearchBarComponent from './SearchBarComponent';

const { Header } = Layout;
const { refreshPage, changeSearchText } = Actions;

const StyledHeader = () => {
  const { searchText, pageLoading } = useSelector((state) => state.home);

  const dispatch = useDispatch();

  const refresher = () => {
    dispatch(refreshPage(1, 1000));
  };

  const reloadPage = !!pageLoading;

  useEffect(() => {}, [reloadPage]);

  const onChange = (e) => {
    dispatch(changeSearchText(e.target.value));
  };

  return (
    <MyHeader
      style={{
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }}>
      <HeaderContents>
        <SearchBarComponent onChange={onChange} searchText={searchText} />
        <HeaderOptions pageLoading={pageLoading} refresher={refresher} />
      </HeaderContents>
    </MyHeader>
  );
};
const MyHeader = styled(Header)``;

const HeaderContents = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

export default StyledHeader;
