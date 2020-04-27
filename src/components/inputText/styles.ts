import styled from 'styled-components';

export const InputWrapper = styled.input`
  flex: 1;
  height: 70px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px;
  color: ${(props) => props.theme.colors.black20};

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder10};
  }
`;
