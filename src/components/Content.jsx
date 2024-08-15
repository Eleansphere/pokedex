import { useContext } from "react";
import Pokemon from "./Pokemon.jsx";
import NoPokemon from "./NoPokemon.jsx";
import { PokemonContext } from "../shop/pokemonContext.jsx";
import { log } from "../log.js";
export default function Content(){
  log('</App > rendered');
  
    const {pokemonList} = useContext(PokemonContext);
    
    return(
        <>
        <h1 className="font-pokemonSolid tracking-widest text-5xl text-yellow-400 drop-shadow-[0_8px_2px_rgba(50,0,150,0.50)]">
        Pokedex
      </h1>
        {pokemonList.selectedPokemonId === undefined ? (
        <NoPokemon />
      ) : (
        <Pokemon />
      )}
        
        </>
    )
}