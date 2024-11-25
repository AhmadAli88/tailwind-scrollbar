import scrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Path to your files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    scrollbar, // Use import for the scrollbar plugin
  ],
};
