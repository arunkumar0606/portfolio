/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cabin: ['Cabin', 'sans-serif'],
        kanit:['kani'], // Define the Cabin font
      },
    },
      

  },
  plugins: [],
  safelist: [
    'text-green-700', 'bg-green-700', 'hover:shadow-green-800',
    'text-red-700', 'bg-red-700', 'hover:shadow-red-800',
    'text-cyan-700', 'bg-cyan-700', 'hover:shadow-cyan-800',
    'text-gray-700', 'bg-gray-700', 'hover:shadow-gray-800',
  ],
}

