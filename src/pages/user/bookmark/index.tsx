import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import PageNameTag from '../../../components/tag/pageNameTag';
import CategoryList from '../../../components/list/categoryList';
import { useNavigate } from 'react-router-dom';

const UserBookmarkPage: React.FC = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) throw new Error('JWT 토큰이 없습니다.');

        const response = await axios.get(`/api/v1/users/{userId}/bookmarks`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        });

        if (response.status === 200) {
          setBookmarks(response.data);
        }
      } catch (err: any) {
        if (err.response) {
          if (err.response.status === 400) {
            setError('Invalid data.');
          } else if (err.response.status === 401) {
            setError('Unauthorized access.');
            navigate('/login'); // 로그인 페이지로 이동
          } else if (err.response.status === 500) {
            setError('Server error occurred.');
          }
        } else {
          setError('Network error.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <PageNameTag pageName={`전체 ${bookmarks.length}개`} />
      {bookmarks.map((bookmark: any, index: number) => (
        <CategoryList
          key={index}
          id={bookmark.productId[index]?.id} // productId
          // image={bookmark.productId[index]?.image} // 이미지 URL
          name={bookmark.productId[index]?.name} // 제품 이름
          shipping={bookmark.productId[index]?.shippingFee} // 배송 정보
          price={bookmark.prices[index]?.setPrice} // setPrice 값 전달
        />
      ))}
    </Container>
  );
};

export default UserBookmarkPage;
