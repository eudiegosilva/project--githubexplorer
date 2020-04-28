import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from 'services/api';

import {
  RepositoryContainer,
  HeaderWrapper,
  HeaderImage,
  RepositoryWrapper,
  ContentHeader,
  ContentHeaderImage,
  ContentInfo,
  InfoRepository,
  InfoDescription,
  ContentList,
  ListItem,
  ItemValue,
  ItemText,
  IssuesWrapper,
  IssueLink,
  IssueTextWrapper,
  IssueName,
  IssueDescription,
} from 'pages/repository/styles';
import { logo } from 'assets';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`/repos/${params.repository}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [params.repository]);

  return (
    <RepositoryContainer>
      <HeaderWrapper>
        <HeaderImage src={logo}></HeaderImage>
        <Link to="/">
          <FiChevronLeft size={16} />
          voltar
        </Link>
      </HeaderWrapper>

      {repository && (
        <RepositoryWrapper>
          <ContentHeader>
            <ContentHeaderImage
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <ContentInfo>
              <InfoRepository>{repository.full_name}</InfoRepository>
              <InfoDescription>{repository.description}</InfoDescription>
            </ContentInfo>
          </ContentHeader>

          <ContentList>
            <ListItem>
              <ItemValue>{repository.stargazers_count}</ItemValue>
              <ItemText>stars</ItemText>
            </ListItem>

            <ListItem>
              <ItemValue>{repository.forks_count}</ItemValue>
              <ItemText>forks</ItemText>
            </ListItem>

            <ListItem>
              <ItemValue>{repository.open_issues_count}</ItemValue>
              <ItemText>issues abertas</ItemText>
            </ListItem>
          </ContentList>
        </RepositoryWrapper>
      )}

      <IssuesWrapper>
        {issues.map((issue) => (
          <IssueLink href={issue.html_url}>
            <IssueTextWrapper key={issue.id}>
              <IssueName>{issue.title}</IssueName>
              <IssueDescription>{issue.user.login}</IssueDescription>
            </IssueTextWrapper>
            <FiChevronRight size={20} />
          </IssueLink>
        ))}
      </IssuesWrapper>
    </RepositoryContainer>
  );
};

export default Repository;
