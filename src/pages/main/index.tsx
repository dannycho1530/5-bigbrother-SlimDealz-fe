import React, { useEffect } from 'react';
import IconCategory from '../../components/icon/iconCategory';
import ProductSlider from '../../components/product/productSlider';
import { Container, ChickenChestWrapper } from './styles';


const MainPage = () => {
  useEffect(() => {
    // URL에서 jwtToken과 refreshToken 추출
    const urlParams = new URLSearchParams(window.location.search);
    const jwtToken = urlParams.get('jwtToken');
    const refreshToken = urlParams.get('refreshToken');
  
    if (jwtToken && refreshToken) {
      // 토큰을 localStorage에 저장
      localStorage.setItem('jwtToken', jwtToken);
      localStorage.setItem('refreshToken', refreshToken);

      // 토큰이 URL에 있을 경우, URL을 정리 (토큰이 없는 상태로 URL을 유지)
      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState(null, '', newUrl);
    }
  }, []);
  
  return (
    <Container>
      <ChickenChestWrapper>
        <IconCategory />
        {/* 나중에 map을 통해 IconCategory 컴포넌트를 4개로 늘릴 수 있음 */}
      </ChickenChestWrapper>
      <ProductSlider title="나의 북마크 제품들" />
      <ProductSlider title="오늘의 최저가" />
      <ProductSlider title="고객님 맞춤 상품 추천" />
    </Container>
  );
};

export default MainPage;
