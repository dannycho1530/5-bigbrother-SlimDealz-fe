import * as React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const ProductRating = () => {
  const [value] = React.useState<number | null>(2.5); // 기본값을 2.5로 설정

  return (
    <div
      style={{
        display: 'flex',
        width: 'auto',
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
        <div
          style={{
            marginLeft: '0.5rem',
            fontSize: 12,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {value}
        </div>
      )}
    </div>
  );
};

export default ProductRating;
