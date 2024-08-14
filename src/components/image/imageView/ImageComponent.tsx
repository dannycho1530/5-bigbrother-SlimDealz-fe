import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

const ImageComponent: React.FC<ImageProps> = ({ src, alt, width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: width || 'auto', height: height || 'auto' }}
    />
  );
};

export default ImageComponent;
