/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      primary: '#4D56A5',
      'primary-var-1': '#8189D3',
      'primary-var-2': '#9747FF',
      secondary: '#F0F0E9',
      'secondary-var-1': '#EBEBDE',
      'secondary-blur': '#66666690',
      'grey-font': '#666666',
    },
    fontSize: {
      // 'font-text-desktop': '16px',
      'font-text-desktop': '24px',
      // 'font-title-desktop': '22px',
      'font-title-desktop': '30px',
      'font-headline-desktop': '42px',
      'font-text-mobile': '12px',
      'font-title-mobile': '14px',
      'font-headline-mobile': '24px',
    },
    lineHeight: {
      'font-text-desktop': '40px',
      // 'font-text-desktop': '30px',
      'font-title-desktop': '40px',
      // 'font-title-desktop': '30px',
      'font-headline-desktop': '50px',
      'font-text-mobile': '20px',
      'font-title-mobile': '25px',
      'font-headline-mobile': '35px',
    },
    letterSpacing: {
      'desktop-ls': '0.2rem',
      'mobile-ls': '0.1rem',
    },
    extend: {
      spacing: {
        text: '30px',
        title: '50px',
      },
      fontFamily: {
        claritty: ['CLARITTY', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
