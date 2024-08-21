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
    navigate(location.pathname, { replace: true });
  }, [navigate]);

  return (
    <>
      {searchValue ? (
        <RecommendSearch onSearch={handleSearch} />
      ) : (
        <>
          <RecentSearches />
          <PopularSearch />
        </>
      )}
    </>
  );
};

export default SearchInitialPage;
