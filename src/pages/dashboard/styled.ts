import styled from 'styled-components';
export const DashboardContainer = styled.h1``;

interface FormContainerProp {
  hasError: boolean;
}

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.black20};
  font-size: 48px;
  line-height: 56px;
  margin-top: 80px;
  max-width: 450px;
`;

export const Logo = styled.img``;

export const FormContainer = styled.form<FormContainerProp>`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    border: 2px solid
      ${(props) =>
        props.hasError
          ? props.theme.colors.error10
          : props.theme.colors.white10};
    border-right: 0;
  }
`;

export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.colors.error10};
  display: block;
  margin-top: 8px;
  ${(props) => props.theme.fontStyles.default};
`;

export const RepositoriesContainer = styled.div`
  margin-top: 80px;
  max-width: 700px;
`;

export const Repository = styled.a`
  align-items: center;
  background: ${(props) => props.theme.colors.white10};
  border-radius: 5px;
  display: flex;
  padding: 24px;
  text-decoration: none;
  width: 100%;

  & + a {
    margin-top: 16px;
  }

  &:hover {
    transform: translateX(20px);
    transition: transform 0.2s;
  }

  svg {
    color: ${(props) => props.theme.colors.white20};
    margin-left: auto;
  }
`;

export const RepositoryTextWrapper = styled.div`
  margin: 0 16px;
  flex: 1;
`;

export const RepositoryImage = styled.img`
  border-radius: 50%;
  height: 64px;
  width: 64px;
`;

export const RepositoryName = styled.strong`
  color: ${(props) => props.theme.colors.black30};
  font-size: 20px;
`;

export const RepositoryDescription = styled.p`
  color: ${(props) => props.theme.colors.black40};
  font-size: 16px;
  margin-top: 4px;
`;
