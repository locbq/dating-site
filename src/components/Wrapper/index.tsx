import React from 'react';

import { StyledDiv } from './styles';

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => (
  <StyledDiv>{children}</StyledDiv>
);

export default Wrapper;
