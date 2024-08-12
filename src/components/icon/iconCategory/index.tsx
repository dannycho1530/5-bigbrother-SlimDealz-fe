import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemContainer, ChickenImage } from './styles';
import chickenChest from '/public/assets/chickenChest.png';

const IconCategory = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/category');
  };

  return (
    <ItemContainer onClick={handleClick}>
      <ChickenImage src={chickenChest} alt="Chicken Chest" />
    </ItemContainer>
  );
};

export default IconCategory;
