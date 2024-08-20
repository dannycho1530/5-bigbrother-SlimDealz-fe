import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--background-color);
  position: relative;
`;

export const Title = styled.h2`
  color: #efcaca;
  transition: all 0.3s;
  position: relative;
  line-height: 50px;
  height: 50px;
  text-align: center;
  width: 250px;
  cursor: pointer;
  font-family: 'Open Sans Condensed', sans-serif;
  text-transform: uppercase;
  background-color: rgba(255, 255, 255, 0.8); /* 배경색 추가로 가독성 향상 */
  padding: 10px; /* 텍스트와 테두리 사이의 간격 추가 */
  border-radius: 5px; /* 부드러운 모서리를 위한 둥근 테두리 */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* 약간의 그림자 추가 */
  margin: 20px auto; /* 양옆을 기준으로 가운데 정렬 및 위아래 여백 추가 */

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    transition: all 0.3s;
    display: inline-block;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: rgba(239, 202, 202, 0.7); /* 강조된 색상 */
    border-bottom-color: rgba(239, 202, 202, 0.7); /* 강조된 색상 */
    transform: scale(0.1, 1);
  }

  &:hover span {
    letter-spacing: 2px;
    color: #d4b0b0; /* hover 시 색상 변경 */
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1, 1);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: rgba(239, 202, 202, 0.1); /* 더 연한 강조된 색상 */
  }

  &:hover::after {
    opacity: 0;
    transform: scale(0.1, 1);
  }
`;

export const ProductSliderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--background-color);

  &:hover .arrow {
    opacity: 1;
  }
`;

export const ProductsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  scroll-snap-type: x mandatory;
`;

export const ProductItem = styled.div`
  flex: none;
  width: 200px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
  transform-origin: top;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05);
  }

  scroll-snap-align: start;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

export const PriceInfo = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
`;
