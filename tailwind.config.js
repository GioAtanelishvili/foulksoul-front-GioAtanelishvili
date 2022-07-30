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
        35: '8.75rem',
        70: '17.5rem',
        76: '19rem',
        86: '21.5rem',
        92: '23rem',
        120: '30rem',
        129: '32.25rem',
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
      },
      boxShadow: {
        'dashboard-card': 'inset 4px 4px 20px #4d4d4d',
        'member-card': '5px 5px 13px rgba(0, 0, 0, 0.63)',
        'member-card-buttons': '5px 5px 13px rgba(0, 0, 0, 0.63)',
        'modal-avatar': '1.11504px 2.23009px 7.80531px #000000',
        'social-media-card': '2px 4px 14px #000000',
      },
    },
  },
  plugins: [],
};
