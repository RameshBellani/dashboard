import React from 'react';
import { useDispatch } from 'react-redux';
import { savePost, unsavePost, savePhoto, unsavePhoto } from '../store/slice';
import { Button, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';

interface ListItemProps {
  id: number;
  title: string;
  type: 'post' | 'photo';
  isSaved: boolean;
  imageUrl: string;
}

const ListItem: React.FC<ListItemProps> = ({ id, title, type, isSaved, imageUrl }) => {
  const dispatch = useDispatch();

  const handleSaveToggle = () => {
    if (isSaved) {
      if (type === 'post') {
        dispatch(unsavePost(id));
      } else {
        dispatch(unsavePhoto(id));
      }
    } else {
      if (type === 'post') {
        dispatch(savePost(id));
      } else {
        dispatch(savePhoto(id));
      }
    }
  };

  return (
    <Card variant="outlined" className="mb-4">
      <Image src={imageUrl} alt={title} width={400} height={300} />
      <CardContent>
        <Typography variant="h5" component="h2" className="mb-2">
          {title}
        </Typography>
        <Button
          variant="contained"
          color={isSaved ? 'secondary' : 'primary'}
          onClick={handleSaveToggle}
        >
          {isSaved ? 'Unsave' : 'Save'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ListItem;
