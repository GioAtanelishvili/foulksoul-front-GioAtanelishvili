/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        3.75: '0.9375rem',
        23: '5.75rem',
        24: '6rem',
        35: '8.75rem',
        70: '17.5rem',
        92: '23rem',
      },
      colors: {
        'content-white': '#FBFBFB',
        'primary-gold': '#FFB72D',
        'secondary-gold': '#FBD560',
      },
      backgroundImage: {
        'gradient-radial-purple':
          'radial-gradient(50% 50% at 50% 50%, #534571 0%, #342C46 100%)',
      },
      fontFamily: {
        'nino-mtavruli': 'bgp_nino_mtavruli',
        arial: 'bgp_arial',
      },
      dropShadow: {
        'card-photo-frame': '2px 4px 14px #000000',
      },
    },
  },
  plugins: [],
};
