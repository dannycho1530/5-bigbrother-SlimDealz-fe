import React from 'react';
import { Container } from './styles';
import { useParams } from 'react-router-dom';
import PriceAlertSetting from '../../components/priceAlertSetting';
import TabsComponent from '../../components/tab';

const DetailPage = () => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <Container>
      <PriceAlertSetting />
      <TabsComponent />
    </Container>
  );
};

export default DetailPage;
