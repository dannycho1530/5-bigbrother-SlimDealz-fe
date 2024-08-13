import HomeIcon from '@mui/icons-material/Home';
import RecentIcon from '@mui/icons-material/Archive';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import UserIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

import { FooterContainer } from './styles';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <FooterContainer>
      <HomeIcon
        fontSize="large"
        onClick={() => navigate('/main')}
        style={{ cursor: 'pointer' }}
      />
      <RecentIcon
        fontSize="large"
        onClick={() => navigate('/recentlyView')}
        style={{ cursor: 'pointer' }}
      />
      <NotificationsIcon
        fontSize="large"
        onClick={() => navigate('/alarm')}
        style={{ cursor: 'pointer' }}
      />
      <BookmarkIcon
        fontSize="large"
        onClick={() => navigate('/bookmark')}
        style={{ cursor: 'pointer' }}
      />
      <UserIcon
        fontSize="large"
        onClick={() => navigate('/information')}
        style={{ cursor: 'pointer' }}
      />
    </FooterContainer>
  );
};

export default Footer;
