import Heading2 from 'components/Typography/Heading2';
import React from 'react';

import {
  StyledDiv,
  StyledDivHeader,
} from './styles';

interface WrapperProps {
  children: React.ReactNode;
  header?: string;
}

const Wrapper = ({ children, header }: WrapperProps) => (
  <StyledDiv>
    <StyledDivHeader>
      <Heading2>{header}</Heading2>
    </StyledDivHeader>
    {children}
  </StyledDiv>
);

Wrapper.defaultProps = {
  header: '',
};

export default Wrapper;
