import { useContext } from "react";
import { PokemonContext } from "../shop/pokemonContext.jsx";
import { log } from '../log.js';
export default function Sidebar(){
    log('</Sidebar > rendered');
  
    const { pokemonList, handleShowSelectedPokemon } = useContext(PokemonContext);
    return(
        <aside className="w-full md:w-1/3 min-h-min bg-slate-300/50 p-4 rounded-md">
            <h2 className="text-yellow-600 text-2xl font-bold">You&apos;ve found:</h2>
            <ul className="grid grid-cols-3 grid-rows-3 gap-4 mt-4">
                {
                    pokemonList.pokemons.map((pokemon)=>{
                        let cssClasses = "p-2 w-full rounded-md text-white hover:rotate-2";
                        
                        if(pokemon.id === pokemonList.selectedPokemonId){
                            cssClasses += ' bg-yellow-600 outline outline-2';
                        } else {
                            cssClasses += ' bg-green-700';
                        }   
                        return(
                            <li key={pokemon.id}>
                                <button className={cssClasses} 
                                onClick={()=>handleShowSelectedPokemon(pokemon.id)}>
                                {pokemon.name}
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
        </aside>
    )
}