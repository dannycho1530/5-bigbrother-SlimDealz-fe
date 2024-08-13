import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const ProductRating = () => {
  const [value] = React.useState<number | null>(2.5); // 기본값을 2.5로 설정

  return (
    <Box
      sx={{
        display: 'flex',
        width: 'auto'
      }}
    >
      <Rating
        name="read-only"
        value={value}
        precision={0.1}
        readOnly
        emptyIcon={
          <StarIcon style={{ opacity: 1, fontSize: 23.5 }} fontSize="inherit" />
        }
      />
      {value !== null && (
        <Box
          sx={{
            ml: 0.5,
            fontSize: 12,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {value}
        </Box>
      )}
    </Box>
  );
};

export default ProductRating;
