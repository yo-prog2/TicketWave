/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*"],
  theme: {
    extend: {
      colors: {
        primary: '#083135',      // Couleur primaire
        secondary: '##faa253',    // Couleur secondaire
        tertiary: '#FFFFFF',     // Couleur tertiaire
      },
      fontFamily: {
        body : ["Mulish"]       // Police des titres
      },
      fontSize: {
        navSize: '14px',    // Taille de police pour la navigation
        heroSize: '36px',   // Taille de police pour le hero
        pSize: '24px', 
      },
    },
  },
  plugins: [],
}

