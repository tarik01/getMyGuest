import Header from './components/Header';
import Menu from './components/Menu';
import Events from './pages/Events';
import Guests from './pages/Guests';
import ReactTooltip from 'react-tooltip';
import { GlobalStyle } from './styles/global';
import { Container } from './styles/app';

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Menu />
      <Events />
      <ReactTooltip />
    </Container>
    );
};