import React from 'react';
import harveyWallpaper from './harveyWallpaper.jpg';

const HarveySpecter = () => {
    return (
        <div className="container">
            <h1 className='titulo'>Harvey Specter</h1>
            <div className='descricao'>
                <p>
                    Harvey Specter é uma figura icônica no mundo da advocacia de Nova York. Conhecido por sua presença imponente, 
                    inteligência afiada e habilidades incomparáveis como advogado, ele domina cada cena em que está presente.
                </p>
                <p>
                    Como sócio sênior de uma das principais firmas de advocacia da cidade, Specter é conhecido por sua abordagem 
                    implacável para ganhar casos e sua capacidade de antecipar os movimentos dos adversários. Sua astúcia e 
                    perspicácia legal o tornam uma força a ser reconhecida nos tribunais.
                </p>
                <p>
                    Além de suas habilidades profissionais, Harvey Specter é conhecido por sua personalidade magnética e estilo de vida luxuoso. 
                    Ele é um homem de gostos refinados e está sempre vestido impecavelmente, projetando confiança e sofisticação em todas as 
                    situações.
                </p>
                <p>
                    Embora possa parecer distante e frio à primeira vista, Specter tem um lado mais suave e se importa profundamente com aqueles 
                    que estão próximos a ele, especialmente sua equipe de advogados e seus amigos mais íntimos. Seu relacionamento com Mike Ross, 
                    em particular, revela uma faceta mais vulnerável de sua personalidade, mostrando que, por trás de sua fachada de poder e 
                    sucesso, há um homem com suas próprias lutas e humanidade.
                </p>
            </div>
            <div className="img-container">
                <img src={harveyWallpaper} alt='Harvey Specter Wallpaper' />
            </div>
        </div>
    );
};

export default HarveySpecter;
