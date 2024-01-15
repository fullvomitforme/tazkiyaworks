import type { Config } from 'tailwindcss';

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
      colors: {
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
        neueMontreal: ['var(--font-neue-montreal)', 'sans-serif'],
        editorialNew: ['var(--font-editorial-new)', 'serif'],
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
