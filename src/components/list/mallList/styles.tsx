import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MallItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MallLogo = styled.img`
  width: 80px;
  height: 50px;
  object-fit: contain;
  margin-right: 10px;
`;

export const MallInfo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

export const MallPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

export const Coupon = styled.div`
  font-size: 12px;
  color: #ffffff;
  background-color: #ff6b6b;
  padding: 5px 10px;
  border-radius: 4px;
`;
