import React, { useState } from 'react';
import { Rating, IconButton } from '@mui/material';
import { BookmarkBorder, Bookmark } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ImageContainer,
  InfoContainer,
  PriceContainer,
  BookmarkContainer,
  PriceText,
  SmallText,
  BookmarkCount,
  BookmarkCountWrapper
} from './styles';

type Props = {
  id: number;
  image: string;
  name: string;
  price: number;
  per100gPrice: string;
  shipping: string;
  rating: number;
  bookmarkCount: number;
};

const CategoryList = ({
  id,
  image,
  name,
  price,
  per100gPrice,
  shipping,
  rating,
  bookmarkCount: initialBookmarkCount
}: Props) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkCount, setBookmarkCount] =
    useState<number>(initialBookmarkCount);
  const navigate = useNavigate();

  const handleBookmarkClick = () => {
    setBookmarked((prev) => !prev);
    setBookmarkCount((prevCount) =>
      bookmarked ? prevCount - 1 : prevCount + 1
    );
  };

  const handleClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Container onClick={() => handleClick(id)}>
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
          <Rating value={rating} readOnly />
          <BookmarkCountWrapper>
            <IconButton
              onClick={handleBookmarkClick}
              style={{ paddingLeft: '10px' }}
            >
              {bookmarked ? <Bookmark /> : <BookmarkBorder />}
            </IconButton>
            <BookmarkCount>{bookmarkCount}</BookmarkCount>
          </BookmarkCountWrapper>
        </BookmarkContainer>
      </InfoContainer>
    </Container>
  );
};

export default CategoryList;
