import React from 'react';

import {
  StyledDiv,
  StyledDivHeader,
  StyledHeading2,
} from './styles';

interface WrapperProps {
  children: React.ReactNode;
  header?: string;
}

const Wrapper = ({ children, header }: WrapperProps) => (
  <StyledDiv>
    <StyledDivHeader>
      <StyledHeading2>{header}</StyledHeading2>
    </StyledDivHeader>
    {children}
  </StyledDiv>
);

Wrapper.defaultProps = {
  header: '',
};

export default Wrapper;
