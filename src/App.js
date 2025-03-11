import React from 'react';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import ParticlesWrapper from './UIcomponents/ParticlesWrapper';
import GlobalStyle from './styles/GlobalStyles';
import Root from './components/Root/Root';

function App() {
  return (
    <>
      <GlobalStyle />
      <ParticlesWrapper>
        <ParticlesBackground id='particles' />
      </ParticlesWrapper>
      <Root />
    </>
  );
}

export default App;
