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

const Name = styled.p`
  position: relative;
  font-size: 75px;
  font-weight: bold;
  color: #c5c6c9;
  letter-spacing: 3px;
  animation: ${shift} 4s ease-in-out infinite alternate;
  z-index: 1;
  cursor: pointer; /* Da pokazuje da je klikabilno */
  transition: transform 0.2s ease-in-out;

  &:hover {
    animation: ${glitchEffect} 0.3s infinite alternate,
      ${shift} 4s ease-in-out infinite alternate;
    transform: scale(1.05); /* Lagano povećanje na hover */
  }
`;

export default Name;
