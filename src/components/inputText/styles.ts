import styled from 'styled-components';

export const InputWrapper = styled.input`
  color: ${(props) => props.theme.colors.black20};
  border: 0;
  border-radius: 5px 0 0 5px;
  flex: 1;
  height: 70px;
  padding: 0 24px;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder10};
  }
`;
