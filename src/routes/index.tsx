import { Routes, Route } from 'react-router-dom';
import Login from '../templates/Login';
import Register from '../templates/Register';
import MyAccount from '../templates/MyAccount';
import Parties from '../templates/Parties';
import Guests from '../templates/Guests';
import Checkin from '../templates/Checkin';
import PartyPage from '../templates/PartyPage';
import Logout from '../templates/Logout';
import { PrivateRoute } from './private';

export default function GlobalRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/parties"
        element={
          <PrivateRoute>
            <Parties />
          </PrivateRoute>
        }
      />
      <Route
        path="/parties/:id"
        element={
          <PrivateRoute>
            <PartyPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/guests"
        element={
          <PrivateRoute>
            <Guests />
          </PrivateRoute>
        }
      />
      <Route
        path="/checkin"
        element={
          <PrivateRoute>
            <Checkin />
          </PrivateRoute>
        }
      />
      <Route
        path="/myaccount"
        element={
          <PrivateRoute>
            <MyAccount />
          </PrivateRoute>
        }
      />
      <Route
        path="/logout"
        element={
          <PrivateRoute>
            <Logout />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
