import { PokemonContext } from '../shop/pokemonContext.jsx';
import { useContext } from 'react';
import noPokemon from '../assets/pokeball.webp';
import { log } from '../log.js';

export default function Pokemon() {
  const {
    handleDeletePokemon,
    handlePrevPokemon,
    handleNextPokemon,
    pokemonList,
    selectedPokemonData,
    currentIndex,
    noPokemonSelected,
  } = useContext(PokemonContext);
  log('</Pokemon > rendered');
  let cssBtn =
    'rounded-md w-1/3 p-2 text-white bg-green-700 enabled:hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-80 disabled:invisible';

  let openPokeball = ' bg-[url(./assets/pokeball_bg.webp)]';
  let cssImageContainer =
    'flex items-center justify-center col-span-2 row-span-2 bg-contain bg-no-repeat bg-center';
  return (
    <section className="md:flex md:flex-col md:items-center w-full">
      <h1 className="font-pokemonSolid tracking-widest text-center text-6xl text-yellow-400 drop-shadow-[0_8px_2px_rgba(50,0,150,0.50)] mb-2">
        Pokedex
      </h1>
      <div className="grid grid-rows-4 grid-cols-4 bg-green-900 shadow-md  p-3 md:rounded-xl md:w-1/3">
        <h2 className="col-span-4 self-center  text-yellow-400 text-center capitalize text-2xl font-pokemonSolid tracking-widest">
          {(noPokemonSelected && 'No Pokemon in sight.') ||
            selectedPokemonData.name}
        </h2>
        <div
          className={
            (noPokemonSelected && cssImageContainer) ||
            (cssImageContainer += openPokeball)
          }
        >
          <img
            className={
              (noPokemonSelected && 'w-3/5 md:w-2/5') || 'w-30'
            }
            src={
              (noPokemonSelected && noPokemon) ||
              selectedPokemonData.pokemonData.sprites.front_default
            }
            alt={
              (noPokemonSelected && 'Closed pokeball') ||
              'Selected pokemon'
            }
          />
        </div>
        <div className="col-span-2 row-span-2 place-content-center">
          {(noPokemonSelected && (
            <h2 className="text-center text-2xl text-red-600 rotate-6 font-bold">
              Search for one!
            </h2>
          )) || (
            <table className="w-full text-sm">
              <thead className="text-xs text-yellow-400 uppercase text-left">
                <tr>
                  <th scope="col" className="px-2 py-2">
                    Stat
                  </th>
                  <th scope="col" className="px-2 py-2">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {pokemonList.pokemons[
                  currentIndex
                ].pokemonData.stats.map((staty) => {
                  return (
                    <tr
                      key={staty.stat.name}
                      className="hover:bg-gray-600"
                    >
                      <td className="text-red-600 font-bold px-2">
                        {staty.stat.name}
                      </td>
                      <td className="text-white font-bold px-4">
                        {staty.base_stat}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        <div className="col-span-4 flex items-end gap-2">
          <button
            className={cssBtn}
            disabled={noPokemonSelected ?? false}
            onClick={handlePrevPokemon}
          >
            Previous
          </button>
          <button
            className={cssBtn}
            disabled={noPokemonSelected ?? false}
            onClick={() =>
              handleDeletePokemon(pokemonList.selectedPokemonId)
            }
          >
            Delete
          </button>
          <button
            className={cssBtn}
            disabled={noPokemonSelected ?? false}
            onClick={handleNextPokemon}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
