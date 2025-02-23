import React from 'react';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import ParticlesWrapper from './UIcomponents/ParticlesWrapper';
import GlobalStyle from './styles/GlobalStyles';
import Layout from './components/Layout/Layout';
import Root from './components/Root/Root';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <ParticlesWrapper>
          <ParticlesBackground id='particles' />
        </ParticlesWrapper>
        <Root />
      </Layout>
    </>
  );
}

export default App;
