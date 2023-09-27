import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Solicite acesso antecipado para começar</h4>
      <h1 className="gradient__text">As possibilidades <br />Vão além da sua imaginação.</h1>
      <p> À medida que a tecnologia continua a se desenvolver, é provável que novas aplicações e usos inovadores continuem a surgir em diferentes setores.</p>
      <h4>Solicite acesso antecipado para começar</h4>
    </div>
  </div>
);

export default Possibility;