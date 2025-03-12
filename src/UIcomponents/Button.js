import React from 'react';
import { useLocation } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';

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
  overflow: hidden;
  color: #c5c6c9;
  z-index: 0;
  background-color: transparent;

  &:hover {
    color: #fff;
    animation: ${glitchEffect} 0.3s infinite alternate;
  }

  ${({ active }) =>
    active &&
    css`
      color: #fff;
      font-weight: bold;
    `}

  @media (max-width: 480px) {
    min-width: 100%;
  }
`;

const Button = ({ children, onClick, type = 'button', route }) => {
  const location = useLocation();
  const isActive = location.pathname === route;

  return (
    <SlidingButton onClick={onClick} type={type} active={isActive}>
      {children}
    </SlidingButton>
  );
};

export default Button;
