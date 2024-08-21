import React from 'react';
import IconCategory from '../../components/icon/iconCategory';
import ProductSlider from '../../components/product/productSlider';
import { Container, ChickenChestWrapper } from './styles';
import Banner from '../../components/layoutWrapper/banner';
import ThirdSlider from '@/components/product/slider/thirdSlider';

const MainPage = () => {
  const recommendedItems = [
    {
      id: 1,
      name: '훈제 닭가슴살 샌드위치',
      image:
        'https://img.danawa.com//prod_img/500000/813/716/img/18716813_1.jpg',
      originalPrice: 10000,
      salePrice: 7000,
      discountRate: 30
    },
    {
      id: 2,
      name: '그릴드 치킨 샐러드',
      image:
        'https://img.danawa.com//prod_img/500000/813/716/img/18716813_1.jpg',
      originalPrice: 12000,
      salePrice: 9000,
      discountRate: 25
    },
    {
      id: 3,
      name: '닭가슴살 크림 파스타',
      image:
        'https://img.danawa.com//prod_img/500000/813/716/img/18716813_1.jpg',
      originalPrice: 15000,
      salePrice: 10500,
      discountRate: 30
    },
    {
      id: 4,
      name: '치킨 라이스 볼',
      image:
        'https://img.danawa.com//prod_img/500000/813/716/img/18716813_1.jpg',
      originalPrice: 8000,
      salePrice: 6400,
      discountRate: 20
    },
    {
      id: 5,
      name: '닭가슴살 샌드위치',
      image:
        'https://img.danawa.com//prod_img/500000/813/716/img/18716813_1.jpg',
      originalPrice: 7000,
      salePrice: 5600,
      discountRate: 20
    }
  ];

  return (
    <>
      <Banner />
      <Container>
        <ChickenChestWrapper>
          <IconCategory />
          {/* 나중에 map을 통해 IconCategory 컴포넌트를 4개로 늘릴 수 있음 */}
        </ChickenChestWrapper>
        <ProductSlider title="MY BOOKMARKS" />
        <ProductSlider title="오늘의 최저가" />
        <ThirdSlider items={recommendedItems} title="고객님 맞춤 상품 추천" />
        {/* <ThirdSlider items={recommendedItems} /> */}
      </Container>
    </>
  );
};

export default MainPage;
