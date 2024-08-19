import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

type SearchBarProps = {
  searchValue: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  searchValue,
  onSearchChange,
  onSearch
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(searchValue);
    }
  };

  const handleSearchClick = () => {
    onSearch(searchValue);
  };

  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 320,
        height: 35,
        border: '0.1px solid #ccc',
        boxShadow: 'none'
      }}
      onSubmit={(event) => {
        event.preventDefault();
        handleSearchClick();
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          width: '100%',
          height: '20px'
        }}
        value={searchValue}
        onChange={onSearchChange}
        onKeyPress={handleKeyPress}
      />
      <IconButton
        type="button"
        sx={{ p: '10px', marginLeft: 'auto' }}
        aria-label="search"
        onClick={handleSearchClick}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;