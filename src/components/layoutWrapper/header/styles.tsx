import styled from 'styled-components';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 390px;
  min-height: 8vh;
  height: auto;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  background-color: #c0f9a9;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
`;

export const IconContainer = styled.div<{
  $isHidden: boolean;
  $isSpecialPage?: boolean; // 이 부분을 수정하여 선택적 props로 만듦
}>`
  display: ${({ $isHidden }) => ($isHidden ? 'none' : 'flex')};
  align-items: center;
  justify-content: flex-start;
  margin: 5px;
  position: absolute;
  padding-top: 5px;
  left: ${({ $isSpecialPage }) =>
    $isSpecialPage ? '20px' : '10px'}; /* 간격 조정 */
  top: 15px;
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
  width: 100%;
  margin-top: 20px;

  img {
    width: 200px;
    height: auto;
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
  padding: 10px 20px 0px; /* 패딩을 조정하여 검색바 위치 조정 */
  box-sizing: border-box;
  margin-top: 10px; /* 로고와의 간격을 조정 */

  ${({ $isSpecialPage }) =>
    $isSpecialPage &&
    `
      margin-left: auto; /* DetailPage에서 검색 버튼 위치 조정 */
    `}
`;

export const PageTitle = styled.div<{
  $isSpecialPage: boolean;
  $isSimplePage: boolean;
}>`
  display: ${({ $isSimplePage, $isSpecialPage }) =>
    $isSimplePage ? 'flex' : $isSpecialPage ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 380px;
  height: 30px;
  font-size: 20px;
  font-weight: 20px;
  padding-top: 35px;
  padding-bottom: 20px;
  margin: 5px;

  ${({ $isSimplePage }) =>
    $isSimplePage &&
    `
      display: flex;
      justify-content: center;
    `}
`;
export const AutoCompleteList = styled.ul`
  margin-top: 100px;
  padding: 10px;
  list-style-type: none;
  position: absolute;
  width: 390px;
  height: auto;
  overflow-y: auto;
  z-index: 1;
  background-color: #d9d9d9;
`;

export const AutoCompleteItem = styled.li`
  padding: 10px;
  border-radius: 25px;
  background-color: #f2f2f7;
  margin-bottom: 10px;
  font-size: 12px;
  cursor: pointer; /* Add a cursor pointer to indicate it's clickable */
  &:last-child {
    border-bottom: none;
  }
`;
