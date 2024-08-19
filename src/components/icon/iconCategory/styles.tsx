import styled from 'styled-components';

export const ItemContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ChickenImage = styled.img`
  width: 60%;
  height: 60%;
  object-fit: contain;
`;

export const Label = styled.div`
  font-size: 12px;
  color: #333;
  text-align: center;
`;
