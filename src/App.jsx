import './App.css';
import { log } from './log.js';
import PokemonContextProvider from './shop/pokemonContext.jsx';
import Content from './components/Content.jsx';
import SearchBar from './components/SearchBar.jsx';
import Sidebar from './components/Sidebar.jsx';
function App() {

  log('</App > rendered');
  
  return (
    <PokemonContextProvider>

    <main className="h-screen flex items-center flex-col gap-6 bg-[url(./assets/grassland_bg.jpg)]">
      
      <h2 className="text-4xl font-bold mt-4 text-yellow-400">
        Pokedex
      </h2>

      <Content />
      <SearchBar />
      <Sidebar />    
    </main>
    </PokemonContextProvider>
  );
}

export default App;
