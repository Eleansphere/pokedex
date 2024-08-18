import './App.css';
import { log } from './log.js';
import PokemonContextProvider from './shop/pokemonContext.jsx';

import Pokemon from './components/Pokemon.jsx';
import SearchBar from './components/SearchBar.jsx';
import PokemonList from './components/PokemonList.jsx';
function App() {
  log('</App > rendered');

  return (
    <PokemonContextProvider>
      <main className="flex flex-col gap-2 items-center justify-center max-w-full min-h-dvh bg-[url(./assets/grassland_bg.jpg)] bg-bottom bg-clip-border bg-no-repeat">
        <Pokemon />
        <SearchBar />
        <PokemonList />
      </main>
    </PokemonContextProvider>
  );
}

export default App;
