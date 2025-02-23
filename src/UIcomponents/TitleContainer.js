import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0% {
    transform: scale(0.3);
  }
 
  100% {
    transform: scale(1);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
  animation: ${pulseAnimation} 1.5s ease-in-out forwards;
`;

export default TitleContainer;
