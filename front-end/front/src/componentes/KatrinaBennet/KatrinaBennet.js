import React from 'react';
import katrinaWallpaper from './katrinaWallpaper.jpg'; // Importe a imagem

const KatrinaBennett = () => {
    return (
        <div>
            <h1 className='titulo'>Katrina Bennett</h1>
            <div className='descricao'>
                <p>
                    Katrina Bennett é uma advogada talentosa e ambiciosa que se destaca na firma de advocacia Pearson Specter Litt. 
                    Conhecida por sua determinação e dedicação ao trabalho, ela rapidamente se torna uma figura importante na equipe.
                </p>
                <p>
                    Como uma advogada brilhante e estratégica, Katrina é capaz de enfrentar desafios difíceis e encontrar soluções 
                    criativas para problemas legais complexos. Sua ética de trabalho impecável e sua inteligência são admiradas por 
                    seus colegas e superiores.
                </p>
                <p>
                    Além de suas habilidades profissionais, Katrina é uma pessoa leal e compassiva. Ela valoriza as relações interpessoais 
                    e está sempre disposta a ajudar seus colegas quando necessário. Seu relacionamento com os membros da equipe, incluindo 
                    Louis Litt e Rachel Zane, é uma parte importante de sua jornada na série "Suits".
                </p>
                <p>
                    Ao longo das temporadas, Katrina enfrenta diversos desafios profissionais e pessoais, mas sua determinação e habilidades 
                    a ajudam a superar obstáculos e crescer como advogada e como pessoa.
                </p>
            </div>
            <div className="img-container">
                <img src={katrinaWallpaper} alt='Jessica Pearson Wallpaper' />
            </div>
        </div>
    );
};

export default KatrinaBennett;
