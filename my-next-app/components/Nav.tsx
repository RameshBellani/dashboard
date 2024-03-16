import React from 'react';
import { AppBar, Tabs, Tab, Typography, Box } from '@mui/material';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Nav = () => {
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    router.push(newValue);
  };

  return (
    <AppBar position="static">
      <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
        <Box display="flex" alignItems="center">
          <Image src="/instagram-logo.png" alt="Instagram Logo" width={40} height={40} />
          <Typography variant="h6" component="div" sx={{ ml: 1 }}>
            Simple Dashboard
          </Typography>
        </Box>
        <Tabs value={router.pathname} onChange={handleChange} aria-label="navigation tabs">
          <Tab label="Photos" value="/PhotosPage" className={router.pathname === '/PhotosPage' ? 'active-tab' : ''} />
          <Tab label="Posts" value="/PostsPage" className={router.pathname === '/PostsPage' ? 'active-tab' : ''} />
          <Tab label="Saved Photos" value="/SavedPhotosPage" className={router.pathname === '/SavedPhotosPage' ? 'active-tab' : ''} />
          <Tab label="Saved Posts" value="/SavedPostsPage" className={router.pathname === '/SavedPostsPage' ? 'active-tab' : ''} />
        </Tabs>
      </Box>
      <style jsx>{`
        .active-tab {
          background-color: #f0f0f0; /* Set the background color for active tab */
        }
      `}</style>
    </AppBar>
  );
};

export default Nav;
