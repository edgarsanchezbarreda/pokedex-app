import React from 'react';
import './Pokecard.css';

const pokemonImgApi =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = ({ id, name, type, exp }) => {
    let imgSrc = `${pokemonImgApi}${id}.png`;
    return (
        <div className='Pokecard'>
            <div className='Pokecard-name'>{name}</div>
            <img className='Pokemoncard-img' src={imgSrc} alt='Pokemon Image' />
            <div className='Pokecard-type'>Type: {type}</div>
            <div className='Pokecard-exp'>EXP: {exp}</div>
        </div>
    );
};

export default Pokecard;
