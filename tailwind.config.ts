import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        'open-sans': ['var(--font-open-sans)', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1', letterSpacing: '0' }],
        'h1': ['3.5rem', { lineHeight: '1', letterSpacing: '0' }],
        'h2': ['3rem', { lineHeight: '1', letterSpacing: '0' }],
        'h3': ['2rem', { lineHeight: '1', letterSpacing: '0' }],
        'h4': ['1.5rem', { lineHeight: '1', letterSpacing: '0' }],
        'body-1': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0' }],
        'body-2': ['1rem', { lineHeight: '1.5', letterSpacing: '0' }],
        'caption': ['0.75rem', { lineHeight: '1', letterSpacing: '0.1em' }],
        'button': ['1.25rem', { lineHeight: '1.35', letterSpacing: '0' }],
        'hyperlink': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0' }],
      },
      colors: {
        primary: '#ED5828',
        'secondary-gray': '#5E5E5E',
        'secondary-white': '#FFFFFF',
        'neutral-dark': '#0C0C20',
        'neutral-light': '#F6FEF9',
        hyperlink: '#52B698',
        black: '#000000',
      },
      boxShadow: {
        sm: '0 4px 8px rgba(0, 0, 0, 0.15)',
        md: '0 4px 8px rgba(0, 0, 0, 0.10)',
        lg: '0 2px 4px rgba(0, 0, 0, 0.10)',
      },
      spacing: {
        'space-1': '0.25rem',
        'space-2': '0.5rem',
        'space-3': '1rem',
        'space-4': '1.5rem',
        'space-5': '2rem',
        'space-6': '3rem',
      },
    },
  },
  plugins: [],
};

export default config;
