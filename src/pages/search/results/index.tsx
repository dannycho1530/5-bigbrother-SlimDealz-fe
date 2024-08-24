import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import PageNameTag from '../../../components/tag/pageNameTag';
import CategoryList from '../../../components/list/categoryList';
import { SearchContext } from '../../../components/utils/context/searchContext';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '@/components/utils/scrollToTop/loadingSpinner';

const SearchResultsPage: React.FC = () => {
  const { keyword } = useParams<{ keyword: string }>();
  const { setSearchQuery } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (keyword) {
      setSearchQuery(keyword);
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
        if (err.response) {
          if (err.response.status === 404) {
            console.log('Keyword not found.');
          } else if (err.response.status === 500) {
            console.log('Server error occurred.');
          }
        } else {
          console.log('Network error.');
        }
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
            style={{ textDecoration: 'none', color: 'inherit' }} // 기본 링크 스타일 제거
          >
            <CategoryList
              id={item.id}
              //  image={item.image}
              name={item.name}
              // price={item.price} // 주석 처리: API에서 제공되지 않음
              // per100gPrice="N/A" // 주석 처리: API에서 제공되지 않음
              shipping={item.shippingFee}
              // rating={4} // 주석 처리: 하드코딩된 값이므로 주석 처리
              // bookmarkCount={2145} // 주석 처리: 하드코딩된 값이므로 주석 처리
              price={item.prices[0]?.setPrice} // setPrice 값 전달
            />
          </Link>
        ))
      ) : (
        <div>No results found.</div>
      )}
    </Container>
  );
};

export default SearchResultsPage;
