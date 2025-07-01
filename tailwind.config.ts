// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-body': 'var(--bg-body)',
        'bg-body2': 'var(--bg-body2)',
        'text1': 'var(--text1)',
        'text2': 'var(--text2)',
        'accent': 'var(--accent)',
        'accent-light': 'var(--accent-light)',
        'accent-dark': 'var(--accent-dark)',
        'primary': 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'secondary': 'var(--secondary)',
        'secondary-dark': 'var(--secondary-dark)',
        'white': 'var(--white)',
      },
      fontSize: {
        'fs-18': '1.125rem', // Equivalent to 18px
      },
      spacing: {
        '1rem': '1rem', // Custom spacing if you want to explicitly map rem values
      }
    },
  },
  plugins: [],
};

export default config;
