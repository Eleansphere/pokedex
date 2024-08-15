import { log } from '../log.js';

export default function NoPokemon(){
    log('</NoPokemon > rendered');
  
    return(
        <section className='flex items-end justify-center flex-col  bg-green-900 p-3 rounded-xl w-full md:w-1/3 h-60 sm:w-1/3 bg-[url(./src/assets/pokeball_bg.png)] bg-contain bg-no-repeat bg-left'>
            <h2 className="text-white font-bold text-xl">Ops... No Pokemon in sight.</h2>
            <p className="text-yellow-400">Search for one.</p>
        </section>
    );
}

// zrusit NoPokemon komponent a nahradit ho podminecne v komponentu Pokemon ??
// moznost tak zrusit i Content komponent, zjednoduseni