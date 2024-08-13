import React, { useState } from 'react';
import { TextField, Typography, Switch, IconButton } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Container } from './styles';
import PriceAlertModal from '../priceAlertModal';

const PriceAlertSetting = () => {
  const [price, setPrice] = useState('');
  const [isAlertEnabled, setIsAlertEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAlertEnabled) {
      setIsModalOpen(true);
    }
    setIsAlertEnabled(event.target.checked);
  };

  return (
    <Container>
      <TextField
        value={price}
        onChange={handlePriceChange}
        variant="outlined"
        placeholder="희망 가격"
        sx={{
          width: '100px',
          height: '30px', // 높이를 줄임
          '& .MuiInputBase-root': {
            height: '30px' // 내부 입력 높이를 줄임
          }
        }}
      />
      <Typography>원 에 알려 주세요!</Typography>
      <IconButton sx={{ marginLeft: 'auto', marginRight: '-15px' }}>
        <NotificationsActiveIcon
          sx={{
            color: isAlertEnabled ? '#1565C0' : '#ccc',
            fontSize: '20px'
          }}
        />
      </IconButton>
      <Switch
        checked={isAlertEnabled}
        onChange={handleToggleChange}
        color="primary"
      />
      <PriceAlertModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Container>
  );
};

export default PriceAlertSetting;
