import React from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import SearchBar from './SearchBar';
import {
  HeaderContainer,
  IconContainer,
  LogoContainer,
  PageTitle,
  SearchContainer
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

const slimdealzlogo = '/assets/slimdealzlogo2.png';

type HeaderProps = {
  pageTitle?: string;
};

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate('/main');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const isMainPage = location.pathname === '/main';
  const isCategoryPage = location.pathname.startsWith('/category');
  const isSpecialPage = ['/searchInitial', '/searchResults'].some((path) =>
    location.pathname.startsWith(path)
  );
  const isSimplePage = [
    '/alarm',
    '/bookmark',
    '/information',
    '/recentlyView',
    '/signUp',
    '/signIn'
  ].includes(location.pathname);

  return (
    <HeaderContainer>
      <IconContainer onClick={handleBackClick} $isHidden={isMainPage}>
        <ArrowBackRoundedIcon style={{ cursor: 'pointer' }} />
      </IconContainer>
      <LogoContainer
        $isCentered={isMainPage || isCategoryPage}
        $isSpecialPage={isSpecialPage}
        $isSimplePage={isSimplePage}
      >
        {(isMainPage || isCategoryPage) && (
          <img
            src={slimdealzlogo}
            alt="Slimdealz logo"
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          />
        )}
      </LogoContainer>
      {/* Conditionally render PageTitle except on category page */}
      {!isCategoryPage && (
        <PageTitle $isSpecialPage={isSpecialPage} $isSimplePage={isSimplePage}>
          {pageTitle || 'Page Title'}
        </PageTitle>
      )}
      <SearchContainer
        $isSpecialPage={isSpecialPage}
        $isSimplePage={isSimplePage}
      >
        <SearchBar />
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
