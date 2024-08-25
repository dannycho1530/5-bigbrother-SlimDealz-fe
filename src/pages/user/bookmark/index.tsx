import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, CustomBox, CustomButton } from './styles';
import PageNameTag from '../../../components/tag/pageNameTag';
import CategoryList from '../../../components/list/categoryList';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from '@/components/utils/loadingSpinner';
import { Typography } from '@mui/material';

const UserBookmarkPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [apiBaseUrl, setApiBaseUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  const serverUri1 = import.meta.env.VITE_SERVER_URI1;
  const serverUri2 = import.meta.env.VITE_SERVER_URI2;

  useEffect(() => {
    const selectServerUri = async () => {
      const jwtToken = localStorage.getItem('jwtToken');
      if (!jwtToken) {
        setIsAuthenticated(false);
        setError('JWT 토큰이 없습니다.');
        setLoading(false);
        return;
      }

      const kakao_Id = extractKakaoIdFromToken(jwtToken);
      if (!kakao_Id) {
        setIsAuthenticated(false);
        setError('Kakao_ID를 찾을 수 없습니다.');
        setLoading(false);
        return;
      }

      try {
        // 서버 URI 1에 먼저 시도
        const response = await axios.get(
          `${serverUri1}/api/v1/users/kakao/${encodeURIComponent(kakao_Id)}/id`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`
            }
          }
        );

        if (response.status === 200) {
          setIsAuthenticated(true);
          setApiBaseUrl(serverUri1); // 서버 URI 1 사용
        }
      } catch (err) {
        // 서버 URI 1 실패 시 서버 URI 2로 시도
        try {
          const response = await axios.get(
            `${serverUri2}/api/v1/users/kakao/${encodeURIComponent(kakao_Id)}/id`,
            {
              headers: {
                Authorization: `Bearer ${jwtToken}`
              }
            }
          );

          if (response.status === 200) {
            setIsAuthenticated(true);
            setApiBaseUrl(serverUri2); // 서버 URI 2 사용
          } else {
            setError('두 서버 모두 접근할 수 없습니다.');
          }
        } catch (err) {
          setError('두 서버 모두 접근할 수 없습니다.');
        }
      } finally {
        setLoading(false);
      }
    };

    selectServerUri();
  }, []);

  useEffect(() => {
    const fetchBookmarks = async () => {
      if (!apiBaseUrl) return;

      try {
        const jwtToken = localStorage.getItem('jwtToken');
        if (!jwtToken) {
          setIsAuthenticated(false);
          return;
        }

        const kakao_Id = extractKakaoIdFromToken(jwtToken);
        if (!kakao_Id) throw new Error('Kakao_ID를 찾을 수 없습니다.');

        const userIdResponse = await axios.get(
          `${apiBaseUrl}/api/v1/users/kakao/${encodeURIComponent(kakao_Id)}/id`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`
            }
          }
        );

        const userId = userIdResponse.data;
        if (!userId) throw new Error('User ID를 가져오는 데 실패했습니다.');

        const response = await axios.get(
          `${apiBaseUrl}/api/v1/users/${userId}/bookmarks`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`
            }
          }
        );

        if (response.status === 200) {
          setBookmarks(response.data);
        }
      } catch (err: any) {
        if (err.response) {
          if (err.response.status === 400) {
            setError('Invalid data.');
          } else if (err.response.status === 401) {
            setError('Unauthorized access.');
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

    if (apiBaseUrl) {
      fetchBookmarks();
    }
  }, [apiBaseUrl, navigate]);

  const extractKakaoIdFromToken = (token: string): string | null => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );

      const parsedToken = JSON.parse(jsonPayload);
      return parsedToken.kakao_Id || null;
    } catch (error) {
      console.error('JWT token parsing error:', error);
      return null;
    }
  };

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
          id={bookmark.productId}
          name={bookmark.name}
          shipping={bookmark.shippingFee}
          price={bookmark.prices[0]?.setPrice}
        />
      ))}
    </Container>
  );
};

export default UserBookmarkPage;
