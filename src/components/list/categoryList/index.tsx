import React, { useState } from 'react';
import { Rate, Button } from 'antd';
import { BookOutlined, BookFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ImageContainer,
  InfoContainer,
  PriceContainer,
  BookmarkContainer,
  PriceText,
  SmallText
} from './styles';

type CategoryListProps = {
  image: string;
  name: string;
  brand: string;
  price: number;
  per100gPrice: string;
  shipping: string;
  rating: number;
  bookmarkCount: number;
};

const CategoryList: React.FC<CategoryListProps> = ({
  image,
  name,
  brand,
  price,
  per100gPrice,
  shipping,
  rating,
  bookmarkCount
}) => {
  const [bookmarked, setBookmarked] = useState(false);
  const navigate = useNavigate();

  const handleBookmarkClick = () => {
    setBookmarked((prev) => !prev);
  };

  const handleClick = () => {
    navigate('/detail');
  };

  return (
    <Container onClick={handleClick}>
      <ImageContainer>
        <img
          src={image}
          alt={name}
          style={{ width: '100%', height: '100%', borderRadius: '10px' }}
        />
      </ImageContainer>
      <InfoContainer>
        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{name}</div>
        <PriceContainer>
          <PriceText>{price.toLocaleString()}원</PriceText>
        </PriceContainer>
        <SmallText>[100g 당 {per100gPrice}원]</SmallText>
        <SmallText>{shipping}</SmallText>
        <BookmarkContainer onClick={(e) => e.stopPropagation()}>
          <Rate disabled defaultValue={rating} />
          <Button
            type="text"
            icon={bookmarked ? <BookFilled /> : <BookOutlined />}
            onClick={handleBookmarkClick}
            style={{ fontSize: '16px', color: '#000', paddingLeft: '10px' }}
          >
            {bookmarkCount}
          </Button>
        </BookmarkContainer>
      </InfoContainer>
    </Container>
  );
};

export default CategoryList;
