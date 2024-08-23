import React, { useRef, useState } from 'react';
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
import Skeleton from '@mui/material/Skeleton';
import { getNumberWithComma } from '@/components/utils/conversion';

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
    if (title === 'MY BOOKMARKS') {
      navigate(`/bookmark`);
    } else if (title === '최저가') {
      navigate(`/lowest-price`);
    } else if (title === '맞춤상품추천') {
      navigate(`/recommended`);
    }
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Container>
      <Title onClick={handleTitleClick}>{title}</Title>
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
                  <div>원가: {getNumberWithComma(product.originalPrice)}원</div>
                  <div>할인율: {product.discountRate}%</div>
                  <div>판매가: {getNumberWithComma(product.salePrice)}원</div>
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

const ImageWithSkeleton = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <Skeleton
          variant="rectangular"
          width={200}
          height={200}
          animation="wave"
        />
      )}
      <ProductImage
        src={src}
        alt={alt}
        style={{ display: loaded ? 'block' : 'none' }}
        onLoad={() => setLoaded(true)}
        width={150}
        height={150}
      />
    </>
  );
};

export default ProductSlider;
