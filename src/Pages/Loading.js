import React from 'react';
import styled from 'styled-components';
import svg from '../assets/svg/puff.svg';

const Loading = () => (
  <LoaderContainer>
    <Loader src={svg} />
  </LoaderContainer>
);

export default Loading;

const LoaderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #132743;
`;
const Loader = styled.img``;
