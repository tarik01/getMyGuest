import { Routes, Route, useLocation } from "react-router-dom";
import ReactTooltip from 'react-tooltip';

import Header from './components/Header';
import Menu from './components/Menu';
import Events from './templates/Events';
import Guests from './templates/Guests';
import Checkin from './templates/Checkin';
import MyAccount from "./templates/MyAccount";
import { GlobalStyle } from './styles/global';
import { Container } from './styles/app';
import { useEffect } from "react";

export default function App() {

  const route = useLocation();

  useEffect(() => {
    ReactTooltip.rebuild();
  }, [route]);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Menu />
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/checkin" element={<Checkin />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/" element={<></>} />
        </Routes>
        <ReactTooltip/>   
      </Container>
    </>
    );
};