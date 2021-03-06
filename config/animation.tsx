const DURATIONS = {
  VeryFast: 0.3,
  Fast: 0.6,
  Normal: 0.8,
  Slow: 1.2,
  VerySlow: 1.8,
  SlowAf: 2.5
}
const easing = [0.6, -0.05, 0.01, 0.99]

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
}

const fadeInUpSlower = {
  initial: {
    y: 80,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: DURATIONS.Normal,
      ease: easing,
    },
  },
}

const letterSpace = {
  initial: {
    opacity: 0,
  },
  animate: {
    letterSpacing: ['0px', '-10px', '0px'],
    opacity: 1,
    transition: {
      duration: DURATIONS.Slow,
      ease: easing,
    },
  },
}

const letterSpaceBig = {
  initial: {
    opacity: 0,
  },
  animate: {
    letterSpacing: ['0px', '20px', '0px'],
    opacity: 1,
    transition: {
      duration: DURATIONS.SlowAf,
      ease: easing,
    },
  },
}

const simpleOpacity = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
}

const iconScale = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    scale: [1, 1.02, 1],
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
}

const scaleUp = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    opacity: [0, 1],
    scale: [1, 1.05, 1],
    transition: {
      duration: DURATIONS.VerySlow,
      ease: easing,
    },
  },
  lightMode: {
    opacity: [0, 1],
    scale: [0.99, 1.05, 1],
    transition: {
      duration: DURATIONS.VerySlow,
      ease: easing,
    },
  },
}

const menuAnim = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: easing,
      duration: DURATIONS.VerySlow,
    },
  },
  hide: {
    opacity: 0,
    y: -100,
    transition: {
      ease: easing,
      duration: DURATIONS.VeryFast,
    },
  },
}

const handWave = {
  animate: {
    opacity: [0, 1],
    rotate: [0, 20, 0],
    transition: {
      duration: DURATIONS.VerySlow,
      ease: easing,
    },
  },
}

const avatarAnimation = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: DURATIONS.Fast,
      ease: easing,
    },
  },
  exit: {
    opacity: 0,
  },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}
const galleryStagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export {
  DURATIONS,
  easing,
  fadeInUp,
  handWave,
  fadeInUpSlower,
  letterSpace,
  letterSpaceBig,
  stagger,
  galleryStagger,
  simpleOpacity,
  menuAnim,
  scaleUp,
  iconScale,
  avatarAnimation,
}