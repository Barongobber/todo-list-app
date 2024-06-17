import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const response = await axios.post(`${API_URL}/auth/login`, credentials);
  return response.data;
});

export const logoutUser = async () => {
  const response = await axios.get(`${API_URL}/auth/logout`);
  return response.data;
};

export const fetchUserProfile = createAsyncThunk('auth/fetchUserProfile', async (token) => {
  const response = await axios.get(`${API_URL}/admins/read`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  console.log(response);
  return response.data;
});
