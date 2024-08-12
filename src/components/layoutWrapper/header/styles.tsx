import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 390px;
  height: 100px;
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
  flex-grow: 1;
  display: ${({ $isSpecialPage, $isSimplePage }) =>
    $isSpecialPage || $isSimplePage ? 'none' : 'flex'};
  align-items: center;
  justify-content: ${({ $isCentered }) =>
    $isCentered ? 'center' : 'flex-start'};

  img {
    width: 300px;
    height: 30px;
  }
`;

export const SearchContainer = styled.div<{
  $isSpecialPage: boolean;
  $isSimplePage: boolean;
}>`
  flex-grow: 2;
  display: ${({ $isSimplePage }) => ($isSimplePage ? 'none' : 'flex')};
  position: relative;
  top: ${({ $isSpecialPage }) => ($isSpecialPage ? 'none' : '40px')};
  right: ${({ $isSpecialPage }) => ($isSpecialPage ? '0' : '325px')};
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
