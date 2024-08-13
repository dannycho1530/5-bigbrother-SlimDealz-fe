import React, { useState } from 'react';
import { TextField, Typography, Switch, IconButton } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Container } from './styles';
import PriceAlertModal from '../priceAlertModal';

const PriceAlertSetting = () => {
  const [price, setPrice] = useState('');
  const [isAlertEnabled, setIsAlertEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatPrice = (value: string) => {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value.replace(/,/g, '');
    const numericValue = rawValue.replace(/[^0-9]/g, '');

    if (numericValue) {
      setPrice(formatPrice(numericValue));
    } else {
      setPrice('');
    }
  };

  const handleToggleChange = () => {
    if (!isAlertEnabled) {
      setIsModalOpen(true);
    }
    setIsAlertEnabled(!isAlertEnabled);
  };

  const handleIconClick = () => {
    handleToggleChange();
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
          height: '30px',
          '& .MuiInputBase-root': {
            height: '30px'
          }
        }}
      />
      <Typography>원 에 알려 주세요!</Typography>
      <IconButton
        onClick={handleIconClick}
        sx={{ marginLeft: 'auto', marginRight: '-15px' }}
      >
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
