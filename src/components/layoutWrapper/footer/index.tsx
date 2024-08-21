import React, { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { FooterContainer } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setValue(0);
        break;
      case '/recentlyView':
        setValue(1);
        break;
      case '/notifications':
        setValue(2);
        break;
      case '/bookmark':
        setValue(3);
        break;
      case '/myPage':
        setValue(4);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  const handleNavigation = (newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      // case 1:
      //   navigate('/recentlyView');
      //   break;
      // case 2:
      //   navigate('/notifications');
      //   break;
      case 3:
        navigate('/bookmark');
        break;
      case 4:
        navigate('/myPage');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <FooterContainer>
      <div style={{ width: 390 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            handleNavigation(newValue);
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
      </div>
    </FooterContainer>
  );
};

export default Footer;
