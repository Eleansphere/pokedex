export async function fetchPokemon(pokemonName){
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();
    
    if(!response.ok){
        throw new Error('Failed to fetch pokemon.');
    }
    
    return data;
}
