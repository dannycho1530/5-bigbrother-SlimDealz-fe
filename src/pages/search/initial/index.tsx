import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PopularSearch from '../../../components/searches/popularSearches';
import RecentSearches from '../../../components/searches/recentSearches';
import RecommendSearch from '../../../components/searches/recommendSearches';

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
