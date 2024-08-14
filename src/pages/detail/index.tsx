import React from 'react';
import { Container, Title } from './styles';
import { useParams } from 'react-router-dom';
import PriceAlertSetting from '../../components/priceAlertSetting';
import TabsComponent from '../../components/tab';
import ReviewList from '../../components/list/reviewList';

const DetailPage = () => {
  const { productId } = useParams<{ productId: string }>();

  return (
    <Container>
      <PriceAlertSetting />
      <TabsComponent />
      <Title>리뷰</Title>
      <ReviewList />
    </Container>
  );
};

export default DetailPage;
