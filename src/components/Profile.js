import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../features/auth/authThunks';
import { Container, Typography, Box } from '@mui/material';

const Profile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.token) {
      dispatch(fetchUserProfile(auth.token));
    }
  }, [auth.token, dispatch]);

  return (
    <Container maxWidth="sm" className="bg-white p-8 rounded shadow-md mt-16">
      <Box>
        <Typography variant="h4" className="mb-4">Profile</Typography>
        {auth.user ? (
          <div>
            <Typography variant="body1" className="mb-2">Name: {auth.user.name}</Typography>
            <Typography variant="body1">Email: {auth.user.email}</Typography>
          </div>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </Box>
    </Container>
  );
};

export default Profile;
