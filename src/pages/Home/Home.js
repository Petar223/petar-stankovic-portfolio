import React from 'react';
import { useNavigate } from 'react-router-dom';
import TitleContainer from '../../UIcomponents/TitleContainer';
import Name from '../../UIcomponents/Name';
import styled from 'styled-components';

const Subtitle = styled.p`
  font-size: 28px;
  color: #c5c6c9;
  margin-top: 10px;
`;

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <TitleContainer>
      <Name data-text='Petar Stanković' onClick={handleClick}>
        Petar Stanković
      </Name>
      <Subtitle>Frontend Engineer</Subtitle>
    </TitleContainer>
  );
}

export default Home;
