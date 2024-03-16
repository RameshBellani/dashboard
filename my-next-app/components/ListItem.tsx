import React from 'react';
import { useDispatch } from 'react-redux';
import { savePost, unsavePost, savePhoto, unsavePhoto } from '../store/slice';
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
    <div className="border border-gray-300 p-4 rounded-md shadow-md flex flex-col">
      <Image src={imageUrl} alt={title} width={400} height={300} className="mb-2 rounded-md" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <button
  className={`px-4 py-2 rounded-md btn btn-primary ${
    isSaved
      ? 'bg-gray-400 text-gray-800 hover:bg-gray-500'
      : 'bg-blue-500 text-white hover:bg-blue-600'
  }`} 
  onClick={handleSaveToggle}
>
  {isSaved ? 'Unsave' : 'Save'}
</button>

    </div>
  );
};

export default ListItem;
