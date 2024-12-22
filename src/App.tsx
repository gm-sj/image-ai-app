import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import GlobalStyle from './common/global-styled';
import ModalProvider from './context/ModalProvider';
import ModalContainer from './container/ModalContainer';

function App() {
  return (
    <Router>
      <ModalProvider>
        <AppRoutes />
        <GlobalStyle />
        <ModalContainer />
      </ModalProvider>
    </Router>
  );
}

export default App;
