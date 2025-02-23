import React from 'react';
import { useNavigate } from 'react-router-dom';
import TitleContainer from '../../UIcomponents/TitleContainer';
import Name from '../../UIcomponents/Name';

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
    </TitleContainer>
  );
}

export default Home;
