import React from 'react';
import { Container, Typography } from '@mui/material';
import PostSection from '../components/PostSection';
import Nav from '../components/Nav';

const PostsPage: React.FC = () => {
  return (
    <>
      <Nav />
      <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h1" sx={{ mb: 4, textAlign: 'center', color: '#333', fontSize: '2.5rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
  Posts
</Typography>

        <PostSection />
      </Container>
    </>
  );
};

export default PostsPage;
