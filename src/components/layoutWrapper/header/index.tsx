import React, { useState } from 'react';
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
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate('/main');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = (value: string) => {
    // 검색을 처리하는 로직 추가
    console.log(`Search for: ${value}`);
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
      {(isSpecialPage || !isMainPage) && (
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
      {!isMainPage && !isCategoryPage && (
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
};

export default Header;
