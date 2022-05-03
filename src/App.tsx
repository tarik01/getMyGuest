import { useLocation } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { useEffect } from 'react';

import { GlobalStyle } from './styles/global';
import { Container } from './styles/app';

import Header from './components/Header';
import Menu from './components/Menu';
import GlobalRoutes from './routes';
import GlobalContext from './context';

export default function App() {
  const route = useLocation();

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [route]);

  return (
    <GlobalContext>
      <GlobalStyle />
      <Container>
        <Header />
        <Menu />
        <GlobalRoutes />
        <ReactTooltip />
      </Container>
    </GlobalContext>
  );
}
