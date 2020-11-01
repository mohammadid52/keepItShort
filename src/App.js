import React from 'react';
import styled from 'styled-components';
import { Colors } from './Constants';
import { AppRoutes } from './Routes';

function App() {
  return (
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Colors.primaryBackground};
`;
