import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 390px;
  height: 100px;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    height: 30px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  position: relative;
  top: 40px;
  right: 325px;
`;
