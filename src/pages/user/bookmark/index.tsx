import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import PageNameTag from '../../../components/tag/pageNameTag';
import CategoryList from '../../../components/list/categoryList';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '@/components/utils/scrollToTop/loadingSpinner';

const UserBookmarkPage: React.FC = () => {
  const [bookmarks, setBookmarks] = useState([]);
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
            console.log('Invalid data.');
          } else if (err.response.status === 401) {
            console.log('Unauthorized access.');
            navigate('/login'); // 로그인 페이지로 이동
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

    fetchBookmarks();
  }, [navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      <PageNameTag pageName={`전체 ${bookmarks.length}개`} />
      {bookmarks.map((bookmark: any, index: number) => (
        <CategoryList
          key={index}
          id={bookmark.productId[0]?.id} // productId
          // image={bookmark.productId[0]?.image} // 이미지 URL
          name={bookmark.productId[0]?.name} // 제품 이름
          shipping={bookmark.productId[0]?.shippingFee} // 배송 정보
          price={bookmark.prices[0]?.setPrice} // setPrice 값 전달
        />
      ))}
    </Container>
  );
};

export default UserBookmarkPage;
