import { PokemonContext } from '../shop/pokemonContext.jsx';
import { useContext } from 'react';
import { log } from '../log.js';
export default function Pokemon() {
  const { handleDeletePokemon, handlePrevPokemon,handleNextPokemon, pokemonList, selectedPokemonData, currentIndex } = useContext(PokemonContext);
  log('</Pokemon > rendered');
  let cssBtn = 'rounded-md p-2 text-white bg-green-700 hover:bg-green-400 w-1/3';
  
  return (
    <section className="grid grid-rows-4 grid-cols-4 gap-4  bg-green-900 p-4 rounded-xl w-full md:w-1/3">
      <h2 className="col-span-4 font-bold text-white text-center capitalize text-xl">
        {selectedPokemonData.name}
      </h2>
      <div className="col-span-2 row-span-2 border-2 border-white bg-yellow-300/20">
        <img
          className="w-40 mx-auto"
          src={selectedPokemonData.pokemonData.sprites.front_default}
          alt="selectedPokemonSprite"
        />
      </div>
      <div className="col-span-2 row-span-2 border-2 border-white bg-yellow-700">
    
          {
            pokemonList.pokemons[currentIndex].pokemonData.stats.map(staty =>{
              return(
                <li key={staty.stat.name}>
                  {staty.stat.name}: {staty.base_stat}
                </li>
              );
            })
          }
        
      </div>
      <div className="col-span-4 flex items-center gap-2">
        <button className={cssBtn} onClick={handlePrevPokemon}>Prev Pokemon</button>
        <button className={cssBtn} onClick={()=>handleDeletePokemon(pokemonList.selectedPokemonId)}>Delete</button>
        <button className={cssBtn} onClick={handleNextPokemon}>Next Pokemon</button>
      </div>
    </section>
  );
}
