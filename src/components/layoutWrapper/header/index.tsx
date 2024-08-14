import React, { useState } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SearchBar from './SearchBar';
import {
  HeaderContainer,
  IconContainer,
  LogoContainer,
  SearchContainer,
  PageTitle,
} from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

const slimdealzlogo = '/assets/slimdealzlogo2.png';

type HeaderProps = {
  pageTitle?: string;
  onBackNavigation?: () => void;
};

const Header: React.FC<HeaderProps> = ({ pageTitle, onBackNavigation }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchValue, setSearchValue] = useState('');

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
    if (onBackNavigation) {
      onBackNavigation();
    }
    navigate(-1);
  };

  const isMainPage = location.pathname === '/main';
  const isSpecialPage = ['/category', '/searchInitial', '/searchResults'].some(
    (path) => location.pathname.startsWith(path)
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
      
      {(isMainPage || isSpecialPage) && ( // 로고를 메인 페이지와 isSpecialPage인 경우에만 표시
        <LogoContainer
          $isCentered={isMainPage}
          $isSpecialPage={isSpecialPage}
          $isSimplePage={isSimplePage}
        >
          <img
            src={slimdealzlogo}
            alt="Slimdealz logo"
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          />
        </LogoContainer>
      )}

      {isSimplePage && ( // isSimplePage인 경우에만 제목을 보여줌
        <PageTitle $isSpecialPage={isSpecialPage} $isSimplePage={isSimplePage}>
          {pageTitle}
        </PageTitle>
      )}

      {!isSimplePage && (
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
