import { useContext } from 'react';
import { PokemonContext } from '../shop/pokemonContext.jsx';
import { log } from '../log.js';
export default function Sidebar() {
  log('</Sidebar > rendered');

  const { pokemonList, handleShowSelectedPokemon } =
    useContext(PokemonContext);

  return (
    <section className="w-full min-h-fit md:w-1/3  bg-slate-300/60 p-3 md:rounded-md">
      <h2 className="text-red-600 text-2xl font-bold mb-2">
        You&apos;ve found: {pokemonList.pokemons.length}
      </h2>

      <ul className="grid grid-cols-3 grid-rows-3 gap-4">
        {/* Mapovat pouze pokemony s indexem 0-8 a pak 9 - 17...
            State na kontrolu poctu pokemonu v poli?
            jak bude pocet vetsi nez 9 zapnout stránkování a vytvorit druhou stránku
            preskocit na dalsi stranku a zobrazit vybrané indexy
            vytvořená stránka má btn, který zobrazi indexy k danemu cislu??
        */}

        {pokemonList.pokemons.map((pokemon) => {
          let cssClasses =
            'p-2 w-full rounded-md text-white hover:rotate-2';

          if (pokemon.id === pokemonList.selectedPokemonId) {
            cssClasses += ' bg-yellow-600 outline outline-2';
          } else {
            cssClasses += ' bg-green-700';
          }
          return (
            <li key={pokemon.id}>
              <button
                className={cssClasses}
                onClick={() => handleShowSelectedPokemon(pokemon.id)}
              >
                {pokemon.name}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
