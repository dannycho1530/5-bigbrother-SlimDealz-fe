import React from 'react';
import IconCategory from '../../components/icon/iconCategory';
import ProductSlider from '../../components/product/productSlider';
import { Container, ChickenChestWrapper } from './styles';

const MainPage = () => {
  return (
    <Container>
      <ChickenChestWrapper>
        <IconCategory />
        {/* 나중에 map을 통해 IconCategory 컴포넌트를 4개로 늘릴 수 있음 */}
      </ChickenChestWrapper>
      <ProductSlider title="MY BOOKMARKS" />
      <ProductSlider title="오늘의 최저가" />
      <ProductSlider title="고객님 맞춤 상품 추천" />
    </Container>
  );
};

export default MainPage;
