import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useMemo, useState } from 'react';
import particlesConfig from './config/particles-config';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = (props) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => particlesConfig, []);

  return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesBackground;
