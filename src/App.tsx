import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import GlobalStyle from './common/global-styled';

function App() {
  console.log('husky test');

  return (
    <Router>
      <AppRoutes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
