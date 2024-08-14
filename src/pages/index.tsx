import Footer from '../components/layoutWrapper/footer';
import Header from '../components/layoutWrapper/header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 390px;
  height: 100vh;
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
