import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PopularSearch from '../../../components/searches/popularSearches';
import RecentSearches from '../../../components/searches/recentSearches';
import RecommendSearch from '../../../components/searches/recommendSearches';
import Divider from '@mui/material/Divider';
import Box from '../../../components/box/styles';

type SearchInitialPageProps = {
  searchValue: string;
};

const SearchInitialPage: React.FC<SearchInitialPageProps> = ({
  searchValue
}) => {
  const navigate = useNavigate();

  const handleSearch = (word: string) => {
    console.log(`Selected search word: ${word}`);
  };

  useEffect(() => {
    // SearchInitialPage로 진입할 때 기록을 남기지 않음
    navigate(location.pathname, { replace: true });
  }, [navigate]);

  return (
    <>
      {searchValue ? (
        <Box>
          <RecommendSearch onSearch={handleSearch} />
          <Divider
            sx={{
              my: 2,
              borderColor: 'rgba(0, 0, 0, 0.1)', // 색상 연하게 설정
              width: '80%', // 길이 80%로 설정
              mx: 'auto' // 가운데 정렬
            }}
          />
        </Box>
      ) : (
        <Box>
          <RecentSearches />
          <Divider
            sx={{
              my: 2,
              borderColor: 'rgba(0, 0, 0, 0.1)', // 색상 연하게 설정
              width: '95%', // 길이 80%로 설정
              mx: 'auto' // 가운데 정렬
            }}
          />
          <PopularSearch />
        </Box>
      )}
    </>
  );
};

export default SearchInitialPage;
