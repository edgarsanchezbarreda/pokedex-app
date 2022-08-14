import React from 'react';

import Pokedex from './Pokedex';
import listOfPokemon from './listOfPokemon';

import './App.css';

function App() {
    return (
        <div className='App'>
            <Pokedex pokemon={listOfPokemon} />
        </div>
    );
}

export default App;
