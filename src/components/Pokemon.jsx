export default function Pokemon({ pokemonName, pokemonImg, deletePokemon }){
    return(
        <section className="flex items-center flex-col gap-4 bg-green-900 p-4 rounded-xl w-1/3">
            <h2 className="font-bold text-white text-xl">{pokemonName}</h2>
            <img className="w-40" src={pokemonImg} alt="" />
            <button onClick={deletePokemon} className=" rounded-md p-2 text-white bg-green-700 hover:bg-green-400 w-1/2 mt-2">Delete</button>
        </section>
    )
}