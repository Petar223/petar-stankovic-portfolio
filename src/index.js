import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';
import ParticlesWrapper from './UIcomponents/ParticlesWrapper';
import GlobalStyle from './styles/GlobalStyles';
import Root from './components/Root/Root';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ParticlesWrapper>
      <ParticlesBackground id='particles' />
    </ParticlesWrapper>
    <Root />
  </React.StrictMode>
);
reportWebVitals();
