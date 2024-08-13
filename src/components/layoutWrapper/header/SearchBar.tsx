import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const navigate = useNavigate();

  const onSearch = (value: string) => {
    if (value) {
      navigate(`/searchResults?query=${encodeURIComponent(value)}`);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSearch(searchValue);
    }
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
        onSearch(searchValue);
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          width: '100%', // 너비 조절
          height: '20px' // 높이 조절
        }}
        value={searchValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <IconButton
        type="button"
        sx={{ p: '10px', marginLeft: 'auto' }}
        aria-label="search"
        onClick={() => onSearch(searchValue)}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
