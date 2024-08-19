import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemContainer, ChickenImage, Label } from './styles';
import chickenChest from '/public/assets/chickenChest.png';

const IconCategory = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/category');
  };

  return (
    <ItemContainer onClick={handleClick}>
      <ChickenImage src={chickenChest} alt="Chicken Chest" />
      <Label>닭가슴살</Label>
    </ItemContainer>
  );
};

export default IconCategory;
