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

type Product = {
  id: number;
  image: string;
  originalPrice: number;
  salePrice: number;
  discountRate: number;
};

type Props = {
  title: string;
  products?: Product[]; // API로 받은 제품들을 받을 수 있도록 props 추가
};

const ProductSlider = ({ title, products = [] }: Props) => {
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
    if (title === '나의 북마크 제품들') {
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
      <Title onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
        {title}
      </Title>
      <ProductSliderContainer>
        <LeftArrow onClick={scrollLeft} />
        <ProductsWrapper ref={scrollRef}>
          {products.length > 0 ? (
            products.map((product) => (
              <ProductItem
                key={product.id}
                onClick={() => handleProductClick(product.id)}
              >
                <ImageWithSkeleton
                  src={product.image}
                  alt={`Product ${product.id}`}
                />
                <PriceInfo>
                  <div>원가: {product.originalPrice.toLocaleString()}원</div>
                  <div>할인율: {product.discountRate}%</div>
                  <div>판매가: {product.salePrice.toLocaleString()}원</div>
                </PriceInfo>
              </ProductItem>
            ))
          ) : (
            <div>상품 정보를 불러오는 중입니다...</div>
          )}
        </ProductsWrapper>
        <RightArrow onClick={scrollRight} />
      </ProductSliderContainer>
    </Container>
  );
};

export default ProductSlider;
