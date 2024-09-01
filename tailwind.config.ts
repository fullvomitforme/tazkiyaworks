import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        grain:
          "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%20.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%10.1%22/%3E%3C/svg%3E')",
      },
      colors: {
        ondeliveryPrimary: '#1254A0',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        lavender: 'var(--lavender)',
        highlight: 'var(--highlight)',
        'dark-slate-blue': 'var(--dark-slate-blue)',
        'royal-blue-highlight': 'var(--royal-blue-highlight)',
        white: 'var(--white)',
        'dark-slate-grey': 'var(--dark-slate-grey)',
        thistle: 'var(--thistle)',
        'alice-blue': 'var(--alice-blue)',
        'dark-slate-blue-2': 'var(--dark-slate-blue-2)',
        'cadet-blue': 'var(--cadet-blue)',
        'new-blue': 'var(--new-blue)',
        silver: 'var(--silver)',
        'pale-turquoise': 'var(--pale-turquoise)',
        'background-boxes': 'var(--background-boxes)',
        'lavender-2': 'var(--lavender-2)',
        'cornflower-blue': 'var(--cornflower-blue)',
        'nav-background': 'var(--nav-background)',
        'light-cyan': 'var(--light-cyan)',
        teal: 'var(--teal)',
        'white-smoke': 'var(--white-smoke)',
        'dark-green': 'var(--dark-green)',
        'sweet-orange': 'var(--sweet-orange)',
        'background-study-case': 'var(--background-study-case)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        dmSans: ['var(--font-dm-sans)', 'sans-serif'],
        instrumentSerif: ['var(--font-instrument-serif)', 'serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
