import React from 'react';
import { Container } from './styles';
import { useParams } from 'react-router-dom';
import PriceAlertSetting from '../../components/priceAlertSetting';

const DetailPage = () => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <Container>
      <PriceAlertSetting />
    </Container>
  );
};

export default DetailPage;
