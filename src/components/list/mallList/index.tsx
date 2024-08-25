import React, { useEffect, useState } from 'react';
import {
  Container,
  MallItem,
  MallLogo,
  MallInfo,
  MallPrice,
  Coupon
} from './styles';
import { getNumberWithComma } from '@/components/utils/conversion';
import axios from 'axios';

interface ProductData {
  name: string;
  prices?: { setPrice: number }[];
}

interface TabsComponentProps {
  productData: ProductData;
}
const MallList: React.FC<TabsComponentProps> = ({ productData }) => {
  const { name: productName, prices } = productData; // productData에서 필요한 정보 추출
  const [mallData, setMallData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMallData = async () => {
      try {
        const response = await axios.get(`/api/v1/vendor-list`, {
          params: { productName } // 쿼리 파라미터로 상품명 전달
        });
        setMallData(response.data);
      } catch (err) {
        console.log('데이터를 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchMallData();
  }, [productName]);

  if (loading) return <div>로딩 중...</div>;

  return (
    <Container>
      {mallData.map((item) => (
        <MallItem key={productName}>
          {/* <MallLogo src={item.logo} alt={item.name} /> */}
          <MallInfo>
            <div>{productName}</div>
            <MallPrice>
              {prices && prices.length > 0
                ? `${getNumberWithComma(prices[0].setPrice)}원`
                : '가격 없음'}
            </MallPrice>
          </MallInfo>
          {/* {item.coupon && <Coupon>{item.coupon}</Coupon>} */}
        </MallItem>
      ))}
    </Container>
  );
};

export default MallList;
