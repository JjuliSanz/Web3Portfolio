// Define a function textVariant that generates animation variants for text elements.
export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: -50, // Start above (-50) and transparent (opacity: 0)
      opacity: 0,
    },
    show: {
      y: 0, // Move to the original position (y: 0) and fully visible (opacity: 1)
      opacity: 1,
      transition: {
        type: "spring", // Use a spring animation
        duration: 1.25, // Animation duration
        delay: delay, // Delay the animation by the provided amount
      },
    },
  };
};

// Define a function fadeIn for various directions with custom animation properties.
export const fadeIn = (
  direction: any,
  type: any,
  delay: any,
  duration: any
) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0, // Start outside the viewport based on direction
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0, // Initially transparent
    },
    show: {
      x: 0, // Move to the original position (x: 0, y: 0) and fully visible (opacity: 1)
      y: 0,
      opacity: 1,
      transition: {
        type: type, // Use the specified animation type
        delay: delay, // Delay the animation by the provided amount
        duration: duration, // Set animation duration
        ease: "easeOut", // Use easing for smoother animation
      },
    },
  };
};

// Define a function zoomIn for zooming in animations.
export const zoomIn = (delay: number, duration: any) => {
  return {
    hidden: {
      scale: 0, // Start with a scale of 0 (invisible)
      opacity: 0,
    },
    show: {
      scale: 1, // Scale back to 1 (original size)
      opacity: 1, // Become fully visible
      transition: {
        type: "tween", // Use tween animation
        delay: delay, // Delay the animation by the provided amount
        duration: duration, // Set animation duration
        ease: "easeOut", // Use easing for smoother animation
      },
    },
  };
};

// Define a function slideIn for sliding in animations from different directions.
export const slideIn = (
  direction: any,
  type: any,
  delay: any,
  duration: any
) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0, // Start outside the viewport based on direction
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0, // Slide to the original position (x: 0, y: 0)
      y: 0,
      transition: {
        type: type, // Use the specified animation type
        delay: delay, // Delay the animation by the provided amount
        duration: duration, // Set animation duration
        ease: "easeOut", // Use easing for smoother animation
      },
    },
  };
};

// Define a function staggerContainer for staggering animations of child elements.
export const staggerContainer = (
  staggerChildren: any,
  delayChildren: number
) => {
  return {
    hidden: {},
    show: {
      transition: {
        type: "spring", // Use a spring animation
        duration: 1.25, // Animation duration
        staggerChildren: staggerChildren, // Stagger animations for child elements
        delayChildren: delayChildren || 0, // Delay each child animation by the provided amount (default to 0)
      },
    },
  };
};
