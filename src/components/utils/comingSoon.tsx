import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const bounce = (i: number) => keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(${8 + i}px);
    opacity: ${i / 16};
  }
  100% {
    transform: translateY(0);
  }
`;

const Header = styled.header`
  width: 100%;
  height: 86vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #7bc6cc, #be93c5);
`;

const Title = styled.h1`
  color: white;
  font-family: 'Oswald', sans-serif;
  font-size: 48px;
  text-align: center;
  div {
    display: inline-block;
    text-shadow: 2px 2px 3px #3d6366;
  }

  ${Array.from({ length: 11 }).map(
    (_, i) => css`
      div:nth-child(${i + 1}) {
        animation: ${bounce(i + 1)} 3s ease-in-out ${i * 0.2}s infinite;
      }
    `
  )}
`;

const ComingSoon = () => {
  return (
    <Header>
      <Title>
        <div>C</div>
        <div>O</div>
        <div>M</div>
        <div>I</div>
        <div>N</div>
        <div>G</div>
        <div>&nbsp;&nbsp;</div>
        <div>S</div>
        <div>O</div>
        <div>O</div>
        <div>N</div>
      </Title>
    </Header>
  );
};

export default ComingSoon;
