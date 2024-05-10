import React, { useState, useEffect } from 'react';
import './Character.css'; 

const Character = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/character')
            .then(response => response.json())
            .then(data => setCharacters(data))
            .catch(error => console.error('Erro na requisição:', error));
    }, []);

    return (
        <div className="characters-container">
            <h1>Characters</h1>
            <div className="character-list">
                {characters.map(character => (
                    <div key={character.id} className="character-card">
                        <h2 className="character-name">{character.name}</h2>
                        <p>ID: {character.id}</p>
                        <p>Character: {character.character}</p>
                        <p>Age: {character.age}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Character;
