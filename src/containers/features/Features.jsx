import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'A aprendizagem de máquina do Chat GPT',
    text: 'O Chat GPT é uma revolução na comunicação online, tornando as interações mais inteligentes e eficientes.',
  },
  {
    title: 'O Chat GPT é como ter um assistente virtual',
    text: 'Com o Chat GPT, a IA encontra seu lugar na conversa, oferecendo assistência instantânea e informações precisas.',
  },
  {
    title: 'A simplicidade de usar o Chat GPT',
    text: 'A tecnologia do Chat GPT está moldando o futuro do atendimento ao cliente, proporcionando respostas rápidas e eficazes.',
  },
  {
    title: 'Conversar com o Chat GPT',
    text: 'O Chat GPT é como ter um assistente virtual sempre pronto para responder às suas perguntas, 24 horas por dia.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">O futuro esta aí, pronto pra você agarrar. Comece a correr atrás do que quer hoje mesmo e faça acontecer!</h1>
      <p>Solicite um acesso antecipado para começar!</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;