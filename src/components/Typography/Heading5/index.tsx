import React from 'react';
import styled from 'styled-components';

interface Heading5Props {
  children: React.ReactNode;
  className: string;
}

const StyledHeading5 = styled.h5`
  font-family: ${(props) => props.theme.typography.fontFamily.heading}
`;

const Heading5 = ({ children, className }: Heading5Props) => (
  <StyledHeading5 className={className}>
    {children}
  </StyledHeading5>
);

export default Heading5;