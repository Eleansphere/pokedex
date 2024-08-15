import { PokemonContext } from '../shop/pokemonContext.jsx';
import { useContext } from 'react';
import { log } from '../log.js';
export default function Pokemon() {
  const { handleDeletePokemon, handlePrevPokemon,handleNextPokemon, pokemonList, selectedPokemonData, currentIndex } = useContext(PokemonContext);
  log('</Pokemon > rendered');
  let cssBtn = 'rounded-md p-2 text-white bg-green-700 hover:bg-green-400 w-1/3';
  
  return (
    <section className="grid grid-rows-4 grid-cols-4 gap-1  bg-green-900 p-3 rounded-xl w-full md:w-1/3 max-h-min">
      <h2 className="col-span-4 self-center  text-yellow-400 text-center capitalize text-2xl font-pokemonSolid tracking-widest">
        {selectedPokemonData.name}
      </h2>
      <div className="flex items-center col-span-2 row-span-2 bg-[url(./src/assets/pokeball_bg.png)] bg-contain bg-no-repeat bg-center">
        <img
          className="mx-auto"
          src={selectedPokemonData.pokemonData.sprites.front_default}
          alt="selectedPokemonSprite"
        />
      </div>
      <div className="col-span-2 row-span-2">
        <table className='min-w-full'>
          {
            pokemonList.pokemons[currentIndex].pokemonData.stats.map(staty =>{
              return(
                <tr key={staty.stat.name}>
                  <td className='text-red-600 font-bold'>{staty.stat.name}</td>
                  <td className="text-white font-bold">{staty.base_stat}</td>
                </tr>
              );
            })
          }
        </table>
      </div>
      <div className="col-span-4 flex items-end gap-2">
        <button className={cssBtn} onClick={handlePrevPokemon}>Prev Pokemon</button>
        <button className={cssBtn} onClick={()=>handleDeletePokemon(pokemonList.selectedPokemonId)}>Delete</button>
        <button className={cssBtn} onClick={handleNextPokemon}>Next Pokemon</button>
      </div>
    </section>
  );
}
