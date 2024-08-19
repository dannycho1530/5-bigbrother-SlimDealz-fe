import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useLocation } from 'react-router-dom';
import { AutoCompleteItem, AutoCompleteList } from './styles';

type SearchBarProps = {
  words: string[];
};

const SearchBar: React.FC<SearchBarProps> = ({ words }) => {
  const [searchValue, setSearchValue] = useState('');
  const [previousSearchValue, setPreviousSearchValue] = useState('');
  const [filteredWords, setFilteredWords] = useState<string[]>([]);
  const [prevPathname, setPrevPathname] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // 페이지가 변경될 때 previousSearchValue를 초기화
    setPreviousSearchValue('');
    setPrevPathname(location.pathname); // 현재 경로를 기록
  }, [location.pathname]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);

    // 검색어가 변경되었을 때만 필터링 실행
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
    // 같은 검색어라면 리렌더링하지 않음 (단, 페이지 이동이 있으면 리렌더링)
    if (previousSearchValue === value && location.pathname === prevPathname)
      return;

    setPreviousSearchValue(value);
    setFilteredWords([]);

    // 페이지 이동 시 기록을 남기지 않음 (뒤로가기를 바로 처리하기 위해 replace 사용)
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
    // 현재 경로와 이전 경로가 동일한 경우 뒤로 가기를 막고 기록을 대체합니다.
    if (location.pathname.startsWith('/searchResults')) {
      navigate(location.pathname, { replace: true });
    } else {
      setSearchValue(''); // 다른 페이지로 이동할 때 searchValue 초기화
    }
  }, [location.pathname, navigate]);

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
