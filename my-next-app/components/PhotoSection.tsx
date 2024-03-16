import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { RootState } from '../store';
import ListItem from './ListItem';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import { fetchPhotos } from '../utils/api';
import { initializeFromStorage } from '../store/slice';

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const PhotoSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const savedPhotos = useSelector((state: RootState) => state.savedItems.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPhotos(currentPage);
      setTotalPages(Math.ceil(data.length / 20));
      dispatch(initializeFromStorage());
    };

    fetchData();
  }, [currentPage, dispatch]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPhotos(currentPage);
      setPhotos(data);
    };

    fetchData();
  }, [currentPage]);

  return (
    <div>
      <Typography variant="h2" sx={{ mb: 2 }}>Photos</Typography>
      <SearchBar onSearch={(query) => console.log('Search query:', query)} />
      <Grid container spacing={2} justifyContent="center">
        {photos.map((photo: Photo) => (
          <Grid key={photo.id} item xs={12} sm={6} md={4}>
            <ListItem
              id={photo.id}
              title={photo.title}
              type="photo"
              imageUrl={photo.thumbnailUrl}
              isSaved={savedPhotos.includes(photo.id)}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default PhotoSection;
