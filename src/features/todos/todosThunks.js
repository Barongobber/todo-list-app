import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (token) => {
  const response = await axios.get(`${API_URL}/todo-list/read`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (todo) => {
  const response = await axios.post('/api/todos', todo);
  return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.delete(`/api/todos/${id}`);
  return id;
});
