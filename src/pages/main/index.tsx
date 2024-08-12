import ProductSlider from '../../components/product/productSlider';
import { Container } from './styles';

const MainPage = () => {
  return (
    <Container>
      <ProductSlider title="나의 북마크 제품들" />
    </Container>
  );
};

export default MainPage;
