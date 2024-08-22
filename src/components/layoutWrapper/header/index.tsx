import React, { forwardRef } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SearchBar from './SearchBar';
import {
  HeaderContainer,
  IconContainer,
  LogoContainer,
  SearchContainer,
  PageTitle
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

const logo = '/assets/logo.png';

type HeaderProps = {
  pageTitle?: string;
  onBackNavigation?: () => void;
};

const Header = forwardRef<HTMLDivElement, HeaderProps>(({ pageTitle }, ref) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isMainPage = location.pathname === '/';
  const isCategoryPage = location.pathname.startsWith('/category');
  const isProductPage = /^\/product\/\d+$/.test(location.pathname);
  const isSpecialPage =
    ['/searchInitial', '/searchResults'].some((path) =>
      location.pathname.startsWith(path)
    ) || isProductPage;

  const isSimplePage = [
    '/alarm',
    '/bookmark',
    '/myPage',
    '/information',
    '/recentlyView',
    '/signUp',
    '/signIn'
  ].includes(location.pathname);

  const hasLogo = isMainPage || isCategoryPage;

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer ref={ref} $hasLogo={hasLogo}>
      {(isSpecialPage || isSimplePage || !isMainPage) && (
        <IconContainer onClick={handleBackClick} $isHidden={isMainPage}>
          <ArrowBackRoundedIcon style={{ cursor: 'pointer' }} />
        </IconContainer>
      )}
      <LogoContainer
        $isCentered={isMainPage || isCategoryPage}
        $isSpecialPage={isSpecialPage}
        $isSimplePage={isSimplePage}
      >
        {hasLogo && (
          <img
            src={logo}
            alt="Slimdealz logo"
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          />
        )}
      </LogoContainer>
      {isSimplePage && !isCategoryPage && (
        <PageTitle $isSpecialPage={isSpecialPage} $isSimplePage={isSimplePage}>
          {pageTitle}
        </PageTitle>
      )}
      {(isMainPage || isCategoryPage || isSpecialPage) && (
        <SearchContainer
          $isSpecialPage={isSpecialPage}
          $isSimplePage={isSimplePage}
        >
          <SearchBar />
        </SearchContainer>
      )}
    </HeaderContainer>
  );
});

export default Header;
