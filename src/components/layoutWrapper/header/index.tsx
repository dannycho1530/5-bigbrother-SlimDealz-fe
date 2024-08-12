import React from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SearchIcon from './search/SearchIcon';
import SearchBox from './search/SearchBox';
import slimdealzlogo from '../../../assets/slimdealzlogo2.png';

const Header = () => {
  return (
    <div>
      <ArrowBackRoundedIcon />
      <img src={slimdealzlogo} alt="Slimdealz logo" />
      <SearchBox />
      <SearchIcon />
    </div>
  );
};

export default Header;
