import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Você quer entrar no futuro antes dos outros</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Acesso antecipado</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Kauane Vieira Development, <br /> Todos direitos reservados</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Marcadores</p>
        <p>Contato</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Empresa</h4>
        <p>Termos & Condições </p>
        <p>Politica & Privacidade</p>
        <p>Contato</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Entrar em contato</h4>
        <p>Localização São Paulo Brasil</p>
        <p>123-1234</p>
        <p>teste@teste.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 GPT-3. Todos direitos reservados.</p>
    </div>
  </div>
);

export default Footer;