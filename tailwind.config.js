/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        3.75: '0.9375rem',
        13: '3.25rem',
        15: '3.75rem',
        23: '5.75rem',
        24: '6rem',
        34: '8.5rem',
        35: '8.75rem',
        68: '17rem',
        70: '17.5rem',
        76: '19rem',
        86: '21.5rem',
        92: '23rem',
        108: '27rem',
        120: '30rem',
        129: '32.25rem',
        140: '35rem',
        160: '40rem',
        180: '45rem',
      },
      colors: {
        'content-white': '#FBFBFB',
        'primary-gold': '#FFB72D',
        'secondary-gold': '#FBD560',
        'login-gradient-start': '#345161',
        'login-gradient-end': '#7B5A5A',
        'login-input-background': '#C4B6B2',
        'login-input-text': '#501C1C',
        'input-error': '#CE1F1F',
        'login-submit-button': '#345161',
        'primary-gray': '#333333',
        'good-gray': '#898989',
        'primary-dark-blue': '#143B52',
        'members-nav-inactive': '#C4C4C4',
        'modal-overlay': '#042639',
        'delete-modal-button': '#FC0303',
        'update-form-placeholder': '#A8A3A3',
        'form-go-back-link': '#3A7DA3',
        'social-media-link': '#2F80ED',
        'band-image-frame': '#3B5495',
        'band-edit-card': '#E5E5E5',
        'primary-green': '#53C02C',
        'member-planet': '#F2C94C',
        'member-planet-orbit': '#F2C94C',
      },
      backgroundImage: {
        'gradient-radial-purple':
          'radial-gradient(50% 50% at 50% 50%, #534571 0%, #342C46 100%)',
        'login-header': 'url(assets/images/skew-rect.svg)',
        'main-tv-screen': 'url(assets/images/tv-screen.jpg)',
      },
      fontFamily: {
        'nino-mtavruli': 'bgp_nino_mtavruli',
        arial: 'bgp_arial',
      },
      dropShadow: {
        'card-photo-frame': '2px 4px 14px #000000',
        'main-tv': '10px 10px 14px #939191',
        'band-image': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'member-planet': '8.04286px 8.04286px 32.1714px #000000',
      },
      boxShadow: {
        'dashboard-card': 'inset 4px 4px 20px #4d4d4d',
        'member-card': '5px 5px 13px rgba(0, 0, 0, 0.63)',
        'member-card-buttons': '5px 5px 13px rgba(0, 0, 0, 0.63)',
        'modal-avatar': '1.11504px 2.23009px 7.80531px #000000',
        'social-media-card': '2px 4px 14px #000000',
        'band-edit-card': '2px 4px 14px #000000',
        'avatar-upload-button': '1.66667px 3.33333px 11.6667px #000000',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: ' 1' },
          '50%': { opacity: '0.6' },
        },
        'move-circularly-child': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(-180deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'move-circularly-parent': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'sunnote-pulse': 'pulse 2s linear infinite',
        'move-circularly-planet': 'move-circularly-child 7s linear infinite',
        'move-circularly-orbit': 'move-circularly-parent 7s linear infinite',
      },
      scale: {
        70: '0.7',
        80: '0.8',
      },
    },
  },
  plugins: [],
};
