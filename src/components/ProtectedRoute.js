import React from 'react';
import { Navigate } from 'react-router-dom';
import authService from '../services/authService';
import { Alert } from '@mui/material';

const ProtectedRoute = ({ children }) => {
  return authService.isLoggedIn(true) ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
