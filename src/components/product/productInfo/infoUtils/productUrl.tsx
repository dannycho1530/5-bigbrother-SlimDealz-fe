import React, { useState } from 'react';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';

const ProductUrl = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleTooltipOpen = () => {
    setTooltipOpen(true);
  };

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopySuccess(true);
        setTooltipOpen(false); // 툴팁 닫기
        setTimeout(() => setCopySuccess(false), 2000); // 2초 후에 Alert 사라짐
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        position: 'relative'
      }}
    >
      <Tooltip
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <ContentCopyRoundedIcon fontSize="small" />
            <span style={{ marginLeft: '4px' }}>URL복사</span>
          </div>
        }
        open={tooltipOpen}
        onOpen={handleTooltipOpen}
        onClose={() => setTooltipOpen(false)}
        placement="top"
        arrow
      >
        <IconButton
          onClick={handleCopyClick}
          style={{ cursor: 'pointer', color: 'black' }}
          disableRipple
        >
          <ShareIcon />
        </IconButton>
      </Tooltip>

      {copySuccess && (
        <Alert
          severity="success"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000
          }}
        >
          {'      복사 완료!      '}
        </Alert>
      )}
    </div>
  );
};

export default ProductUrl;
