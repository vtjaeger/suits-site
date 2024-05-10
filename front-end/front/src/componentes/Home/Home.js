import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="div-home">
            <div className='home-container'>
            <h1>Bem-vindo à página inicial de Suits</h1>

            <p><strong>Suits</strong> é uma série de televisão de drama legal americana criada e escrita por Aaron Korsh. A série estreou em 23 de junho de 2011 e teve nove <Link to="/temporadas">temporadas</Link>.</p>

            <p>A série é ambientada em um prestigiado escritório de advocacia em Nova York e segue a vida pessoal e profissional de <Link to="/character/1">Harvey Specter</Link>, um advogado inteligente e bem-sucedido, e <Link to="/character/2">Mike Ross</Link>, um jovem prodígio com uma memória fotográfica, mas sem diploma de Direito.</p>
            <p>Explore nossas páginas de Personagens e Temporadas para saber mais sobre os episódios, personagens e curiosidades de Suits!</p>
            </div>
            <img src="/imgs/suitsWallpaper.jpg" alt="suitsPoster"></img>
        </div>
            
        
    );
};

export default Home;
