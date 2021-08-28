module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      violet: {
        dark: 'hsl(256, 26%, 20%)',
        verydark: ' hsl(270, 9%, 17%)',
      },
      gray: {
        blue: 'hsl(216, 30%, 68%)',
        light: 'hsl(0, 0%, 98%)',
        dark: 'hsl(273, 4%, 51%)',
      },
    },
    fontSize: {
      md: '16px',
      xl: '72px',
    },
    extend: {
      fontFamily: {
        DM: "'DM Serif Display',  serif",
        Karla: "'Karla', sans-serif",
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
