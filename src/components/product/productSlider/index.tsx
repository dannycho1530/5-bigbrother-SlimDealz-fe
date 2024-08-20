import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ProductSliderContainer,
  Title,
  ProductsWrapper,
  ProductItem,
  ProductImage,
  PriceInfo
} from './styles';
import { LeftArrow, RightArrow } from '../../../components/utils/arrow';

const mockProducts = [
  {
    id: 1,
    image: 'https://via.placeholder.com/200',
    originalPrice: 10000,
    discountRate: 30,
    salePrice: 7000
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/200',
    originalPrice: 15000,
    discountRate: 20,
    salePrice: 12000
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/200',
    originalPrice: 20000,
    discountRate: 50,
    salePrice: 10000
  }
];

type Props = {
  title: string;
};

const ProductSlider = ({ title }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleTitleClick = () => {
    // title에 따라 다른 페이지로 이동하도록 설정
    if (title === 'MY BOOKMARKS') {
      navigate(`/bookmark`);
    } else if (title === '최저가') {
      navigate(`/lowest-price`);
    } else if (title === '맞춤상품추천') {
      navigate(`/recommended`);
    }
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`); // 해당 아이템의 상세 페이지로 이동
  };

  return (
    <Container>
      <Title onClick={handleTitleClick}>{title}</Title>
      <ProductSliderContainer>
        <LeftArrow onClick={scrollLeft} />
        <ProductsWrapper ref={scrollRef}>
          {mockProducts.map((product) => (
            <ProductItem
              key={product.id}
              onClick={() => handleProductClick(product.id)}
            >
              <ProductImage src={product.image} alt={`Product ${product.id}`} />
              <PriceInfo>
                <div>원가: {product.originalPrice.toLocaleString()}원</div>
                <div>할인율: {product.discountRate}%</div>
                <div>판매가: {product.salePrice.toLocaleString()}원</div>
              </PriceInfo>
            </ProductItem>
          ))}
        </ProductsWrapper>
        <RightArrow onClick={scrollRight} />
      </ProductSliderContainer>
    </Container>
  );
};

export default ProductSlider;
