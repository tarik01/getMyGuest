import { Routes, Route } from 'react-router-dom';
import MyAccount from '../templates/MyAccount';
import Events from '../templates/Events';
import Guests from '../templates/Guests';
import Checkin from '../templates/Checkin';
import EventPage from '../templates/EventPage';

export default function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/events" element={<Events />} />
      <Route path="/event" element={<EventPage />} />
      <Route path="/guests" element={<Guests />} />
      <Route path="/checkin" element={<Checkin />} />
      <Route path="/myaccount" element={<MyAccount />} />
    </Routes>
  );
}
