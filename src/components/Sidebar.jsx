export default function Sidebar({ pokemonList, onSelectPokemon }){
    return(
        <aside className="w-1/3 min-h-min bg-slate-300/50 p-4 rounded-md">
            <h2 className="text-yellow-600 text-2xl font-bold">You've found:</h2>
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
                                onClick={()=>onSelectPokemon(pokemon.id)}>
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