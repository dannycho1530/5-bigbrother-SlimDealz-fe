import React, { useState } from 'react';
import SearchName from '../searchUtils/searchName';
import SearchWord from '../searchUtils/searchWord';
import Button from '@mui/material/Button';

import {
  NameContainer,
  RecentSearchesContainer,
  SearchWordsContainer
} from './styles';

const RecentSearches = () => {
  const initialSearchWords = [
    'React',
    'JavaScript',
    'TypeScript',
    'CSS',
    'HTML',
    'Node.js',
    'Express',
    'MongoDB',
    'GraphQL',
    'Redux',
    'MUI',
    'styled-components',
    'Webpack',
    'Babel',
    'REST API',
    'Axios',
    'Jest',
    'Next.js',
    'Gatsby',
    'ESLint'
  ];

  const [searchWords, setSearchWords] = useState(initialSearchWords);

  const handleDeleteAll = () => {
    setSearchWords([]); // searchWords 배열을 빈 배열로 설정하여 모든 요소를 삭제
  };

  return (
    <RecentSearchesContainer>
      <NameContainer>
        <SearchName searchName="최근 검색어" />
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#f2f2f7',
            textAlign: 'center',
            fontSize: '13px',
            fontWeight: 'bold',
            color: 'black',
            padding: '5px',
            borderRadius: '15px',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#e0e0e0'
            }
          }}
          onClick={handleDeleteAll} // 버튼 클릭 시 handleDeleteAll 함수 호출
        >
          전체 삭제
        </Button>
      </NameContainer>
      <SearchWordsContainer>
        {searchWords.map((word, index) => (
          <SearchWord key={index} searchWord={word} />
        ))}
      </SearchWordsContainer>
    </RecentSearchesContainer>
  );
};

export default RecentSearches;
