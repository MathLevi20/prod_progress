import React from 'react';
import Navbar from './../components/Navbar';
import './defalt.css';
import './home.css'
import Waifu from "./go.png"
const Home = () => {
    return (


        <div className='t'>
            <Navbar />
            <div className="Waifu">
                <img src={Waifu} alt="Logo" />
                <p className="pergunta">Quer fazer um projeto?</p>
            </div>
            <div className="interacao"><button className="download">Vamos lá!</button></div>
            <div className='text'>
                <h1>
                    Sabe aquela ideia que surgiu em uma conversa aleatória?
                </h1>
                <h3>
                    Quero fazê-la se tornar real. Seja um projeto de animação, um jogo ou um novo app que vai revolucionar a indústria, estarei lá para ajudar você e sua equipe.
                </h3>
                <h1>
                    O que eu sou?
                </h1>
                <h3>
                    Com foco em gerenciamento de projetos, progressive consiste em um bot que serve de interface para trabalhos em grupo usando o discord, delegando tarefas e proporcionando status de conclusão dessas atividades.
                </h3>
                <h1>
                    O que posso fazer por você?
                </h1>
                <h3>
                    Coordenar equipes é uma tarefa complexa, exige desde boas práticas de organização a uma boa relação com os colaboradores. A plataforma discord, apesar de inicialmente focada em comunicação para jogos, percebeu a diversificação do seu público para além desse escopo, e hoje, serve de local de encontro para desingers, modeladores, desenvolvedores e diversas outras comunidades que necessitam de um espaço com múltiplas formas de comunicação.
                </h3>
                <h3>
                    Normalmente, coordenar um trabalho em equipe com os usuários dessa plataforma exige o apelo de softwares terceiros. Sendo assim, nosso objetivo é agregar a praticidade de se ter comunicação e organização em um só local.
                </h3>
            </div>
            <div className="final">
            </div>
        </div>
    )

}

export default Home;
