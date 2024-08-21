// import styled from 'styled-components';

// export const Container = styled.div``;


import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.button`
  align-self: flex-start;
  margin-bottom: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const Header = styled.h2`
  margin-bottom: 20px;
`;

export const Section = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  width: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    margin-bottom: 10px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #777;
  margin-bottom: 15px;
`;

export const KakaoButton = styled.button`
  background-color: #fee500;
  color: #000000;
  padding: 10px;
  width: 100%;
  border: 2px solid #ffde00;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-right: 8px;
  }

  &:hover {
    background-color: #ffde00;
  }
`;
