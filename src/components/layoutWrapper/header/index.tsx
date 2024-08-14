import React, { useState } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SearchBar from './SearchBar';
import {
  HeaderContainer,
  IconContainer,
  LogoContainer,
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

  // 사용자가 입력한 검색어를 관리할 상태 추가
  const [searchValue, setSearchValue] = useState('');

  // 검색어 변경 시 호출되는 함수
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // 검색 시 호출되는 함수
  const handleSearch = (value: string) => {
    // 검색 결과 페이지로 이동
    navigate(`/searchResults?query=${encodeURIComponent(value)}`);
  };

  const handleLogoClick = () => {
    navigate('/main');
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const isMainPage = location.pathname === '/main';
  const isSpecialPage = ['/category/', '/searchInitial', '/searchResults'].some(
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
      <LogoContainer
        $isCentered={isMainPage}
        $isSpecialPage={isSpecialPage}
        $isSimplePage={isSimplePage}
      >
        {isMainPage && (
          <img
            src={slimdealzlogo}
            alt="Slimdealz logo"
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          />
        )}
      </LogoContainer>
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
    </HeaderContainer>
  );
};

export default Header;
