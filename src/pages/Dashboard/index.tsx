import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/30235250?s=460&u=6309c5d455aecbe07da1b068074c3ab9b97bf4ff&v=4"
            alt="Iara Oliveira"
          />
          <div>
            <strong>repository name</strong>
            <p>Just a test to see what is going on</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/30235250?s=460&u=6309c5d455aecbe07da1b068074c3ab9b97bf4ff&v=4"
            alt="Iara Oliveira"
          />
          <div>
            <strong>repository name</strong>
            <p>Just a test to see what is going on</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
