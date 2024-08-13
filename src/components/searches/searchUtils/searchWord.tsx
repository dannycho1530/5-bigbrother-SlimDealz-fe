import React, { useState } from 'react';
import { styled } from 'styled-components';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

type Props = {
  searchWord: string;
  isPopular?: boolean; // 인기 검색어 여부를 나타내는 선택적 prop
};

const SearchWord = ({
  searchWord: initialSearchWord,
  isPopular = false
}: Props) => {
  const [isVisible, setIsVisible] = useState(true); // 컴포넌트의 가시성 상태 관리
  const [searchWord, setSearchWord] = useState(initialSearchWord);

  const handleClear = () => {
    setIsVisible(false); // 컴포넌트를 삭제하여 화면에서 숨김
  };

  if (!isVisible) return null; // isVisible이 false일 경우 아무것도 렌더링하지 않음

  const displayedWord =
    searchWord.length > 10 ? searchWord.slice(0, 10) + '...' : searchWord;

  const Container = isPopular ? RankWordContainer : SearchWordContainer;

  return (
    <Container>
      <WordTextContainer>{displayedWord}</WordTextContainer>
      <IconContainer onClick={handleClear}>
        <ClearRoundedIcon sx={{ fontSize: 15, display: 'none' }} />{' '}
        {/* 아이콘 숨김 */}
      </IconContainer>
    </Container>
  );
};

export default SearchWord;

export const SearchWordContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  height: 30px;
  padding: 5px 10px 5px 15px;
  border-radius: 10px;
  background-color: #f2f2f7;
`;

const RankWordContainer = styled(SearchWordContainer)`
  width: 140px;
  background-color: #f2f2f7;
`;

const WordTextContainer = styled.div`
  text-align: left;
  font-size: 12px;
  color: black;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
