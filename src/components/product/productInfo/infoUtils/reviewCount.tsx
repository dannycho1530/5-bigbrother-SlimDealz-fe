import React from 'react';

interface ReviewCountProps {
  count: number;
}

const ReviewCount: React.FC<ReviewCountProps> = ({ count }) => {
  return (
    <div>
      <span style={{ fontSize: '12px' }}>({count})</span>
    </div>
  );
};

export default ReviewCount;
