import styled from 'styled-components';

type BoxProps = {
  display?: string;
  width?: string;
  height?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string;
  [key: string]: any; // 추가적인 모든 스타일을 지원하기 위함
};

const Box = styled.div<BoxProps>`
  display: ${({ display }) => display || 'block'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;

export default Box;
