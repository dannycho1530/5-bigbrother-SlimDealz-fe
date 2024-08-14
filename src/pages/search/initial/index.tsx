import PopularSearch from '../../../components/searches/popularSearches';
import RecentSearches from '../../../components/searches/recentSearches';
import RecommendSearch from '../../../components/searches/recommendSearches';

const SearchInitialPage = () => {
  return (
    <>
    <RecommendSearch/>
    <RecentSearches/>
    <PopularSearch/>
    </>
  );
};

export default SearchInitialPage;
