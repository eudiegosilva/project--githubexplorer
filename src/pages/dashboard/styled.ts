import styled from 'styled-components';

export const DashboardContainer = styled.h1``;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.black20};
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const FormContainer = styled.form`
  margin-top: 40px;
  max-width: 700;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
  }
  button {
    width: 210px;
    height: 70px;
    background: ${(props) => props.theme.colors.green10};
    border-radius: 0 5px 5px 0;
    border: 0;
    font-weight: bold;

    &:hover {
      background: ${(props) => props.theme.colors.green20};
    }
  }
`;
