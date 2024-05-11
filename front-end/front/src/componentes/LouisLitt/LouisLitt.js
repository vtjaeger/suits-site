import React from 'react';
import luisWallpaper from './luisWallpaper.jpg';

const LouisLitt = () => {
    return (
        <div>
            <h1 className='titulo'>Louis Litt</h1>
            <div className='descricao'>
                <p>
                    Louis Litt é um dos advogados mais talentosos e complexos da série "Suits". Embora inicialmente tenha sido retratado como um rival de Harvey Specter, Louis eventualmente se torna um membro valioso da equipe da Pearson Hardman.
                </p>
                <p>
                    Como um advogado brilhante e meticuloso, Louis é conhecido por sua dedicação implacável aos detalhes e sua capacidade de mergulhar fundo em casos legais complexos. No entanto, sua busca incessante por reconhecimento e seu desejo de ser respeitado muitas vezes o colocam em conflito com seus colegas.
                </p>
                <p>
                    Além de suas habilidades profissionais, Louis é um personagem profundamente humano, com suas próprias inseguranças e desafios pessoais. Sua jornada ao longo da série o vê lidar com questões como lealdade, amizade e autoaceitação, mostrando diferentes facetas de sua personalidade ao longo do caminho.
                </p>
                <p>
                    Apesar de suas peculiaridades e excentricidades, Louis é um personagem profundamente cativante e muitas vezes é o centro de momentos emocionais e cômicos na série. Sua evolução ao longo das temporadas o torna um dos personagens mais complexos e interessantes de "Suits".
                </p>
            </div>
            <div className="img-container">
                <img src={luisWallpaper} alt='Wallpaper' />
            </div>
        </div>
    );
};

export default LouisLitt;
