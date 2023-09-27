import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Muita coisa acontecendo, <br /> Nós estamos registrando tudo.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2023" text="Como o Chat GPT pode melhorar o atendimento ao cliente?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2023" text="Como o Chat GPT está revolucionando a forma como nos comunicamos?" />
        <Article imgUrl={blog03} date="Sep 26, 2023" text="Quais são as principais aplicações do Chat GPT na educação?" />
        <Article imgUrl={blog04} date="Sep 26, 2023" text="Quais são os desafios éticos relacionados ao uso do Chat GPT?" />
        <Article imgUrl={blog05} date="Sep 26, 2023" text="Como o Chat GPT está mudando a maneira como pesquisamos informações online?" />
      </div>
    </div>
  </div>
);

export default Blog;