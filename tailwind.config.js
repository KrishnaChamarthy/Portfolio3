/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          '"JetBrains Mono"',
          '"SFMono-Regular"',
          'Consolas',
          '"Liberation Mono"',
          'monospace',
        ],
      },
      colors: {
        ink: '#282a36',
        moss: '#556b4e',
        clay: '#b86f52',
        paper: '#f8f9fa',
        code: {
          blue: '#2563eb',
          green: '#2f855a',
          purple: '#7c3aed',
        },
      },
      boxShadow: {
        soft: '0 24px 70px rgba(23, 33, 31, 0.12)',
      },
      keyframes: {
        cursor: {
          '0%, 45%': { opacity: '1' },
          '46%, 100%': { opacity: '0' },
        },
      },
      animation: {
        cursor: 'cursor 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
