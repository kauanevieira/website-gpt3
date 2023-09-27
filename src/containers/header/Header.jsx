import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Vamos construir algo incrível com GPT-3 OpenAI.</h1>
      <p>O GPT-3 é treinado em uma vasta quantidade de texto da internet e é capaz de gerar texto de forma coerente e contextual, bem como responder a perguntas, completar frases e até mesmo realizar tarefas de tradução, resumo e geração de texto criativo.</p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Digite seu email" />
        <button type="button">Começar</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1.600 pessoas solicitaram acesso a uma visita nas últimas 24 horas.</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;