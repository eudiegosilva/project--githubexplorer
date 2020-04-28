import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background: ${(props) => props.theme.colors.green10};
  border: 0;
  border-radius: 0 5px 5px 0;
  color: ${(props) => props.theme.colors.white10};
  font-weight: bold;
  height: 70px;
  transition: background-color 0.2s;
  width: 210px;

  &:hover {
    background: ${(props) => props.theme.colors.green20};
  }
`;
