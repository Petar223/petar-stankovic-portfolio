import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import particlesConfig from './config/particles-config';
import styled from 'styled-components';
import useIsMobile from '../../hooks/useIsMobile';

const BackgroundFallback = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  background-color: rgba(4, 3, 54);
`;

const ParticlesBackground = ({ id }) => {
  const [, setInit] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => setInit(true));
    }
  }, [isMobile]);

  const options = useMemo(() => particlesConfig, []);

  if (isMobile) {
    return <BackgroundFallback />;
  }

  return <Particles id={id} options={options} />;
};

export default ParticlesBackground;
