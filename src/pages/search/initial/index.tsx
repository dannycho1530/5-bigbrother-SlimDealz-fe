import React from 'react';
import PopularSearch from '../../../components/searches/popularSearches';
import RecentSearches from '../../../components/searches/recentSearches';
import RecommendSearch from '../../../components/searches/recommendSearches';

type SearchInitialPageProps = {
  searchValue: string;
};

const SearchInitialPage: React.FC<SearchInitialPageProps> = ({
  searchValue
}) => {
  const handleSearch = (word: string) => {
    // SearchBar로 전달될 검색어 처리 로직을 추가합니다.
    console.log(`Selected search word: ${word}`);
  };

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
