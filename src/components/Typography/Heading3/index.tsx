import React from 'react';
import styled from 'styled-components';

interface Heading3Props {
  children: React.ReactNode;
  className?: string;
}

const StyledHeading3 = styled.h3`
  font-family: ${(props) => props.theme.typography.fontFamily.heading}
`;

const Heading3 = ({ children, className }: Heading3Props) => (
  <StyledHeading3 className={className}>
    {children}
  </StyledHeading3>
);

Heading3.defaultProps = {
  className: '',
};

export default Heading3;
