import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/auth/authThunks';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(loginUser({ username, password }));
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="sm" className="bg-teal-50	 p-8 rounded shadow-md mt-16" sx={{
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);'
    }}>
      <Box>
        <Typography variant="h4" sx={{ mb: 4 }}>Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            variant="outlined"
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
        {auth.error && <Typography color="error" sx={{ mt: 2 }}>{auth.error}</Typography>}
      </Box>
    </Container>
  );
};

export default Login;
