import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TitleContainer from '../../UIcomponents/TitleContainer';
import Name from '../../UIcomponents/Name';

const Subtitle = styled.p`
  font-size: 24px;
  color: #c5c6c9;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ResponsiveTitleContainer = styled(TitleContainer)`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const ResponsiveName = styled(Name)`
  font-size: 75px;

  @media (max-width: 768px) {
    font-size: 55px;
  }

  @media (max-width: 480px) {
    font-size: 40px;
  }
`;

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <ResponsiveTitleContainer>
      <ResponsiveName data-text='Petar Stanković' onClick={handleClick}>
        Petar Stanković
      </ResponsiveName>
      <Subtitle>Frontend Engineer</Subtitle>
    </ResponsiveTitleContainer>
  );
}

export default Home;
