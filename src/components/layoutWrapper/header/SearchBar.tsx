import React, { useEffect, useState, useContext } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useLocation, useNavigate } from 'react-router-dom';
import { AutoCompleteItem, AutoCompleteList, CustomInput } from './styles';
import { SearchContext } from '../../../components/utils/searchContext';

const words = ['example', 'search', 'terms', 'list', 'of', 'words']; // 검색어를 필터링하기 위한 단어 목록

const SearchBar: React.FC = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const [previousSearchValue, setPreviousSearchValue] = useState('');
  const [filteredWords, setFilteredWords] = useState<string[]>([]);
  const [prevPathname, setPrevPathname] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setPreviousSearchValue('');
    setPrevPathname(location.pathname);

    if (!location.pathname.startsWith('/searchResults')) {
      setSearchQuery('');
    }
  }, [location.pathname, setSearchQuery]);

  useEffect(() => {
    if (location.pathname.startsWith('/searchResults')) {
      const searchTermFromURL = decodeURIComponent(
        location.pathname.split('/searchResults/')[1] || ''
      );
      if (searchTermFromURL && searchTermFromURL !== searchQuery) {
        setSearchQuery(searchTermFromURL);
      }
    }
  }, [location.pathname, searchQuery, setSearchQuery]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchQuery(value);

    if (value && value !== previousSearchValue) {
      const filtered = words.filter((word) =>
        word.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredWords(filtered);
    } else {
      setFilteredWords([]);
    }
  };

  const handleSearch = (value: string) => {
    if (previousSearchValue === value && location.pathname === prevPathname)
      return;

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
      handleSearch(searchQuery);
    }
  };

  const handleSearchClick = () => {
    handleSearch(searchQuery);
  };

  const handleInputClick = () => {
    navigate('/searchInitial');
  };

  return (
    <>
      <Paper
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 300,
          height: 35,
          border: '0.1px solid #ccc',
          boxShadow: 'none',
          paddingLeft: '10px'
        }}
        onSubmit={(event) => {
          event.preventDefault();
          handleSearchClick();
        }}
      >
        <CustomInput
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          onClick={handleInputClick}
        />
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
          onClick={handleSearchClick}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {filteredWords.length > 0 && (
        <AutoCompleteList>
          {filteredWords.map((word, index) => (
            <AutoCompleteItem key={index} onClick={() => handleSearch(word)}>
              {word}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      )}
    </>
  );
};

export default SearchBar;
