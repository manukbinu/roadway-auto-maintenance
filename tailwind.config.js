/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        roadway: {
          black: '#050505',
          charcoal: '#0d0d0d',
          matte: '#141414',
          steel: '#1f1f1f',
          red: '#e10600',
          redDeep: '#8a0000',
          redGlow: '#ff1a1a',
          smoke: '#3a3a3a',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Rajdhani', 'sans-serif'],
      },
      backgroundImage: {
        'red-glow': 'radial-gradient(circle at center, rgba(225,6,0,0.35) 0%, rgba(0,0,0,0) 70%)',
        'grid-overlay':
          'linear-gradient(rgba(225,6,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(225,6,0,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        neon: '0 0 5px #ff1a1a, 0 0 20px rgba(225,6,0,0.6), 0 0 60px rgba(225,6,0,0.3)',
        'neon-sm': '0 0 8px rgba(225,6,0,0.7)',
      },
      textShadow: {
        neon: '0 0 10px rgba(255,26,26,0.8)',
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: 1 },
          '20%, 22%, 24%, 55%': { opacity: 0.4 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
