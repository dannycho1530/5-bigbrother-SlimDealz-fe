import React from 'react';
import styled from 'styled-components';
import Footer from '../components/layoutWrapper/footer';
import Header from '../components/layoutWrapper/header';
import { Outlet, useLocation } from 'react-router-dom';
import { useHeaderHeight } from '@/components/utils/context/headerHeightContext';

const Container = styled.div<{ $paddingTop: number }>`
  width: 390px;
  height: auto;
  min-height: 100dvh;
  margin: 0 auto;
  padding-top: ${({ $paddingTop }) => `${$paddingTop}px`};
  padding-bottom: 50px;
  box-sizing: border-box;
  overflow-x: hidden;
  background-color: var(--background-color);
`;

const OutLetContainer = () => {
  const location = useLocation();
  const { height } = useHeaderHeight();

  let pageTitle = '';

  if (location.pathname.includes('/bookmark')) {
    pageTitle = 'BOOKMARKS';
  } else if (location.pathname.includes('/myPage')) {
    pageTitle = 'MY PAGE';
  } else if (location.pathname.includes('/alarm')) {
    pageTitle = '알람';
  } else if (location.pathname.includes('/information')) {
    pageTitle = '회원가입 추가 정보';
  }

  return (
    <>
      <Header pageTitle={pageTitle} />
      <Container $paddingTop={height}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default OutLetContainer;
