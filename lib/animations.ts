// Framer Motion animation tokens & presets for UMPmedia
// High-performance, hardware-accelerated, and subtle curves

export const EASING_OUT = [0.23, 1, 0.32, 1] as const;
export const EASING_SMOOTH = [0.16, 1, 0.3, 1] as const;
export const EASING_DRAWER = [0.32, 0.72, 0, 1] as const;

export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, ease: EASING_OUT },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.28, ease: EASING_OUT },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.25, ease: EASING_OUT },
};

export const slideDown = {
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.25, ease: EASING_OUT },
};

// Stagger children animation
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: EASING_OUT },
};

// Hover animations
export const cardHover = {
  rest: { y: 0 },
  hover: { y: -3, transition: { duration: 0.2, ease: EASING_OUT } },
};

export const imageHover = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.35, ease: EASING_OUT } },
};

export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.16, ease: EASING_OUT } },
};

// Hero animations with fast, crisp stagger
export const heroAnimation = {
  container: {
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  },
  logo: {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.35, delay: 0.05, ease: EASING_OUT },
  },
  headline: {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay: 0.1, ease: EASING_OUT },
  },
  subtitle: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.35, delay: 0.2, ease: EASING_OUT },
  },
  cta: {
    initial: { opacity: 0, scale: 0.97 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.25, delay: 0.25, ease: EASING_OUT },
  },
};

// Scroll reveal (for use with Framer Motion in-view triggers)
export const scrollReveal = {
  hidden: { opacity: 0, y: 14 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      delay: custom * 0.04,
      ease: EASING_OUT,
    },
  }),
};
