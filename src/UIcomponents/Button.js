import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  border: none;
  border-radius: 5px;
  overflow: hidden;
  color: #c5c6c9;
  z-index: 0;
  background-color: transparent;

  &:hover {
    color: #fff;
    animation: ${glitchEffect} 0.3s infinite alternate;
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
