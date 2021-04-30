import React from 'react';
import styled from 'styled-components';

interface Heading1Props {
  children: React.ReactNode;
  className?: string;
}

const StyledHeading1 = styled.h1`
  font-family: ${(props) => props.theme.typography.fontFamily.heading}
`;

const Heading1 = ({ children, className }: Heading1Props) => (
  <StyledHeading1 className={className}>
    {children}
  </StyledHeading1>
);

Heading1.defaultProps = {
  className: '',
};

export default Heading1;
