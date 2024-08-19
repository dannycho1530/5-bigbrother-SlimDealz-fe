import React from 'react';

interface ProductPriceProps {
  discountRate: number;
  discountedPrice: number;
  originalPrice: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({
  discountRate,
  discountedPrice,
  originalPrice
}) => {
  return (
    <div>
      <p>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
          {discountRate}%{'  '}
        </span>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
          {discountedPrice}원{'  '}
        </span>
        <span
          style={{
            fontSize: '14px',
            textDecoration: 'line-through',
            color: 'grey'
          }}
        >
          {originalPrice}원
        </span>
      </p>
    </div>
  );
};

export default ProductPrice;
