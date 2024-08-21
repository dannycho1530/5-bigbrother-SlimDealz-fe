import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { useLocation, useNavigate } from 'react-router-dom';

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
  const [previousSearchValue, setPreviousSearchValue] = useState('');
  const [filteredWords, setFilteredWords] = useState<string[]>([]);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/searchResults')) {
      const searchTermFromURL = decodeURIComponent(
        location.pathname.split('/searchResults/')[1] || ''
      );
      if (searchTermFromURL && searchTermFromURL !== searchValue) {
        onSearchChange({
          target: { value: searchTermFromURL }
        } as React.ChangeEvent<HTMLInputElement>);
      }
    }
  }, [location.pathname, searchValue, onSearchChange]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onSearchChange(event);

    if (value && value !== previousSearchValue) {
      const filtered = searchValue
        .split(' ')
        .filter((word) => word.toLowerCase().includes(value.toLowerCase()));
      setFilteredWords(filtered);
    } else {
      setFilteredWords([]);
    }
  };

  const handleSearch = (value: string) => {
    if (previousSearchValue === value) return;

    setPreviousSearchValue(value);
    setFilteredWords([]);

    if (value.trim() !== '') {
      navigate(`/searchResults/${encodeURIComponent(value)}`, {
        replace: true
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch(searchValue);
    }
  };

  const handleSearchClick = () => {
    handleSearch(searchValue);
  };

  const handleInputClick = () => {
    navigate('/searchInitial');
  };

  useEffect(() => {
    setPreviousSearchValue('');
  }, [location.pathname]);

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
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        onClick={handleInputClick}
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
