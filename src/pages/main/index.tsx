import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IconCategory from '../../components/icon/iconCategory';
import ProductSlider from '../../components/product/productSlider';
import { Container, ChickenChestWrapper } from './styles';
import Banner from '../../components/layoutWrapper/banner';
import ThirdSlider from '@/components/product/slider/thirdSlider';

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

  const [lowestProducts, setLowestProducts] = useState([]);

  useEffect(() => {
    const fetchLowestProducts = async () => {
      try {
        const response = await axios.get('/api/v1/today-lowest-products');
        const productData = response.data.map((product: any) => ({
          id: product.id,
          image: product.image,
          originalPrice: product.prices[0].setPrice,
          salePrice: product.prices[0].discountedPrice,
          discountRate: Math.round(
            ((product.prices[0].setPrice - product.prices[0].discountedPrice) /
              product.prices[0].setPrice) *
              100
          )
        }));
        setLowestProducts(productData);
      } catch (error: any) {
        if (error.response) {
          // 서버가 응답을 보냈지만 상태 코드가 2xx가 아닌 경우
          if (error.response.status === 404) {
            console.error('Product not found', error.response.data.message);
          } else if (error.response.status === 500) {
            console.error('Server error', error.response.data.message);
          } else {
            console.error('An unexpected error occurred:', error.response.data);
          }
        } else if (error.request) {
          // 요청이 이루어졌으나 서버로부터 응답이 없을 때
          console.error('No response received from server', error.request);
        } else {
          // 오류가 발생하여 요청이 보내지지 않은 경우
          console.error('Error setting up the request:', error.message);
        }
      }
    };

    fetchLowestProducts();
  }, []);

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
      <Banner></Banner>
      <Container>
        <ChickenChestWrapper>
          {/* 나중에 map을 통해 IconCategory 컴포넌트를 4개로 늘릴 수 있음 */}
          <IconCategory />
        </ChickenChestWrapper>
        <ProductSlider title="MY BOOKMARKS" />
        <ProductSlider title="오늘의 최저가" products={lowestProducts} />
        <ThirdSlider items={recommendedItems} title="고객님 맞춤 상품 추천" />
      </Container>
    </>
  );
};

export default MainPage;
