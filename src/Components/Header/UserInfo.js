import { Popover, Avatar, Divider } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { UserOutlined } from '@ant-design/icons';

import { Text, Button } from '..';
import { Actions } from '../../Redux';

const {
  showUserCard,
  hideUserCard,
  setPhotoToStorage,
  showImageError,
  logOut,
} = Actions;

const UserInfo = ({ children, displayName, email, userImage }) => {
  const { uid } = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();
  const { visibleUserCard } = useSelector((state) => state.home);

  const hideCard = () => {
    dispatch(hideUserCard());
  };

  const showCard = () => {
    dispatch(showUserCard());
  };
  function getFile() {
    document.getElementById('upfile').click();
  }

  const getSelectedImageUrl = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (
      file?.type === 'image/png' ||
      file?.type === 'image/jpg' ||
      file?.type === 'image/jpeg'
    ) {
      dispatch(setPhotoToStorage(file, uid));
    } else {
      dispatch(
        showImageError(
          'Image file type is not valid. Please select a valid image',
        ),
      );
    }
  };

  const logoutBtn = () => {
    dispatch(logOut());
  };

  const popActions = visibleUserCard ? hideCard : showCard;

  const Content = (
    <UserCard>
      <UserDetailSection>
        {!userImage ? (
          <PhotoContainer onClick={getFile}>
            <div style={{ height: 0, width: 0, overflow: 'hidden' }}>
              <input id="upfile" type="file" onChange={getSelectedImageUrl} />
            </div>
            <UserPhoto size={80} icon={<UserOutlined />} />
          </PhotoContainer>
        ) : (
          <PhotoContainer onClick={getFile}>
            <div style={{ height: 0, width: 0, overflow: 'hidden' }}>
              <input id="upfile" type="file" onChange={getSelectedImageUrl} />
            </div>
            <UserImage height="80" src={userImage} />
          </PhotoContainer>
        )}

        <NameContainer>
          <UsernameText>{displayName}</UsernameText>
        </NameContainer>
        <EmailContainer>
          <EmailText>{email}</EmailText>
        </EmailContainer>
      </UserDetailSection>
      <Divider />
      <SignOutContainer>
        <SignOutBtn onClick={logoutBtn} shape="round">
          Sign out
        </SignOutBtn>
      </SignOutContainer>
      <Divider />
      <Footer>
        <TextContainer>
          <Fcontainer>
            <FooterText>Privacy Policy</FooterText>
          </Fcontainer>
          <Fcontainer>
            <FooterText>Terms Of Services</FooterText>
          </Fcontainer>
        </TextContainer>
      </Footer>
    </UserCard>
  );

  return (
    <Popover
      content={Content}
      trigger="click"
      visible={visibleUserCard}
      placement="topRight"
      onVisibleChange={popActions}>
      {children}
    </Popover>
  );
};

UserInfo.defaultProps = {
  userImage: null,
};

UserInfo.propTypes = {
  children: PropTypes.element.isRequired,
  displayName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userImage: PropTypes.string,
};

export default UserInfo;

const UserCard = styled.div`
  height: 300px;
  width: 250px;
`;
const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 10px;
  z-index: 2;
  margin-bottom: 20px;
`;
const UserPhoto = styled(Avatar)`
  cursor: pointer;
`;

const UserDetailSection = styled.div`
  height: 140px;
`;

const NameContainer = styled.div`
  text-align: center;
`;
const EmailContainer = styled.div`
  text-align: center;
`;

const UsernameText = styled(Text)`
  font-size: 20px !important;
  font-family: 'Rubik', sans-serif;
  font-weight: 400 !important;
`;
const EmailText = styled(Text)`
  font-size: 18px !important;
  font-weight: 300 !important;
  font-family: 'Rubik', sans-serif;
`;

const SignOutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignOutBtn = styled(Button)`
  height: 36px;
  width: 102px;
`;

const Footer = styled.div`
  height: 54px;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const FooterText = styled(Text)`
  font-size: 11px !important;
  color: #cccccc !important;
  transition: all 0.2s ease;
  :hover {
    color: #000 !important;
  }
`;

const Fcontainer = styled.div`
  cursor: pointer;
`;
const UserImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  cursor: pointer;
  z-index: 1;
`;
