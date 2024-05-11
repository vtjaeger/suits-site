import React from 'react';
import jessicaWallpaper from './jessicaWallpaper.jpg'; // Importe a imagem

const JessicaPearson = () => {
    return (
        <div>
            <h1 className='titulo'>Jessica Pearson</h1>
            <div className='descricao'>
                <p>
                    Jessica Pearson é uma personagem poderosa e icônica na série "Suits", conhecida por sua inteligência afiada, 
                    presença imponente e habilidades excepcionais como advogada e líder.
                </p>
                <p>
                    Como a fundadora e ex-sócia-gerente da firma Pearson Hardman, Jessica é respeitada e temida por sua habilidade 
                    de dominar qualquer sala em que entra. Ela é conhecida por sua astúcia legal e sua capacidade de tomar decisões 
                    difíceis em situações de alta pressão.
                </p>
                <p>
                    Além de suas habilidades profissionais, Jessica é admirada por sua integridade e determinação. Ela enfrenta 
                    diversos desafios ao longo da série, incluindo disputas de poder dentro da firma e ameaças externas, mas 
                    sempre permanece firme em seus princípios e valores.
                </p>
                <p>
                    Jessica também é uma figura complexa e multifacetada, com uma vida pessoal intrigante que é explorada ao longo 
                    das temporadas. Seu relacionamento com Harvey Specter e outros membros da equipe é uma parte fundamental da 
                    narrativa, revelando diferentes aspectos de sua personalidade e motivando suas ações.
                </p>
            </div>
            <div className="img-container">
                <img src={jessicaWallpaper} alt='Jessica Pearson Wallpaper' />
            </div>
        </div>
    );
};

export default JessicaPearson;
