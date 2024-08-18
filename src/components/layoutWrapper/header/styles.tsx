import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 390px;
  height: auto;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding-bottom: 20px;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
`;

export const IconContainer = styled.div<{ $isHidden: boolean }>`
  display: ${({ $isHidden }) => ($isHidden ? 'none' : 'flex')};
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const LogoContainer = styled.div<{
  $isCentered: boolean;
  $isSpecialPage: boolean;
  $isSimplePage: boolean;
}>`
  display: ${({ $isSpecialPage, $isSimplePage }) =>
    $isSpecialPage || $isSimplePage ? 'none' : 'flex'};
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  img {
    width: 300px;
    height: 30px;
  }
`;

export const SearchContainer = styled.div<{
  $isSpecialPage: boolean;
  $isSimplePage: boolean;
}>`
  display: ${({ $isSimplePage }) => ($isSimplePage ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px 20px 0px;
  box-sizing: border-box;
`;

export const PageTitle = styled.div<{
  $isSpecialPage: boolean;
  $isSimplePage: boolean;
}>`
  display: ${({ $isSimplePage, $isSpecialPage }) =>
    $isSimplePage ? 'flex' : $isSpecialPage ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 30px;
  font-size: 20px;
  font-weight: 20px;
  margin: 5px;
`;
