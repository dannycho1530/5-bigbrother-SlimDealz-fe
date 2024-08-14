import Footer from '../components/layoutWrapper/footer';
import Header from '../components/layoutWrapper/header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 390px;
  height: 100vh;
  padding-top: 120px;
  /* padding-bottom: 100px; Footer 높이만큼 패딩 추가 */
`;

const OutLetContainer = () => {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default OutLetContainer;
