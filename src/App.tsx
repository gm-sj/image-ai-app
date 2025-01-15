import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import GlobalStyle from './common/global-styled';
import ModalProvider from './context/ModalProvider';
import ModalContainer from './container/ModalContainer';
import { DeviceTypeProvider } from './context/DeviceTypeProvider';

function App() {
  return (
    <Router>
      <DeviceTypeProvider>
        <ModalProvider>
          <AppRoutes />
          <GlobalStyle />
          <ModalContainer />
        </ModalProvider>
      </DeviceTypeProvider>
    </Router>
  );
}

export default App;
