import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--background-color);
  position: relative;

  &:hover .arrow {
    opacity: 1;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const ProductSliderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--background-color);
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
