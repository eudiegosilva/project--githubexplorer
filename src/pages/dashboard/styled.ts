import styled from 'styled-components';
export const DashboardContainer = styled.h1``;

export const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.colors.black20};
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Logo = styled.img``;

export const FormContainer = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
`;

export const RepositoriesContainer = styled.div`
  margin-top: 80px;
  max-width: 700px;
`;

export const Repository = styled.a`
  background: ${(props) => props.theme.colors.white10};
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;

  display: flex;
  align-items: center;

  & + a {
    margin-top: 16px;
  }

  &:hover {
    transform: translateX(20px);
    transition: transform 0.2s;
  }

  svg {
    margin-left: auto;
    color: ${(props) => props.theme.colors.white20};
  }
`;

export const RepositoryImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const RepositoryTextWrapper = styled.div`
  margin-left: 16px;
`;

export const RepositoryName = styled.strong`
  font-size: 20px;
  color: ${(props) => props.theme.colors.black30};
`;

export const RepositoryDescription = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.black40};
  margin-top: 4px;
`;
