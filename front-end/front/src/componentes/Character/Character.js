/* Character.js */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Character.css';

const Character = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/character')
            .then(response => response.json())
            .then(data => setCharacters(data))
            .catch(error => console.error('Erro na requisição:', error));
    }, []);

    function removeSpaces(name) {
        return name.replace(/\s+/g, ''); //regex
    }

    return (
        <div className="characters-container">
            <h1>Characters</h1>
            <div className="character-list">
                {characters.map(character => (
                    <Link key={character.id} to={`/character/${character.id}`} className="character-card-link">
                        <div className="character-card">
                            <h2 className="character-name">{character.name}</h2>
                            <img src={`/imgs/personagens/${removeSpaces(character.name)}.png`} alt={character.name} className='character-img'></img>
                        </div>
                    </Link>
                ))}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
    );
};

export default Character;
