import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Grid } from '@mui/material';
import ListItem from './ListItem';
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import { RootState } from '../store';
import { fetchPhotos } from '../utils/api'; // Import the fetchPhotos function

interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const SavedPhotoSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const savedPhotoIds = useSelector((state: RootState) => state.savedItems.photos);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch saved photos data based on their IDs
      const savedPhotoData = await fetchPhotos(currentPage); // Use fetchPhotos to fetch saved photos
      setPhotos(savedPhotoData);
      setTotalPages(Math.ceil(savedPhotoData.length / 20));
    };

    fetchData();
  }, [savedPhotoIds, currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Paginate the fetched photos
  const photosToShow = photos.slice((currentPage - 1) * 20, currentPage * 20);

  return (
    <div>
      <Typography variant="h2" sx={{ mb: 2 }}>Saved Photos</Typography>
      {/* If you want to implement a search functionality, you can add the SearchBar component here */}
      {/* <SearchBar onSearch={(query) => console.log('Search query:', query)} /> */}
      <Grid container spacing={2} justifyContent="center">
        {photosToShow.map((photo: Photo) => (
          <Grid key={photo.id} item xs={12} sm={6} md={4}>
            <ListItem
              id={photo.id}
              title={photo.title}
              type="photo"
              imageUrl={photo.thumbnailUrl}
              isSaved={true} // Assuming all shown photos are saved
            />
          </Grid>
        ))}
      </Grid>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default SavedPhotoSection;
