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

const Name = styled.p`
  position: relative;
  font-size: 75px;
  font-weight: bold;
  color: #c5c6c9;
  letter-spacing: 3px;
  animation: ${shift} 4s ease-in-out infinite alternate;
  z-index: 1;
`;
export default Name;
