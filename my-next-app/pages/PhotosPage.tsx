import React from 'react';
import { Container, Typography } from '@mui/material';
import PhotoSection from '../components/PhotoSection';
import Nav from '../components/Nav';

const PhotosPage: React.FC = () => {
  return (
    <>
      <Nav />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h1" sx={{ mb: 4, textAlign: 'center', color: '#333', fontSize: '2.5rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
  Photos
</Typography>

        
        <PhotoSection />
      </Container>
    </>
  );
};

export default PhotosPage;
