import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { BookmarkBorder, Bookmark } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  ImageContainer,
  InfoContainer,
  // BookmarkContainer,
  PriceContainer,
  PriceText,
  SmallText,
  // BookmarkCount,
  BookmarkCountWrapper
} from './styles';

type Props = {
  id: number;
  image: string;
  price: number; // 가격변수 고치기
  // per100gPrice: string; // 주석 처리: API에서 제공되지 않음
  name: string;
  shipping: string;
  // rating: number; // 주석 처리: 하드코딩된 값이므로 주석 처리
  // bookmarkCount: number; // 주석 처리: 하드코딩된 값이므로 주석 처리
};

const CategoryList = ({
  id,
  image,
  name,
  price,
  // per100gPrice,
  shipping
  // rating,
  // bookmarkCount
}: Props) => {
  const [bookmarked, setBookmarked] = useState(false);
  // const [bookmarkCount, setBookmarkCount] = useState<number>(0);
  const navigate = useNavigate();

  const handleBookmarkClick = () => {
    setBookmarked((prev) => !prev);
    // setBookmarkCount((prevCount) =>
    //   bookmarked ? prevCount - 1 : prevCount + 1
    // );
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
        {/* <SmallText>[100g 당 {per100gPrice}원]</SmallText> */}
        <SmallText>{'배송비 : ' + shipping}</SmallText>

        <BookmarkCountWrapper>
          <IconButton
            onClick={handleBookmarkClick}
            style={{ paddingLeft: '10px' }}
          >
            {bookmarked ? <Bookmark /> : <BookmarkBorder />}
          </IconButton>
          {/* <BookmarkCount>{bookmarkCount}</BookmarkCount> */}
        </BookmarkCountWrapper>

        {/* <BookmarkContainer onClick={(e) => e.stopPropagation()}>
          <Rating value={rating} readOnly />
        </BookmarkContainer> */}
      </InfoContainer>
    </Container>
  );
};

export default CategoryList;
