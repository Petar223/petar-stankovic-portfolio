import React from 'react';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import AppContainer from './components/ParticlesBackground/UIcomponents/AppContainer';
import ParticlesWrapper from './components/ParticlesBackground/UIcomponents/ParticlesWrapper';
import TitleContainer from './components/ParticlesBackground/UIcomponents/TitleContainer';
import Name from './components/ParticlesBackground/UIcomponents/Name';
import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle /> {/* Primena globalnih stilova */}
      <AppContainer>
        <ParticlesWrapper>
          <ParticlesBackground id='particles' />
        </ParticlesWrapper>
        <TitleContainer>
          <Name data-text='Petar Stanković'>Petar Stanković</Name>
        </TitleContainer>
      </AppContainer>
    </>
  );
}

export default App;
