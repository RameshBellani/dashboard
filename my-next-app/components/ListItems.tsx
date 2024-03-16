import React from 'react';
import { useDispatch } from 'react-redux';
import { savePost, unsavePost } from '../store/slice';
import Image from 'next/image';

interface ListItemProps {
  id: number;
  title: string;
  isSaved: boolean;
}

const ListItems: React.FC<ListItemProps> = ({ id, title, isSaved }) => {
  const dispatch = useDispatch();

  const handleSaveToggle = () => {
    if (isSaved) {
      dispatch(unsavePost(id));
    } else {
      dispatch(savePost(id));
    }
  };

  return (
    <div className="border border-gray-300 p-4 rounded-md shadow-md flex flex-col">
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

export default ListItems;
