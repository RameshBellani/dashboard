import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Grid } from '@mui/material';
import ListItem from './ListItem'; // Import the ListItem component
import { RootState } from '../store';

// Define the type/interface for a single post
interface Post {
  id: number;
  title: string;
  imageUrl: string;
}

// Replace `fetchPostById` with your actual function to fetch post data by ID
const fetchPostById = async (postId: number): Promise<Post> => {
  // Implement your logic to fetch post data from an API or other data source
  // For demonstration purposes, return mock post data
  return {
    id: postId,
    title: `Post ${postId}`,
    imageUrl: 'https://via.placeholder.com/150', // Example image URL
  };
};

const SavedPostSection: React.FC = () => {
  // Get the saved posts from the Redux store
  const savedPosts = useSelector((state: RootState) => state.savedItems.posts);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchSavedPosts = async () => {
      // Fetch saved posts data based on their IDs
      const savedPostData = await Promise.all(
        savedPosts.map(async (postId: number) => {
          // Fetch individual post data from an API or other data source
          const postData = await fetchPostById(postId);
          return postData;
        })
      );
      setPosts(savedPostData);
    };

    fetchSavedPosts();
  }, [savedPosts]);

  return (
    <div className="mb-8">
      <Typography variant="h2" gutterBottom>
        Saved Posts
      </Typography>
      <Grid container spacing={2}>
        {posts.map((post: Post) => (
          <Grid item xs={12} key={post.id}>
            <ListItem
              id={post.id}
              title={post.title}
              type="post"
              isSaved={true} // Mark as saved
              imageUrl={post.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default SavedPostSection;
