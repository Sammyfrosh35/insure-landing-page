/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        'Dark-Violet':'hsl(256, 26%, 20%)',
        'Grayish-Blue': 'hsl(216, 30%, 68%)',
        'very-dark-violet': 'hsl(270, 9%, 17%)',
        'dark-grayish-violet': 'hsl(273, 4%, 51%)',
        'Very-Light-Gray':' hsl(0, 0%, 98%)',
        // You can add more colors as needed
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
        DM: ['DM Serif Display', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/images/bg-pattern-intro-right-desktop.svg')"
        
      }
      
    },
  },
  plugins: [],
}