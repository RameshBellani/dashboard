import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Grid } from '@mui/material';
import ListItem from './ListItem';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import { RootState } from '../store';
import { fetchPosts } from '../utils/api';
import { initializeFromStorage } from '../store/slice';

// Define the type/interface for a single post
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  imageUrl: string; // Include the imageUrl property
  // Add other properties as needed
}

const PostSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const savedPosts = useSelector((state: RootState) => state.savedItems.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPosts(currentPage);
      setPosts(data);
      setTotalPages(Math.ceil(data.length / 20));
      dispatch(initializeFromStorage());
    };

    fetchData();
  }, [currentPage, dispatch]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mb-8">
      <Typography variant="h2" gutterBottom>
        Posts
      </Typography>
      <SearchBar onSearch={(query) => console.log('Search query:', query)} />
      <Grid container spacing={2}>
        {posts.map((post: Post) => (
          <Grid item xs={12} key={post.id}>
            <ListItem
              id={post.id}
              title={post.title}
              type="post"
              isSaved={savedPosts.includes(post.id)}
              imageUrl={post.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default PostSection;
