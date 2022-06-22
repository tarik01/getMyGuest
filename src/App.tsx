import { GlobalStyle } from './styles/global';
import { Container } from './styles/app';

import Header from './components/Header';
import Menu from './components/Menu';
import GlobalRoutes from './routes';
import GlobalContext from './context';

export default function App() {
  return (
    <GlobalContext>
      <GlobalStyle />
      <Container>
        <Header />
        <Menu />
        <GlobalRoutes />
      </Container>
    </GlobalContext>
  );
}
