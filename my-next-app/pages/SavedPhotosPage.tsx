import React from 'react';
import { Container, Typography } from '@mui/material';
import SavedPhotoSection from '../components/SavedPhotoSection';
import Nav from '../components/Nav';

const SavedPhotosPage: React.FC = () => {
  return (
    <>
      <Nav />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        

        <Typography variant="h1" sx={{ mb: 4, textAlign: 'center', color: '#333', fontSize: '2.5rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
  Saved Photos
</Typography>

        <SavedPhotoSection />
      </Container>
    </>
  );
};

export default SavedPhotosPage;
