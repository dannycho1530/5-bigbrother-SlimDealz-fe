import React, { forwardRef, useContext } from 'react';
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
import { SearchContext } from '../../../components/utils/searchContext';

const logo = '/assets/logo.png';

type HeaderProps = {
  pageTitle?: string;
  onBackNavigation?: () => void;
};

const Header = forwardRef<HTMLDivElement, HeaderProps>(({ pageTitle }, ref) => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext); // useContext로 전역 상태 사용
  const navigate = useNavigate();
  const location = useLocation();

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

  const hasLogo = isMainPage || isCategoryPage;

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
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
          <SearchBar
            searchValue={searchQuery} // 전역 상태 사용
            onSearchChange={handleSearchChange}
            onSearch={handleSearch}
          />
        </SearchContainer>
      )}
    </HeaderContainer>
  );
});

export default React.memo(Header);
