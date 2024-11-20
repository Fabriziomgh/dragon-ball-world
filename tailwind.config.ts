import type { Config } from 'tailwindcss';

const config: Config = {
   darkMode: ['class'],
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      screens: {
         phone: { max: '640px' },
         laptop: { max: '1024px' },
         desktop: { max: '1280px' },
      },
      fontFamily: {
         'Comic-Mono': ['Comic Mono', 'monospace'],
         'Comic-Neue': ['Comic Neue', 'cursive'],
      },
      extend: {
         colors: {
            dragon: {
               '50': '#fbfde9',
               '100': '#f8fdc4',
               '200': '#f5fb8d',
               '300': '#f6f84c',
               '400': '#f4ed15',
               '500': '#e4d40e',
               '600': '#c5a809',
               '700': '#9d7a0b',
               '800': '#826011',
               '900': '#6f4e14',
               '950': '#402908',
            },

            background: 'var(--background)',
            foreground: 'var(--foreground)',
         },
         borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
         },
         keyframes: {
            'accordion-down': {
               from: {
                  height: '0',
               },
               to: {
                  height: 'var(--radix-accordion-content-height)',
               },
            },
            'accordion-up': {
               from: {
                  height: 'var(--radix-accordion-content-height)',
               },
               to: {
                  height: '0',
               },
            },
         },
         animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
         },
      },
   },
   plugins: [require('tailwindcss-animate')],
};
export default config;
