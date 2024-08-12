import { Container } from './styles';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  return (
    <Container>
      <h1>Product Detail Page</h1>
      <p>Product ID: {productId}</p>
    </Container>
  );
};

export default DetailPage;
