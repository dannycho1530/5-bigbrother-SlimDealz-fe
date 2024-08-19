import React, { useState } from 'react';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

const ProductBookmark = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleToggle = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
      {isBookmarked ? <BookmarkOutlinedIcon /> : <BookmarkBorderOutlinedIcon />}
    </div>
  );
};

export default ProductBookmark;
