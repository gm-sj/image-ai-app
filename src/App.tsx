import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import GlobalStyle from './common/global-styled';

function App() {
  return (
    <Router>
      <AppRoutes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
