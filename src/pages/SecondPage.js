import React from 'react';
import { useGetPokemonByNameQuery } from '../apiServices/pokemonApi';
// import {} from './components/';

const SecondPage = () => {
  const { data /*, error, isLoading  */ } =
    useGetPokemonByNameQuery('bulbasaur');

  return (
    <main data-testid="app-component">
      <div>
        <img
          src={data?.sprites?.other?.home?.front_default}
          width="250px"
          height="250px"
        />
        <img
          src={data?.sprites?.other?.home?.front_shiny}
          width="250px"
          height="250px"
        />
      </div>
    </main>
  );
};

export default SecondPage;
