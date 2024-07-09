import noPokemonImg from '../assets/no-Pokemon.jpg';


export default function NoPokemon(){
    return(
        <section className='flex items-center flex-col gap-4 bg-green-900 p-4 rounded-xl w-1/3'>
            <h2 className="text-white font-bold text-xl">Ops... No Pokemon in sight.</h2>
            <p className="text-white">Search for one.</p>
            <img className='w-40' src={noPokemonImg} alt="" />
        </section>
    );
}