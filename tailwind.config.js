/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',

    // Add font files path
    './public/fonts/Against History.ttf',
    './public/fonts/StretchPro 2.otf',
  ],
  theme: {
    extend: {
      fontFamily: {
        'alata': ['Alata', 'sans-serif'],
     
      },
      colors: {
        "primary-dark": "#151319",
        "primary-light-dark": "#18141c",
        "primary-grey": "#24202d",
        "primary-blue": "#4169E1",
        "primary-purple": "#0084FF",
      },
    },
  },
  plugins: [],
};
