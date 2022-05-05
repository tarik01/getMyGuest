import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLogged } from '../modules/userModel';

export function PrivateRoute({ children }: { children: React.ReactElement }) {
  if (!isLogged()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
