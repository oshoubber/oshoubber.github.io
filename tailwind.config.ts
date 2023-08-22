import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

type TailwindPluginUtilities = {
  addUtilities: any;
};

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 2s'
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
            background: '#111'
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
