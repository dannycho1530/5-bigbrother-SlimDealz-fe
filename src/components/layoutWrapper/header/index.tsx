import React from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import slimdealzlogo from '../../../../public/assets/slimdealzlogo2.png';
import SearchBar from './SearchBar';
import {
  HeaderContainer,
  IconContainer,
  LogoContainer,
  SearchContainer
} from './styles';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const history = useHistory();

  const handleLogoClick = () => {
    navigate('/main');
  };

  const handleBackClick = () => {
    history.goBack(); // Goes to the previous page
  };

  return (
    <HeaderContainer>
      <IconContainer onClick={handleBackClick}>
        <ArrowBackRoundedIcon style={{ cursor: 'pointer' }} />
      </IconContainer>
      <LogoContainer>
        <img
          src={slimdealzlogo}
          alt="Slimdealz logo"
          onClick={handleLogoClick}
          style={{ cursor: 'pointer' }}
        />
      </LogoContainer>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
