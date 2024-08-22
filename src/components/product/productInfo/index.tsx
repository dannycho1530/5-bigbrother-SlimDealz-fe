import ProductBookmark from './infoUtils/productBookmark';
import ProductPrice from './infoUtils/productPrice';
import ProductRating from './infoUtils/productRating';
import ProductUrl from './infoUtils/productUrl';
import ReviewCount from './infoUtils/reviewCount';
import {
  ProductInfoContainer,
  RateInfoContainer,
  PriceInfoContainer,
  ProductInfoOptionContainer,
  ProductBookmarkContainer,
  ProductUrlContainer
} from './styles';

const ProductInfo = () => {
  return (
    <ProductInfoContainer>
      {/* <RateInfoContainer>
        <ProductRating />
        <ReviewCount count={1000} />
      </RateInfoContainer> */}
      <PriceInfoContainer>
        <ProductPrice
          discountRate={10}
          discountedPrice={10000}
          originalPrice={11000}
        />
        <ProductInfoOptionContainer>
          <ProductBookmarkContainer>
            <ProductBookmark />
          </ProductBookmarkContainer>
          <ProductUrlContainer>
            <ProductUrl />
          </ProductUrlContainer>
        </ProductInfoOptionContainer>
      </PriceInfoContainer>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
