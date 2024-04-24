export const breakpoints = [1400, 1120, 600];
export const mediaQuery = breakpoints.map(
  (bp: number) => `@media (max-width: ${bp}px)`
);
