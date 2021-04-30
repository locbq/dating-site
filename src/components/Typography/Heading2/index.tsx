import React from 'react';
import styled from 'styled-components';

interface Heading2Props {
  children: React.ReactNode;
  className: string;
}

const StyledHeading2 = styled.h2`
  font-family: ${(props) => props.theme.typography.fontFamily.heading}
`;

const Heading2 = ({ children, className }: Heading2Props) => (
  <StyledHeading2 className={className}>
    {children}
  </StyledHeading2>
);

export default Heading2;