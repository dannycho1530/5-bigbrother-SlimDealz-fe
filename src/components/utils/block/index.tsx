import React from 'react';
import { BlockContainer } from './styles';

type Props = {
  itemId: string;
  children: React.ReactNode;
};

const Block = ({ itemId, children }: Props) => {
  return <BlockContainer>{children}</BlockContainer>;
};

export default Block;
