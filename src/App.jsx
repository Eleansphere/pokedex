import { useRef, useState, useEffect } from 'react';
import './App.css';
import { fetchPokemon } from './components/http.js';
import NoPokemon from './components/NoPokemon.jsx';
import Pokemon from './components/Pokemon.jsx';
import SearchBar from './components/SearchBar.jsx';
import Modal from './components/Modal.jsx';
import Sidebar from './components/Sidebar.jsx';
import Error from './components/Error.jsx';

function App() {
  const [pokemonList, setPokemonList] = useState({
    selectedPokemonId: undefined,
    pokemons: [],
  });

  const [renderState, setRenderState] = useState(undefined);

  const [dataError, setDataError] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [isFetching, setIsFetching] = useState(false);

  const dialog = useRef();
  const inputValue = useRef();

  function handlePokemonLoad(data) {
    setPokemonList((prevState) => {
      const newPokemon = {
        id: data.id,
        name: data.name,
        pokemonData: data,
      };
      return {
        ...prevState,
        pokemons: [...prevState.pokemons, newPokemon],
      };
    });
  }

  useEffect(() => {
    async function loadPokemon() {
      if (inputValue.current.value.trim() !== '') {
        try {
          const data = await fetchPokemon(inputValue.current.value);
           handlePokemonLoad(data);
          inputValue.current.value = '';
          setIsFetching(false);
        } catch (error) {
          inputValue.current.value = '';
          dialog.current.open();
          setIsFetching(false);
          setRenderState(undefined);
        }
      }
    }

    loadPokemon();
  }, [renderState]);

  function handleSearch() {
    if (inputValue.current.value.trim() === '') {
      dialog.current.open();
    } else if (
      pokemonList.pokemons.find(
        (pokemon) => inputValue.current.value.trim() === pokemon.name
      )
    ) {
      setDataError(true);
      dialog.current.open();
      inputValue.current.value = '';
    } else {
      setIsFetching(true);
      setRenderState(inputValue.current.value);
    }
  }

  function handleShowSelectedPokemon(id) {
    console.log(pokemonList);
    setPokemonList((prevState) => {
      return {
        ...prevState,
        selectedPokemonId: id,
      };
    });
  }

  const selectedPokemonData = pokemonList.pokemons.find(
    (pokemon) => pokemon.id === pokemonList.selectedPokemonId
  );

  function handleDeletePokemon(id) {
    setRenderState(undefined);
    setPokemonList((prevState) => {
      return {
        selectedPokemonId: undefined,
        pokemons: prevState.pokemons.filter(
          (pokemon) => pokemon.id !== id
        ),
      };
    });
  }

  function handleClose() {
    setModalIsOpen(false);
    dataError ? setDataError(false) : null;
    dialog.current.close();
  }

  useEffect(
    ()=>{
      function callback(e){
        if(e.code ==="Enter"){
          handleSearch();
        }
      }
      document.addEventListener("keydown", callback);
      return ()=>{
      document.removeEventListener("keydown", callback);
      } 

  },[handleSearch]);

  return (
    <main className="h-screen flex items-center flex-col gap-6 bg-[url(./assets/grassland_bg.jpg)]">
      <Modal ref={dialog}>
        {dataError && (
          <Error
            title="An error has occurred"
            message="U've already caught this one!"
            onConfirm={handleClose}
          />
        )}
        {!dataError && (
          <Error
            title="An error has occured"
            message="Please enter valid name."
            onConfirm={handleClose}
          />
        )}
      </Modal>
      <h2 className="text-4xl font-bold mt-4 text-yellow-400">
        Pokedex
      </h2>

      {pokemonList.selectedPokemonId === undefined ? (
        <NoPokemon />
      ) : (
        <Pokemon
          pokemonName={selectedPokemonData.name}
          pokemonImg={
            selectedPokemonData.pokemonData.sprites.front_default
          }
          deletePokemon={() =>
            handleDeletePokemon(pokemonList.selectedPokemonId)
          }
        />
      )}
      <SearchBar handleSearch={handleSearch} isLoading={isFetching} ref={inputValue} />
      <Sidebar
        pokemonList={pokemonList}
        onSelectPokemon={handleShowSelectedPokemon}
      />
    </main>
  );
}

export default App;
