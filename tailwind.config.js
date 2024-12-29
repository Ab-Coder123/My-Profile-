// tailwind.config.js
export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    animation: {
      fadeIn: 'fadeIn 1s ease-in-out',
      fadeOut: 'fadeOut 1s ease-in-out',
      slideInTop: 'slideInTop 0.5s ease-out',
      slideInDown: 'slideInDown 0.5s ease-out',
      slideInLeft: 'slideInLeft 0.5s ease-out',
      slideInRight: 'slideInRight 0.5s ease-out',
      slideOutLeft: 'slideOutLeft 0.5s ease-in',
      slideOutRight: 'slideOutRight 0.5s ease-in',
      zoomIn: 'scaleIn 0.5s ease-out',
      zoomOut: 'scaleOut 0.5s ease-in',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      fadeOut: {
        '0%': { opacity: 1 },
        '100%': { opacity: 0 },
      },
      slideInTop: {
        '0%': { transform: 'translateY(100%)', opacity: 0 },
        '100%': { transform: 'translateY(0)', opacity: 1 },
      },
      slideInDown: {
        '0%': { transform: 'translateY(-100%)', opacity: 0 },
        '100%': { transform: 'translateY(0)', opacity: 1 },
      },
      slideInLeft: {
        '0%': { transform: 'translateX(-100%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 },
      },
      slideInRight: {
        '0%': { transform: 'translateX(100%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 },
      },
      slideOutLeft: {
        '0%': { transform: 'translateX(0)', opacity: 1 },
        '100%': { transform: 'translateX(-100%)', opacity: 0 },
      },
      slideOutRight: {
        '0%': { transform: 'translateX(0)', opacity: 1 },
        '100%': { transform: 'translateX(100%)', opacity: 0 },
      },
      zoomIn: {
        '0%': { transform: 'scale(0)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 },
      },
      zoomOut: {
        '0%': { transform: 'scale(1)', opacity: 1 },
        '100%': { transform: 'scale(0)', opacity: 0 },
      },
    },
  },
};
export const plugins = [];
