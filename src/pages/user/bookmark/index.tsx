import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, CustomBox, CustomButton } from './styles';
import PageNameTag from '../../../components/tag/pageNameTag';
import CategoryList from '../../../components/list/categoryList';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import LoadingSpinner from '@/components/utils/loadingSpinner';

const UserBookmarkPage: React.FC = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
          setIsAuthenticated(false);
          return;
        }

        const response = await axios.get(`/api/v1/users/{userId}/bookmarks`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        });

        if (response.status === 200) {
          setBookmarks(response.data);
        }
      } catch (err: any) {
        if (err.response && err.response.status === 401) {
          setIsAuthenticated(false);
        } else {
          console.log('Network or server error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBookmarks();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!isAuthenticated) {
    return (
      <Container>
        <CustomBox>
          <Typography variant="h6" gutterBottom>
            북마크한 상품이 없습니다
          </Typography>
          <Typography variant="body2" color="textSecondary">
            로그인하고 관심 상품의 최저가 소식을 받아보세요.
          </Typography>
          <CustomButton onClick={() => navigate('/signIn')}>
            로그인하기
          </CustomButton>
        </CustomBox>
      </Container>
    );
  }

  return (
    <Container>
      <PageNameTag pageName={`전체 ${bookmarks.length}개`} />
      {bookmarks.map((bookmark: any, index: number) => (
        <CategoryList
          key={index}
          id={bookmark.productId[0]?.id}
          name={bookmark.productId[0]?.name}
          shipping={bookmark.productId[0]?.shippingFee}
          price={bookmark.prices[0]?.setPrice}
        />
      ))}
    </Container>
  );
};

export default UserBookmarkPage;
