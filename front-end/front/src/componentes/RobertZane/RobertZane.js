import React from 'react';
import robertWallpaper from './robertWallpaper.jpg'

const RobertZane = () => {
    return (
        <div>
            <h1 className='titulo'>Robert Zane</h1>
            <div className='descricao'>
                <p>
                    Robert Zane é um advogado renomado e uma figura influente no mundo jurídico de Nova York. Conhecido por sua 
                    inteligência afiada e sua abordagem estratégica para a advocacia, ele é uma força a ser reconhecida nos tribunais.
                </p>
                <p>
                    Como fundador e sócio-gerente da Zane Specter Litt Wheeler Williams, Robert é responsável por liderar uma das 
                    principais firmas de advocacia da cidade. Sua experiência e reputação o tornam uma autoridade respeitada no 
                    mundo jurídico.
                </p>
                <p>
                    Além de suas habilidades profissionais, Robert é um homem de princípios e integridade. Ele valoriza a honestidade 
                    e a justiça acima de tudo e está disposto a lutar pelo que é certo, mesmo que isso signifique enfrentar desafios 
                    e adversidades.
                </p>
                <p>
                    O relacionamento de Robert com sua filha, Rachel Zane, é uma parte central de sua história na série "Suits". Ele 
                    é um pai dedicado que se preocupa profundamente com o bem-estar de Rachel e está sempre lá para apoiá-la em sua 
                    jornada.
                </p>
            </div>
            <div className="img-container">
                <img src={robertWallpaper} alt='Wallpaper' />
            </div>
        </div>
    );
};

export default RobertZane;
