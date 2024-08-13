import React from 'react';
import ImageComponent from '../imageView/ImageComponent'; // 이미지 컴포넌트 경로
import { ImageViewContainer } from './styles';

const ImageView: React.FC = () => {
  return (
    <ImageViewContainer>
      <ImageComponent
        src="../assets/slimdealzlogo.png" // 이미지 경로 (public 폴더라면 절대경로 사용)
        alt="Example"
        width="300px"
        height="auto"
      />
    </ImageViewContainer>
  );
};

export default ImageView;
