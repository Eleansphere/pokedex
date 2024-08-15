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
      
      <Content />
      <SearchBar />
      <PokemonList />    
    
    </PokemonContextProvider>
  );
}

export default App;
