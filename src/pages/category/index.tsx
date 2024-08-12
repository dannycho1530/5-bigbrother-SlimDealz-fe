import React from 'react';
import { Container } from './styles';
import CategoryList from '../../components/list/categoryList';

const mockData = [
  {
    image: '/path/to/image1.jpg',
    name: '바르닭 수비드 닭가슴살 (5가지맛) 30종 허닭',
    brand: '바르닭',
    price: 999999,
    per100gPrice: '2,130',
    shipping: '무료 배송',
    rating: 4,
    bookmarkCount: 2145
  },
  {
    image: '/path/to/image2.jpg',
    name: '바르닭 소금구이 닭가슴살',
    brand: '바르닭',
    price: 150000,
    per100gPrice: '2,500',
    shipping: '무료 배송',
    rating: 5,
    bookmarkCount: 500
  }
];

const CategoryPage = () => {
  return (
    <Container>
      {mockData.map((item, index) => (
        <CategoryList key={index} {...item} />
      ))}
    </Container>
  );
};

export default CategoryPage;
