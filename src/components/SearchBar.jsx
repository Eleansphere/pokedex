import { forwardRef } from 'react';
import loadingPokeball from '../assets/loading_pokeball.gif';

const SearchBar = forwardRef(function SearchBar(
  { handleSearch, isLoading },
  ref
) {

  return (
    <div className="w-full md:w-1/3 bg-green-900 rounded-xl p-4 flex gap-1">
      <input
        className="
            placeholder:italic placeholder:text-slate-400 block bg-white w-full border-2 border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm"
        placeholder="Search for pokemon..."
        type="text"
        ref={ref}
      />
      <button
        className="
            w-full bg-green-700 hover:bg-green-500 text-white font-semibold rounded-md p-1 relative disabled:cursor-not-allowed disabled:opacity-80"
        onClick={handleSearch} 
        disabled = {isLoading ?? false }
        onKeyDown={handleSearch}
      >
        Search
        {isLoading && (
          <img
            className="w-10 absolute top-0 right-1"
            src={loadingPokeball}
            alt="loadingPokeball"
          />
        )}
      </button>
    </div>
  );
});

export default SearchBar;
