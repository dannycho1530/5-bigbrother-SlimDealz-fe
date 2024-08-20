import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import PageNameTag from '../../../components/tag/pageNameTag';
import CategoryList from '../../../components/list/categoryList';
import { SearchContext } from '../../../components/utils/searchContext';

const SearchResultsPage: React.FC = () => {
  const { searchQuery } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/search', {
          params: { query: searchQuery }
        });

        if (response.status === 200) {
          setData(response.data); // API로부터 데이터를 받아오면 상태에 저장합니다.
        }
      } catch (err: any) {
        if (err.response) {
          // 서버에서 응답이 온 경우
          if (err.response.status === 404) {
            setError('Keyword not found.');
          } else if (err.response.status === 500) {
            setError('Server error occurred.');
          }
        } else {
          // 서버로부터 응답이 오지 않은 경우
          setError('Network error.');
        }
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchData();
  }, [searchQuery]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <PageNameTag pageName="Search Results" />
      {data.length > 0 ? (
        data.map((item: any, index: number) => (
          <CategoryList
            key={index}
            id={item.id}
            image={item.image}
            name={item.name}
            // price={item.price} // 주석 처리: API에서 제공되지 않음
            // per100gPrice="N/A" // 주석 처리: API에서 제공되지 않음
            shipping={item.shippingFee}
            // rating={4} // 주석 처리: 하드코딩된 값이므로 주석 처리
            // bookmarkCount={2145} // 주석 처리: 하드코딩된 값이므로 주석 처리
          />
        ))
      ) : (
        <div>No results found.</div>
      )}
    </Container>
  );
};

export default SearchResultsPage;
