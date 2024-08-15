/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        pokemonSolid: "'PokemonSolid', serif",
        pokemonHollow: "'PokemonHollow', serif",
      },
    },
    letterSpacing: {
      widest: '.5rem',
    }
  },
  plugins: [],
}