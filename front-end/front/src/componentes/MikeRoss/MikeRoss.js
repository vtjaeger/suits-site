import React, { useState, useEffect } from 'react';
import './MikeRoss.css';
import mikeRossWallpaper from './mikeRossWallpaper.jpg'; // Importe a imagem

const MikeRoss = () => {
    return (
        <div>
            <h1 className='titulo'>Mike Ross</h1>
            <div className='descricao'>
                <p>
                    Mike Ross é um talentoso e astuto jovem advogado que ganhou fama ao trabalhar em uma das melhores firmas de advocacia de Nova York. 
                    Apesar de nunca ter frequentado a faculdade de direito, sua inteligência e habilidade inata para memorizar detalhes legais complexos 
                    o tornam um recurso inestimável para sua equipe.
                </p>
                <p>
                    Ross é conhecido por sua capacidade de pensar rapidamente sob pressão e por sua ética de trabalho inabalável. Seu relacionamento 
                    próximo com Harvey Specter, um dos principais advogados da empresa, o coloca em situações desafiadoras, mas ele sempre 
                    consegue encontrar uma solução inteligente.
                </p>
                <p>
                    Além de suas habilidades profissionais, Mike Ross é um personagem carismático e cativante, cujas aventuras jurídicas 
                    e pessoais mantêm os espectadores envolvidos e ansiosos por mais.
                </p>
            </div>
            <div className="img-container">
                <img src={mikeRossWallpaper} alt='mike Wallpaper' />
            </div>
        </div>
    );
};

export default MikeRoss;
