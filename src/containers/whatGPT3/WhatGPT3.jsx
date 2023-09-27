import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatgpt3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="O que é GPT-3" text="O ChatGPT-3, como o nome sugere, é frequentemente utilizado para tarefas de conversação, onde pode interagir com os usuários em linguagem natural, respondendo a perguntas e fornecendo informações ou assistência com base no contexto fornecido. Ele tem uma ampla gama de aplicações, desde chatbots até assistentes virtuais, suporte ao cliente automatizado e muito mais. É uma ferramenta poderosa para gerar texto de maneira inteligente e contextual." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">As possibilidades estão além da sua imaginação.</h1>
      <p>Conheça a biblioteca</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Chatbots são programas de computador ou sistemas de inteligência artificial projetados para interagir com seres humanos por meio de conversas em linguagem natural, seja por texto ou voz." />
      <Feature title="Base de conhecimento" text="Muitas empresas e organizações mantêm bases de conhecimento online acessíveis ao público em seus sites. Essas bases de conhecimento frequentemente contêm artigos, tutoriais, FAQs (Perguntas Frequentes) e guias para ajudar os usuários a encontrar respostas para suas perguntas." />
      <Feature title="Educação" text="É importante notar que, embora os chatbots baseados em ChatGPT tenham um grande potencial na educação, eles devem ser usados ​​como complemento às interações humanas e não como substitutos completos" />
    </div>
  </div>
);

export default WhatGPT3;