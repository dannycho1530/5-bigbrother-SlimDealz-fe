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
      <Box sx={{ width: 330 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
          <BottomNavigationAction
            label="Recents"
            icon={<ArchiveOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Notifications"
            icon={<NotificationsRoundedIcon />}
          />
          <BottomNavigationAction
            label="Bookmarks"
            icon={<BookmarkRoundedIcon />}
          />
          <BottomNavigationAction
            label="My page"
            icon={<AccountCircleOutlinedIcon />}
          />
        </BottomNavigation>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
