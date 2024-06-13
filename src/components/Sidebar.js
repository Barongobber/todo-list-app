import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItemText, Drawer, ListItemButton } from '@mui/material';

const drawerWidth = 240;

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <List sx={{ pt: 10 }}>
        <ListItemButton component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="/profile">
          <ListItemText primary="Profile" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
