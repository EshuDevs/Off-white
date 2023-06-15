/** @type {import('tailwindcss').Config} */
export default {
  
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
      fontFamily:{
        barcode:"'Libre Barcode 128 Text', cursive",
        inter:"'Inter', sans-serif",
        kanit:"'Kanit', sans-serif",
      },

      colors: {"background":"#F5E8D8",
              "brown":"#423430"
    }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

