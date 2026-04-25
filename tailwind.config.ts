import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef4ff',
          100: '#dae6ff',
          200: '#b9d0ff',
          300: '#8cb1ff',
          400: '#5a87ff',
          500: '#3661ff',
          600: '#1f43ee',
          700: '#1933cc',
          800: '#192da6',
          900: '#1a2b81'
        },
        accent: {
          500: '#16a34a',
          600: '#15803d'
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      maxWidth: {
        content: '72rem'
      }
    }
  },
  plugins: []
};

export default config;
