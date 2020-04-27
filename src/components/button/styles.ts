import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  width: 210px;
  height: 70px;
  background: ${(props) => props.theme.colors.green10};
  border-radius: 0 5px 5px 0;
  border: 0;
  font-weight: bold;
  transition: background-color 0.2s;
  color: ${(props) => props.theme.colors.white10};

  &:hover {
    background: ${(props) => props.theme.colors.green20};
  }
`;
