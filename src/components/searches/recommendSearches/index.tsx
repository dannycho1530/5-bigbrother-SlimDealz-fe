import React from 'react';
import { AutoCompleteItem, AutoCompleteList } from './styles';

type RecommendSearchProps = {
  onSearch: (word: string) => void; // SearchBar로 검색어를 전달하기 위한 콜백
};

const RecommendSearch: React.FC<RecommendSearchProps> = ({ onSearch }) => {
  // 목업 데이터 (추천 검색어)
  const words = [
    '닭가슴살',
    '닭가슴살 샐러드',
    '닭가슴살 요리법',
    '닭가슴살 도시락',
    '닭가슴살 칼로리',
    '닭가슴살 다이어트',
    '닭가슴살 구매처',
    '닭가슴살 영양성분',
    '닭가슴살 소스',
    '닭가슴살 배달'
  ];

  return (
    <>
      {words.length > 0 && (
        <AutoCompleteList>
          {words.map((word, index) => (
            <AutoCompleteItem key={index} onClick={() => onSearch(word)}>
              {word}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      )}
    </>
  );
};

export default RecommendSearch;
