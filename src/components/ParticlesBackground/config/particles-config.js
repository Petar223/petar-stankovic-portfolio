const particlesConfig = {
  background: {
    color: {
      value: 'rgba(4, 3, 54)',
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'repulse',
      },
      onHover: {
        enable: true,
        mode: 'grab',
      },
    },
    modes: {
      push: {
        distance: 300,
        duration: 15,
      },
      grab: {
        distance: 250,
      },
    },
  },
  particles: {
    color: {
      value: 'none',
    },
    links: {
      color: '#c5c6c9',
      distance: 150,
      enable: true,
      opacity: 0.2,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: true,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 150,
    },
    opacity: {
      value: 1.0,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
};

export default particlesConfig;
