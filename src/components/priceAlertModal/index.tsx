import React from 'react';
import { Modal, Typography, Button } from '@mui/material';
import { ModalBox } from './styles';

type PriceAlertModalProps = {
  open: boolean;
  onClose: () => void;
  type?: 'limit' | 'login';
};

const PriceAlertModal = ({
  open,
  onClose,
  type = 'limit'
}: PriceAlertModalProps) => {
  const modalContent =
    type === 'limit'
      ? '알림은 최대 3개까지 설정 가능합니다!'
      : '로그인이 필요한 서비스 입니다!';

  return (
    <Modal open={open} onClose={onClose}>
      <ModalBox>
        <Typography variant="h6" component="h2">
          {modalContent}
        </Typography>
        <Button variant="contained" onClick={onClose} sx={{ mt: 2 }}>
          확인
        </Button>
      </ModalBox>
    </Modal>
  );
};

export default PriceAlertModal;
