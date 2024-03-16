import React, { useState } from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="flex items-center mb-4">
      <TextField
        type="text"
        label="Search..."
        value={query}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
      />
    </div>
  );
};

export default SearchBar;
