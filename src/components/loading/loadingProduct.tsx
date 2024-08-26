import React from 'react';
import { styles } from './styles';

const LoadingProduct: React.FC = () => {
  return (
    <div style={styles.productContainer}>
      <video autoPlay loop muted style={styles.productVideo}>
        <source src="/public/assets/loading.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoadingProduct;
