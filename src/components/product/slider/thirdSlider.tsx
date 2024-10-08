import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import {
  SwiperSlideStyled,
  ItemDetails,
  ItemImage,
  ItemName,
  OriginalPrice,
  DiscountRate,
  SalePrice
} from './styles';
import { Title } from '../productSlider/styles';
import { useNavigate } from 'react-router-dom';

interface ThirdSliderProps {
  items: {
    id: number;
    name: string;
    image: string;
    originalPrice: number;
    salePrice: number;
    discountRate: number;
  }[];
  title: string;
}

const ThirdSlider: React.FC<ThirdSliderProps> = ({ items, title }) => {
  const navigate = useNavigate();

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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Title onClick={handleTitleClick}>{title}</Title>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        style={{ width: '300px', height: '360px', overflow: 'hidden' }} // Updated to hide overflow
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <SwiperSlideStyled>
              <ItemImage src={item.image} alt={item.name} />
              <ItemDetails>
                <ItemName>{item.name}</ItemName>
                <OriginalPrice>
                  원가: {item.originalPrice.toLocaleString()}원
                </OriginalPrice>
                <DiscountRate>할인율: {item.discountRate}%</DiscountRate>
                <SalePrice>
                  판매가: {item.salePrice.toLocaleString()}원
                </SalePrice>
              </ItemDetails>
            </SwiperSlideStyled>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThirdSlider;
