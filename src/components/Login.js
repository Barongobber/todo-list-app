import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField, Button, Container, Typography, Box, Alert } from '@mui/material';
import authService from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const isDirectVisit = authService.isDirectVisited();
  const isCredentialWrong = authService.isCredentialWrong();

  const handleLogin = async (e) => {
    e.preventDefault();
    await authService.authenticate(email, password);
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="sm" className="bg-teal-50	 p-8 rounded shadow-md mt-16" sx={{
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);'
    }}>
      { isCredentialWrong && <Alert severity='warning'>Please login using correct credentials</Alert> }
      { isDirectVisit && !isCredentialWrong && <Alert severity="warning">Please Login First!</Alert>}
      <Box>
        <Typography variant="h4" sx={{ mb: 4 }}>Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
