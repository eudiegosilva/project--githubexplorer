import React from 'react';
import { logo } from 'assets';
import {
  DashboardContainer,
  Title,
  FormContainer,
} from 'pages/dashboard/styled';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <img src={logo} alt="logo" />
      <Title>explore repositórios no github</Title>

      <FormContainer>
        <input type="text" placeholder="insira o nome do repositório" />
        <button type="submit">pesquisar</button>
      </FormContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
