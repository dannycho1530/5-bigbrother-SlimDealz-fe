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

interface ProductInfoProps {
  originalPrice: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ originalPrice }) => {
  return (
    <ProductInfoContainer>
      {/* <RateInfoContainer>
        <ProductRating />
        <ReviewCount count={1000} />
      </RateInfoContainer> */}
      <PriceInfoContainer>
        <ProductPrice originalPrice={originalPrice} />
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
