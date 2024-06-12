import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <CssBaseline />
      <Topbar />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // Adjust this margin to match the height of the Topbar
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
