// Simple animation utilities for Svelte 5
// These should be used as transition functions in Svelte components

export function fadeIn(node: HTMLElement, options: { duration?: number; delay?: number } = {}) {
  const { duration = 500, delay = 0 } = options;
  
  return {
    delay,
    duration,
    css: (t: number) => {
      const eased = t;
      return `
        opacity: ${eased};
        transform: translateY(${(1 - eased) * 20}px);
      `;
    }
  };
}

export function slideIn(node: HTMLElement, options: { duration?: number; delay?: number } = {}) {
  const { duration = 300, delay = 0 } = options;
  
  return {
    delay,
    duration,
    css: (t: number) => {
      return `
        opacity: ${t};
        transform: translateX(${(1 - t) * -20}px);
      `;
    }
  };
}