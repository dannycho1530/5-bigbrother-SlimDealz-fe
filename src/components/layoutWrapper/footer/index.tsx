import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { FooterContainer } from './styles';

const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <FooterContainer>
      <Box sx={{ width: 390 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="홈" icon={<HomeOutlinedIcon />} />
          <BottomNavigationAction
            label="최근 본 상품"
            icon={<ArchiveOutlinedIcon />}
          />
          <BottomNavigationAction
            label="알림"
            icon={<NotificationsRoundedIcon />}
          />
          <BottomNavigationAction
            label="북마크"
            icon={<BookmarkRoundedIcon />}
          />
          <BottomNavigationAction
            label="마이 페이지"
            icon={<AccountCircleOutlinedIcon />}
          />
        </BottomNavigation>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
