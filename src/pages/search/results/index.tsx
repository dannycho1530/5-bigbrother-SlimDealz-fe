import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import PageNameTag from '../../../components/tag/pageNameTag';
import CategoryList from '../../../components/list/categoryList';
import { SearchContext } from '../../../components/utils/context/searchContext';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '@/components/utils/loadingSpinner';
import NoResultsSpinner from '@/components/utils/noResultsSpinner';

const SearchResultsPage: React.FC = () => {
  const { keyword } = useParams<{ keyword: string }>();
  const { setSearchQuery } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (keyword) {
      setSearchQuery(keyword);
      // Reset data and loading state when a new search is initiated
      setData([]);
      setLoading(true);
    }
  }, [keyword, setSearchQuery]);

  useEffect(() => {
    if (!keyword) return;

    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/search', {
          params: { keyword }
        });

        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err: any) {
        console.log('An error occurred:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <Container>
      <PageNameTag pageName="Search Results" />
      {loading ? (
        <LoadingSpinner />
      ) : data.length > 0 ? (
        data.map((item: any, index: number) => (
          <Link
            to={`/product/${encodeURIComponent(item.name)}`}
            key={index}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <CategoryList
              id={item.id}
              name={item.name}
              shipping={item.shippingFee}
              price={item.prices[0]?.setPrice}
            />
          </Link>
        ))
      ) : (
        <NoResultsSpinner />
      )}
    </Container>
  );
};

export default SearchResultsPage;
