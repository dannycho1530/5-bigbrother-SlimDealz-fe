import React, { useState, useEffect } from 'react';
import ProductBookmark from './infoUtils/productBookmark';
import ProductPrice from './infoUtils/productPrice';
import ProductUrl from './infoUtils/productUrl';
import {
  ProductInfoContainer,
  PriceInfoContainer,
  ProductInfoOptionContainer,
  ProductBookmarkContainer,
  ProductUrlContainer
} from './styles';

interface ProductInfoProps {
  originalPrice: number;
  productName: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  originalPrice,
  productName
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <ProductInfoContainer>
      {/* <RateInfoContainer>
        <ProductRating />
        <ReviewCount count={1000} />
      </RateInfoContainer> */}
      <PriceInfoContainer>
        <ProductPrice originalPrice={originalPrice} />
        <ProductInfoOptionContainer>
          {isAuthenticated && (
            <ProductBookmarkContainer>
              <ProductBookmark productName={productName} />
            </ProductBookmarkContainer>
          )}
          <ProductUrlContainer>
            <ProductUrl />
          </ProductUrlContainer>
        </ProductInfoOptionContainer>
      </PriceInfoContainer>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
