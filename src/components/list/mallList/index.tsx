import React from 'react';
import {
  Container,
  MallItem,
  MallLogo,
  MallInfo,
  MallPrice,
  Coupon
} from './styles';

const mockData = [
  {
    id: 1,
    logo: '/path/to/logo1.png',
    name: '쇼핑몰 1',
    price: 999999,
    coupon: '쿠폰 정보 1'
  },
  {
    id: 2,
    logo: '/path/to/logo2.png',
    name: '쇼핑몰 2',
    price: 899999,
    coupon: '' // 쿠폰 정보 없음
  },
  {
    id: 3,
    logo: '/path/to/logo3.png',
    name: '쇼핑몰 3',
    price: 799999,
    coupon: '쿠폰 정보 3'
  }
];

const MallList = () => {
  return (
    <Container>
      {mockData.map((item) => (
        <MallItem key={item.id}>
          <MallLogo src={item.logo} alt={item.name} />
          <MallInfo>
            <div>{item.name}</div>
            <MallPrice>{item.price.toLocaleString()}원</MallPrice>
          </MallInfo>
          {item.coupon && <Coupon>{item.coupon}</Coupon>}
        </MallItem>
      ))}
    </Container>
  );
};

export default MallList;
