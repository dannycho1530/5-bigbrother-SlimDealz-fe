import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh'
      }}
    >
      <video autoPlay loop muted style={{ width: '50%' }}>
        <source src="/public/assets/loading.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LoadingSpinner;
