import './App.css';
import { log } from './log.js';
import PokemonContextProvider from './shop/pokemonContext.jsx';
import Content from './components/Content.jsx';
import SearchBar from './components/SearchBar.jsx';
import PokemonList from './components/PokemonList.jsx';
function App() {

  log('</App > rendered');
  
  return (
    <PokemonContextProvider>
      <main className='h-screen flex items-center flex-col gap-6 bg-[url(assets/grassland_bg.jpg)]'>

      <Content />
      <SearchBar />
      <PokemonList />    
    
      </main>
    </PokemonContextProvider>
  );
}

export default App;
