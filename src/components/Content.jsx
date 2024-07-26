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
        {pokemonList.selectedPokemonId === undefined ? (
        <NoPokemon />
      ) : (
        <Pokemon />
      )}
        
        </>
    )
}