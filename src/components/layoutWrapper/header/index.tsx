import React, { useState, forwardRef } from 'react';
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

const slimdealzlogo = '/assets/slimdealzlogo2.png';

type HeaderProps = {
  pageTitle?: string;
  onBackNavigation?: () => void;
};

const Header = forwardRef<HTMLDivElement, HeaderProps>(({ pageTitle }, ref) => {
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (value: string) => {
    navigate(`/searchResults/${encodeURIComponent(value)}`);
  };

  const handleLogoClick = () => {
    navigate('/main');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const isMainPage = location.pathname === '/main';
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

  return (
    <HeaderContainer ref={ref}>
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
        {(isMainPage || isCategoryPage) && (
          <img
            src={slimdealzlogo}
            alt="Slimdealz logo"
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          />
        )}
      </LogoContainer>
      {isSimplePage && !isCategoryPage && (
        <PageTitle $isSpecialPage={isSpecialPage} $isSimplePage={isSimplePage}>
          {pageTitle || 'Page Title'}
        </PageTitle>
      )}
      {(isMainPage || isCategoryPage || isSpecialPage) && (
        <SearchContainer
          $isSpecialPage={isSpecialPage}
          $isSimplePage={isSimplePage}
        >
          <SearchBar
            searchValue={searchValue}
            onSearchChange={handleSearchChange}
            onSearch={handleSearch}
          />
        </SearchContainer>
      )}
    </HeaderContainer>
  );
});

export default React.memo(Header);
