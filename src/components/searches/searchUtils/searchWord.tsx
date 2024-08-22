import React, { useState } from 'react';
import { styled } from 'styled-components';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

type Props = {
  searchWord: string;
  isPopular?: boolean; // 인기 검색어 여부를 나타내는 선택적 prop
  showClearIcon?: boolean; // RecentSearch에서 사용할 때만 아이콘을 노출하는 prop
};

const SearchWord = ({
  searchWord: initialSearchWord,
  isPopular = false,
  showClearIcon = false // 기본값은 false
}: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [searchWord, setSearchWord] = useState(initialSearchWord);

  const handleClear = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const displayedWord =
    searchWord.length > 16 ? searchWord.slice(0, 16) + '...' : searchWord;

  const Container = isPopular ? RankWordContainer : SearchWordContainer;

  return (
    <Container>
      <WordTextContainer>{displayedWord}</WordTextContainer>
      {showClearIcon && ( // showClearIcon이 true일 때만 아이콘을 노출
        <IconContainer onClick={handleClear}>
          <ClearRoundedIcon sx={{ fontSize: 15 }} />
        </IconContainer>
      )}
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
