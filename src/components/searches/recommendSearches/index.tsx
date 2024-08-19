import React, { useState } from 'react';
import { AutoCompleteItem, AutoCompleteList, SearchContainer } from './styles';
import SearchBar from '../../../components/layoutWrapper/header/SearchBar';

const RecommendSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [previousSearchValue, setPreviousSearchValue] = useState('');
  const [filteredWords, setFilteredWords] = useState<string[]>([]);

  const words = [
    '닭가슴살',
    '닭가슴살 샐러드',
    '닭가슴살 요리법',
    '닭가슴살 도시락',
    '닭가슴살 칼로리',
    '닭가슴살 다이어트',
    '닭가슴 살 구매처',
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
    // 같은 검색어라면 리렌더링하지 않음
    if (previousSearchValue === value) return;
    setPreviousSearchValue(value);
    // 새로운 검색어가 입력되었을 때만 화면을 업데이트 (페이지 이동은 막음)
    setFilteredWords([]);
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