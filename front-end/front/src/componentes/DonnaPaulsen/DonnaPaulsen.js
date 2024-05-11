import React from 'react';
import donnaWallpaper from './donnaWallpaper.jpg';

const DonnaPaulsen = () => {
    return (
        <div>
            <h1 className='titulo'>Donna Paulsen</h1>
            <div className='descricao'>
                <p>
                    Donna Paulsen é uma personagem marcante na série "Suits". Conhecida por sua inteligência afiada, perspicácia emocional e lealdade inabalável, ela é uma presença essencial no mundo da advocacia de Nova York.
                </p>
                <p>
                    Como assistente executiva de Harvey Specter, Donna desempenha um papel fundamental nos sucessos da firma de advocacia Pearson Hardman. Ela é conhecida por sua habilidade de antecipar as necessidades de Harvey e resolver problemas com eficiência, muitas vezes agindo como sua conselheira mais confiável.
                </p>
                <p>
                    Além de suas habilidades profissionais excepcionais, Donna é admirada por seu estilo único e sua personalidade cativante. Sua confiança e charme a tornam uma figura querida tanto entre seus colegas quanto entre os telespectadores.
                </p>
                <p>
                    Embora possa parecer descontraída e divertida, Donna é extremamente dedicada ao seu trabalho e às pessoas que ama. Seu relacionamento com Harvey é especialmente profundo, revelando uma conexão especial baseada em confiança mútua e respeito.
                </p>
            </div>
            <div className="img-container">
                <img src={donnaWallpaper} alt='Donna Paulsen Wallpaper' />
            </div>
        </div>
    );
};

export default DonnaPaulsen;
