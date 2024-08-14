import React, { useState, useEffect } from 'react';
import { AutoCompleteItem, AutoCompleteList, SearchContainer } from './styles';
import Header from '@/components/layoutWrapper/header';
import SearchBar from '@/components/layoutWrapper/header/SearchBar';
import { useNavigate } from 'react-router-dom';

const RecommendSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredWords, setFilteredWords] = useState<string[]>([]);
  const navigate = useNavigate();

  const words = [
    '닭가슴살',
    '닭가슴살 샐러드',
    '닭가슴살 요리법',
    '닭가슴살 도시락',
    '닭가슴살 칼로리',
    '닭가슴살 다이어트',
    '닭가슴살 구매처',
    '닭가슴살 영양성분',
    '닭가슴살 소스',
    '닭가슴살 배달'
  ];

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
    const filtered = value
      ? words.filter((word) => word.toLowerCase().includes(value.toLowerCase()))
      : [];
    setFilteredWords(filtered);
  };

  const handleSearch = (value: string) => {
    navigate(`/searchResults?query=${encodeURIComponent(value)}`);
  };

  return (
    <SearchContainer>
      <SearchBar
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onSearch={handleSearch} // 이곳에서 onSearch prop을 전달
      />
      {filteredWords.length > 0 && (
        <AutoCompleteList>
          {filteredWords.map((word, index) => (
            <AutoCompleteItem key={index}>{word}</AutoCompleteItem>
          ))}
        </AutoCompleteList>
      )}
    </SearchContainer>
  );
};

export default RecommendSearch;
