import React from 'react';

import { ButtonWrapper } from './styles';

const Button = ({ children }) => (
  <ButtonWrapper type="submit">{children}</ButtonWrapper>
);

export default Button;
