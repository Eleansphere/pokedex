import { createContext, useState, useRef, useCallback, useEffect } from "react";
import { fetchPokemon } from "../components/http.js";
/*Template pro našeptávač*/

export const PokemonContext = createContext({
    
    pokemonList:{
        selectedPokemonId:undefined,
        pokemons: [],
    },
    handleDeletePokemon: ()=>{},
    handleShowSelectedPokemon: ()=>{},
    handleSearch: ()=>{},    
    handlePokemonLoad: ()=>{},
    handlePrevPokemon: ()=>{},

});

export default function PokemonContextProvider({ children }){

// state     
    const [pokemonList, setPokemonList] = useState({
        selectedPokemonId: undefined,
        pokemons: [],
      });
    
    const [renderState, setRenderState] = useState(undefined);
    
    const [dataError, setDataError] = useState(false);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [isFetching, setIsFetching] = useState(false);

//refs

    const dialog = useRef();
    const inputValue = useRef();

//validace vyhledani pokemona 

    const handleSearch = useCallback(
        function handleSearch() {
        if (inputValue.current.value.trim() === '') {
          dialog.current.open();
        } else if (
          pokemonList.pokemons.find(
            (pokemon) => inputValue.current.value.trim().toLowerCase() === pokemon.name
          )
        ) {
          setDataError(true);
          dialog.current.open();
          inputValue.current.value = '';
        } else {
          setIsFetching(true);
          setRenderState(inputValue.current.value);
        }
      },[pokemonList.pokemons])

// data pokemona z API 

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
    

// smazani vybraneho pokemona

      function handleDeletePokemon(id) {
        setPokemonList((prevState) => {
          return {
            selectedPokemonId: undefined,
            pokemons: prevState.pokemons.filter(
              (pokemon) => pokemon.id !== id
            ),
          };
        });
        setRenderState(undefined);
        console.log(pokemonList);
      }

// zobrazeni vybraneho pokemona


    function handleShowSelectedPokemon(id) {
      setPokemonList((prevState) => {
        return {
          ...prevState,
          selectedPokemonId: id,
        };
      });
      console.log(pokemonList);
    }
// data selektovaneho pokemona

    const selectedPokemonData = pokemonList.pokemons.find(
        (pokemon) => pokemon.id === pokemonList.selectedPokemonId
    );


// zobrazeni predchoziho pokemona z listu

    function handlePrevPokemon(){
        setPokemonList((prevState) =>{
          return {
            ...prevState,
            selectedPokemonId: pokemonList.prevState.pokemons[pokemonList.pokemons.length-1].id,
          };
        });
    }

// modal closing

    function handleClose() {
        setModalIsOpen(false);
        dataError ? setDataError(false) : null;
        dialog.current.close();
    }


//async + useEffect
// pozadavek na API
useEffect(() => {
    async function loadPokemon() {
      if (inputValue.current.value.trim() !== '') {
        try {
          const data = await fetchPokemon(inputValue.current.value.toLowerCase());
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

// potvrzeni vyhledavani pomoci Enter klavesy  
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




/*KONTEXT*/

    const pokemonKontextValue = {
        pokemonList,
        renderState,
        handleSearch,
        handlePokemonLoad,
        handleDeletePokemon,
        handleShowSelectedPokemon,
        selectedPokemonData,
        handlePrevPokemon,
        handleClose,
        dataError,
        modalIsOpen,
        isFetching,
        dialog,
        inputValue,
    }


    return(
        <PokemonContext.Provider value={pokemonKontextValue}>
            {children}
        </PokemonContext.Provider>

    );
}