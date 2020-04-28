import React from 'react';

import Routes from 'routes';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, Theme } from 'styles';

const App: React.FC = () => (
  <ThemeProvider theme={Theme}>
    <Routes />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
