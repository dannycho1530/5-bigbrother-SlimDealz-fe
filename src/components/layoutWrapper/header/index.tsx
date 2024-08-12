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

const Header = () => {
  return (
    <HeaderContainer>
      <IconContainer>
        <ArrowBackRoundedIcon />
      </IconContainer>
      <LogoContainer>
        <img src={slimdealzlogo} alt="Slimdealz logo" />
      </LogoContainer>
      <SearchContainer>
        <SearchBar />
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
