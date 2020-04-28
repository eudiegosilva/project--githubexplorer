import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from 'services/api';

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
  ErrorMessage,
} from 'pages/dashboard/styled';

import { InputText, Button } from 'components';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repository, setRepository] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GITHUB_EXPLORER:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      '@GITHUB_EXPLORER:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!repository) {
      return setInputError('insira o autor/nome do repositório');
    }
    try {
      const response = await api.get<Repository>(`repos/${repository}`);
      const obtainedRepository = response.data;

      setRepositories([...repositories, obtainedRepository]);
      setRepository('');
      setInputError('');
    } catch (error) {
      setInputError('nome do repositório inválido');
    }
  }

  return (
    <DashboardContainer>
      <Logo src={logo} alt="logo" />
      <Title>explore repositórios no github</Title>

      <FormContainer hasError={!!inputError} onSubmit={handleAddRepository}>
        <InputText
          type="text"
          placeholder="insira o nome do repositório"
          value={repository}
          onChange={(event) => setRepository(event.target.value)}
        />
        <Button>pesquisar</Button>
      </FormContainer>

      {inputError && <ErrorMessage>{inputError}</ErrorMessage>}

      <RepositoriesContainer>
        {repositories.map((repository) => (
          <Repository key={repository.full_name} href="teste">
            <RepositoryImage
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <RepositoryTextWrapper>
              <RepositoryName>{repository.full_name}</RepositoryName>
              <RepositoryDescription>
                {repository.description}
              </RepositoryDescription>
            </RepositoryTextWrapper>
            <FiChevronRight size={20} />
          </Repository>
        ))}
      </RepositoriesContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
