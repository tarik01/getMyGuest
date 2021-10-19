import Header from './components/Header';
import LineBottom from './components/LineBottom';
import LineTop from './components/LineTop';
import Menu from './components/Menu';
import Events from './pages/Events';
import { GlobalStyle } from './styles/global';

export default function App() {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Menu />
      <LineTop />
      <Events />
      <LineBottom />
    </>
    );
};