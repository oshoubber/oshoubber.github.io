import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

type TailwindPluginUtilities = {
  addUtilities: any;
};

const config: Config = {
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 2s'
      },
      fontSize: {
        'responsive-h1': 'clamp(2rem, 6vh, 4rem)',
        'responsive-h2': 'clamp(1.5rem, 3.5vh, 3.5rem)',
        'responsive-p': 'clamp(1rem, 2.5vh, 2.5rem)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#111',
            primary: '#EAB308',
            secondary: '#006FEE'
          }
        },
        light: {
          colors: {
            primary: '#EAB308',
            secondary: '#006FEE'
          }
        }
      }
    }),
    function ({ addUtilities }: TailwindPluginUtilities) {
      const newUtilities = {
        '.fill-forwards': {
          animationFillMode: 'forwards'
        }
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ]
};
export default config;
