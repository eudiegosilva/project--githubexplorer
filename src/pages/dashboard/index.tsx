import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { logo } from 'assets';
import {
  DashboardContainer,
  Title,
  FormContainer,
  Logo,
  RepositoriesContainer,
  Repository,
  RepositoryImage,
  RepositoryTextWrapper,
  RepositoryName,
  RepositoryDescription,
} from 'pages/dashboard/styled';

import { InputText, Button } from 'components';

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Logo src={logo} alt="logo" />
      <Title>explore repositórios no github</Title>

      <FormContainer>
        <InputText type="text" placeholder="insira o nome do repositório" />
        <Button>pesquisar</Button>
      </FormContainer>

      <RepositoriesContainer>
        <Repository href="teste">
          <RepositoryImage
            src="https://avatars2.githubusercontent.com/u/38539443?s=460&u=6ad378239b843ad7a6bd3b55de230a840db22568&v=4"
            alt="coderamos"
          />
          <RepositoryTextWrapper>
            <RepositoryName>coderamos/alguma-coisa</RepositoryName>
            <RepositoryDescription>
              Lorem ipsum dolor sit.
            </RepositoryDescription>
          </RepositoryTextWrapper>
          <FiChevronRight size={20} />
        </Repository>

        <Repository href="teste">
          <RepositoryImage
            src="https://avatars2.githubusercontent.com/u/38539443?s=460&u=6ad378239b843ad7a6bd3b55de230a840db22568&v=4"
            alt="coderamos"
          />
          <RepositoryTextWrapper>
            <RepositoryName>coderamos/alguma-coisa</RepositoryName>
            <RepositoryDescription>
              Lorem ipsum dolor sit.
            </RepositoryDescription>
          </RepositoryTextWrapper>
          <FiChevronRight size={20} />
        </Repository>

        <Repository href="teste">
          <RepositoryImage
            src="https://avatars2.githubusercontent.com/u/38539443?s=460&u=6ad378239b843ad7a6bd3b55de230a840db22568&v=4"
            alt="coderamos"
          />
          <RepositoryTextWrapper>
            <RepositoryName>coderamos/alguma-coisa</RepositoryName>
            <RepositoryDescription>
              Lorem ipsum dolor sit.
            </RepositoryDescription>
          </RepositoryTextWrapper>
          <FiChevronRight size={20} />
        </Repository>
      </RepositoriesContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
