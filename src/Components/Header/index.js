import { Layout, Input, Tooltip } from 'antd';
import styled from 'styled-components';
import { VscRefresh } from 'react-icons/vsc';
import { AiOutlineUnorderedList, AiOutlineSearch } from 'react-icons/ai';
import { BsFillGridFill } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '..';
import { Actions } from '../../Redux';

const { Header } = Layout;
const { refreshPage, changeSearchText } = Actions;

const StyledHeader = () => {
  const { loading } = useSelector((state) => state.note);
  const { searchText, pageLoading } = useSelector((state) => state.home);
  const { displayName } = useSelector((state) => state.firebase.auth);

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
    <MyHeader style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <HeaderContents>
        <SearchContainer>
          <SearchBar
            size="large"
            placeholder="Search"
            bordered={false}
            onChange={onChange}
            value={searchText}
            prefix={
              <AiOutlineSearch
                color="#2A8FF7"
                size={22}
                style={{ marginRight: 10 }}
              />
            }
          />
        </SearchContainer>
        <Options>
          <NotesOptions>
            <Tooltip title={loading ? 'Saving Data' : 'Refresh'}>
              <Icon>
                {loading || pageLoading ? (
                  <Loader loading={loading} size="small" color="#000" />
                ) : (
                  <VscRefresh size={22} onClick={refresher} />
                )}
              </Icon>
            </Tooltip>
            <Tooltip title="List View">
              <Icon>
                <AiOutlineUnorderedList size={22} />
              </Icon>
            </Tooltip>
            <Tooltip title="Setting">
              <Icon>
                <SettingIcon size={22} />
              </Icon>
            </Tooltip>
          </NotesOptions>
          <UserOptions>
            <Tooltip title="This button does nothing">
              <Icon>
                <BsFillGridFill size={22} />
              </Icon>
            </Tooltip>
            <Tooltip title={displayName || 'user'}>
              <Icon>
                <FaRegUserCircle size={22} />
              </Icon>
            </Tooltip>
          </UserOptions>
        </Options>
      </HeaderContents>
    </MyHeader>
  );
};

const MyHeader = styled(Header)`
  box-shadow: 0 2px 8px #f0f1f2;
`;

const HeaderContents = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;

const SearchContainer = styled.div`
  flex: 1;
`;
const Options = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const NotesOptions = styled.div`
  display: flex;
  margin-right: 16px;
`;

const UserOptions = styled.div`
  display: flex;
`;

const Icon = styled.div`
  margin-right: 14px;
  cursor: pointer;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  transition: background-color 0.2s ease;
  :hover {
    background-color: rgba(210, 210, 210, 0.5);
  }
`;

const SearchBar = styled(Input)`
  background: white;
  :hover {
    box-shadow: 0 0px 40px -10px rgba(0, 64, 128, 0.2);
  }
  ::placeholder {
    color: #2a8ff7;
  }
`;

const SettingIcon = styled(FiSettings)`
  transition: transform 0.4s ease;
  :hover {
    transform: rotateZ(-100deg);
  }
`;

export default StyledHeader;
