import React from 'react';
import { Container, Typography } from '@mui/material';
import SavedPostSection from '../components/SavedPostSection';
import Nav from '../components/Nav';

const SavedPostsPage: React.FC = () => {
  return (
    <>
      <Nav />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        
        <Typography variant="h1" sx={{ mb: 4, color: '#333', textAlign: 'center', fontSize: '2.5rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
  Saved Posts
</Typography>

        <SavedPostSection />
      </Container>
    </>
  );
};

export default SavedPostsPage;
