import React from 'react';
import styled, { keyframes } from 'styled-components';

const shift = keyframes`
  0%, 40%, 44%, 58%, 61%, 65%, 69%, 73%, 100% {
    transform: skewX(0deg);
  }
  41% {
    transform: skewX(10deg);
  }
  42% {
    transform: skewX(-10deg);
  }
  59% {
    transform: skewX(35deg) skewY(10deg);
  }
  60% {
    transform: skewX(-35deg) skewY(-10deg);
  }
  63% {
    transform: skewX(10deg) skewY(-5deg);
  }
  70% {
    transform: skewX(-30deg) skewY(-20deg);
  }
  71% {
    transform: skewX(10deg) skewY(-10deg);
  }
`;

const glitchEffect = keyframes`
  0% {
    text-shadow: 2px 2px 4px rgba(255, 0, 0, 0.7), -2px -2px 4px rgba(0, 255, 255, 0.7);
  }
  50% {
    text-shadow: -2px -2px 4px rgba(255, 0, 0, 0.7), 2px 2px 4px rgba(0, 255, 255, 0.7);
  }
  100% {
    text-shadow: 2px -2px 4px rgba(255, 0, 0, 0.7), -2px 2px 4px rgba(0, 255, 255, 0.7);
  }
`;

const SlidingButton = styled.button`
  min-width: 220px;
  height: 50px;
  padding: 5px 10px;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  overflow: hidden;
  border: 2px solid #c5c6c9;
  color: #c5c6c9;
  z-index: 0;
  background-color: transparent;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    transition: all 0.3s ease;
    left: 0;
    top: 0;
    height: 0;
    width: 100%;
  }

  &:hover {
    color: #fff;
    animation: ${glitchEffect} 0.3s infinite alternate,
      ${shift} 4s ease-in-out infinite alternate;
    transform: scale(1.05);

    &::after {
      height: 100%;
    }
  }

  @media (max-width: 480px) {
    min-width: 100%;
  }
`;

const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <SlidingButton onClick={onClick} type={type}>
      {children}
    </SlidingButton>
  );
};

export default Button;
