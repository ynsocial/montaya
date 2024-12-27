export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.645, 0.045, 0.355, 1]
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.645, 0.045, 0.355, 1]
    }
  }
};