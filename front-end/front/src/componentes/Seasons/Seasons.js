import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do react-router-dom
import './Seasons.css';

const Seasons = () => {
    const [seasons, setSeasons] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/season')
            .then(response => response.json())
            .then(data => setSeasons(data))
            .catch(error => console.error('Erro na requisição:', error));
    }, []);

    return (
        <div className="season-container">

            <h1 className='temporadas'>Todas as Temporadas</h1>

            <ul className="season-list">

                {seasons.map(season => (
                    <Link key={season.id} to={`/season/${season.id}`} className="season-link">

                        <li key={season.id} className="season-item">

                            <div className="season-info">
                                <div>
                                    <strong className="season-title">Temporada {season.id}:</strong>
                                </div>
                                <div>
                                    <span className="season-description">{season.introduction}</span>
                                </div>
                            </div>

                        </li>
                        
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default Seasons;
