/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // If using Next.js 13+ with app directory:
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom brown shades for your theme
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        }
      },
      animation: {
        // Smooth animations for sidebar
        'in': 'in 0.5s ease-out',
        'slide-in-from-left': 'slide-in-from-left 0.3s ease-out',
        'slide-in-from-bottom': 'slide-in-from-bottom 0.3s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'wave': 'wave 1.5s ease-in-out infinite',
      },
      keyframes: {
        in: {
          '0%': { 
            opacity: '0', 
            transform: 'scale(0.95) translateY(10px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'scale(1) translateY(0)' 
          },
        },
        'slide-in-from-left': {
          '0%': { 
            transform: 'translateX(-100%)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateX(0)', 
            opacity: '1' 
          },
        },
        'slide-in-from-bottom': {
          '0%': { 
            transform: 'translateY(20px)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1' 
          },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)',
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(245, 158, 11, 0.6)',
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0)' 
          },
          '50%': { 
            transform: 'translateY(-10px)' 
          },
        },
        wave: {
          '0%, 100%': { 
            transform: 'rotate(0deg)' 
          },
          '25%': { 
            transform: 'rotate(5deg)' 
          },
          '75%': { 
            transform: 'rotate(-5deg)' 
          },
        }
      },
      transitionProperty: {
        // Add custom transitions
        'height': 'height',
        'spacing': 'margin, padding',
        'size': 'width, height',
        'bg-gradient': 'background-image',
        'border-gradient': 'border-image',
        'all-smooth': 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      // Custom utilities for smooth scrolling
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        // Custom gradients
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
        'gradient-sidebar': 'linear-gradient(180deg, #1c1917 0%, #0c0a09 100%)',
        'gradient-gold': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      },
      boxShadow: {
        // Enhanced shadows
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.15)',
        'inner-xl': 'inset 0 10px 15px -3px rgb(0 0 0 / 0.2)',
        'glow': '0 0 20px rgba(245, 158, 11, 0.4)',
        'glow-lg': '0 0 40px rgba(245, 158, 11, 0.6)',
        'soft': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'depth': '0 20px 60px rgba(0, 0, 0, 0.3)',
      },
      // Custom easing functions
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-out': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
      }
    },
  },
  plugins: [
    // Optional plugins for better UX
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('tailwindcss-animate'),
  ],
}