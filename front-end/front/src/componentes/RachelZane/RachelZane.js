import React from 'react';
import rachelWallpaper from './rachelWallpaper.png';

const RachelZane = () => {
    return (
        <div>
            <h1 className='titulo'>Rachel Zane</h1>
            <div className='descricao'>
                <p>
                    Rachel Zane é uma personagem chave na série "Suits", conhecida por sua inteligência, determinação e charme cativante. 
                    Ela começa como uma assistente jurídica na firma Pearson Hardman, mas ao longo das temporadas, ela se torna uma advogada 
                    talentosa e respeitada.
                </p>
                <p>
                    Rachel é conhecida por sua ética de trabalho impecável e sua habilidade de superar desafios para alcançar seus objetivos. 
                    Ela é uma estudante dedicada de direito e enfrenta diversos obstáculos em sua jornada para se tornar uma advogada, 
                    incluindo conflitos familiares e desafios pessoais.
                </p>
                <p>
                    Além de suas realizações profissionais, Rachel é admirada por sua bondade e compaixão. Ela é uma amiga leal e está sempre 
                    disposta a ajudar aqueles que ama. Seu relacionamento com Mike Ross é uma parte central de sua história na série, e juntos 
                    eles enfrentam diversos desafios e obstáculos.
                </p>
                <p>
                    Ao longo das temporadas, Rachel se destaca como uma personagem forte e inspiradora, que luta por seus sonhos e valores, 
                    mesmo quando confrontada com adversidades. Sua jornada é uma parte essencial da narrativa de "Suits" e ela é amada pelos 
                    fãs por sua inteligência, determinação e coragem.
                </p>
            </div>
            <div className="img-container">
                <img src={rachelWallpaper} alt='Wallpaper'/>
            </div>
        </div>
    );
};

export default RachelZane;
