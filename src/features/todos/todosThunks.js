import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('/api/todos');
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
