import React from 'react';
import { ArrowButton } from './styles';

type ArrowProps = {
  onClick: () => void;
};

export const LeftArrow = ({ onClick }: ArrowProps) => {
  return (
    <ArrowButton className="arrow" onClick={onClick} style={{ left: 0 }}>
      ←
    </ArrowButton>
  );
};

export const RightArrow = ({ onClick }: ArrowProps) => {
  return (
    <ArrowButton className="arrow" onClick={onClick} style={{ right: 0 }}>
      →
    </ArrowButton>
  );
};
