import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ItemContainer, ChickenImage, Label } from './styles';
import chickenChest from '/public/assets/chickenChest.png';

const IconCategory = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    const nextPath = '/category';
    if (!isClicked && location.pathname !== nextPath) {
      setIsClicked(true);
      navigate(nextPath);
    }
  };

  return (
    <ItemContainer onClick={handleClick}>
      <ChickenImage src={chickenChest} alt="Chicken Chest" />
      <Label>닭가슴살</Label>
    </ItemContainer>
  );
};

export default IconCategory;
