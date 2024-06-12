import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const response = await axios.post('/api/login', credentials);
  return response.data;
});

export const fetchUserProfile = createAsyncThunk('auth/fetchUserProfile', async (token) => {
  const response = await axios.get('/api/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});
