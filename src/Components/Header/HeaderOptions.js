/* eslint-disable no-nested-ternary */
import React from 'react';
import { Tooltip } from 'antd';
import styled from 'styled-components';
import { VscRefresh } from 'react-icons/vsc';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsFillGridFill } from 'react-icons/bs';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Loader, UserInfo, OnHeaderDropdown } from '..';
import { Actions } from '../../Redux';

const { getUserImage } = Actions;

const HeaderOptions = ({ pageLoading, refresher }) => {
  const { uid } = useSelector((state) => state.firebase.auth);

  const { loading } = useSelector((state) => state.note);

  useFirestoreConnect({
    collection: `users/${uid}/images`,
    storeAs: 'images',
    orderBy: ['date', 'desc'],
  });
  const user = useSelector(({ firestore: { data } }) => data.images);

  const userImage = getUserImage(user);

  const { displayName, email } = useSelector((state) => state.firebase.auth);
  return (
    <Options>
      <NotesOptions>
        <Tooltip title={loading ? 'Saving Data' : 'Refresh'}>
          <Icon>
            {loading || pageLoading ? (
              <Loader loading={loading} size="small" color="#000" />
            ) : (
              <RefreshIcon size={22} onClick={refresher} />
            )}
          </Icon>
        </Tooltip>

        <Tooltip title="List View">
          <Icon>
            <AiOutlineUnorderedList size={22} />
          </Icon>
        </Tooltip>
        <OnHeaderDropdown>
          <Icon>
            <SettingIcon size={22} />
          </Icon>
        </OnHeaderDropdown>
      </NotesOptions>
      <UserOptions>
        <Tooltip title="This button does nothing">
          <Icon>
            <BsFillGridFill size={22} />
          </Icon>
        </Tooltip>
        <UserInfo userImage={userImage} displayName={displayName} email={email}>
          {!userImage ? (
            <Icon>
              <FaRegUserCircle size={22} />
            </Icon>
          ) : (
            <Icon>
              <UserImage src={userImage} />
            </Icon>
          )}
        </UserInfo>
      </UserOptions>
    </Options>
  );
};

export default HeaderOptions;
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
  width: 40px;
  height: 40px;
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

const SettingIcon = styled(FiSettings)`
  transition: transform 0.4s ease;
  :hover {
    transform: rotateZ(-100deg);
  }
`;

const UserImage = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  object-fit: contain;
`;

const RefreshIcon = styled(VscRefresh)`
  transition: transform 0.4s ease;
  :hover {
    transform: rotateZ(130deg);
  }
`;

HeaderOptions.propTypes = {
  pageLoading: PropTypes.bool.isRequired,
  refresher: PropTypes.func.isRequired,
};
