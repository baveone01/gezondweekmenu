/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0fbf4',
          100: '#dcf5e6',
          200: '#bcead0',
          300: '#8dd9b0',
          400: '#57c18a',
          500: '#33a567',
          600: '#268653',
          700: '#206b44',
          800: '#1d5638',
          900: '#194730',
          950: '#0b2819',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#ffdba7',
          300: '#ffc06e',
          400: '#ff9c33',
          500: '#f97f0f',
          600: '#ea6005',
          700: '#c24506',
          800: '#9a360d',
          900: '#7c2f0f',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['"Lora"', 'Georgia', 'serif'],
      },
      boxShadow: {
        lift: '0 12px 30px -10px rgba(32, 107, 68, 0.25)',
        soft: '0 6px 24px -8px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};