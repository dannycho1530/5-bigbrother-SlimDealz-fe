import Footer from '../components/layoutWrapper/footer';
import Header from '../components/layoutWrapper/header';
import { Outlet, useLocation } from 'react-router-dom';

const OutLetContainer = () => {
  const location = useLocation();
  let pageTitle = '';

  if (location.pathname.includes('/bookmark')) {
    pageTitle = '북마크';
  } else if (location.pathname.includes('/myPage')) {
    pageTitle = '마이페이지';
  } else if (location.pathname.includes('/alarm')) {
    pageTitle = '알람';
  }
  return (
    <div>
      <Header pageTitle={pageTitle} />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default OutLetContainer;
