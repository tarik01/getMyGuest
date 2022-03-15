import { Routes, Route } from 'react-router-dom';
import MyAccount from '../templates/MyAccount';
import Parties from '../templates/Parties';
import Guests from '../templates/Guests';
import Checkin from '../templates/Checkin';
import PartyPage from '../templates/PartyPage';

export default function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/parties" element={<Parties />} />
      <Route path="/parties/:id" element={<PartyPage />} />
      <Route path="/guests" element={<Guests />} />
      <Route path="/checkin" element={<Checkin />} />
      <Route path="/myaccount" element={<MyAccount />} />
    </Routes>
  );
}
