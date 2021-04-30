import React from 'react';
import styled from 'styled-components';

interface Heading5Props {
  children: React.ReactNode;
  className?: string;
}

const StyledHeading5 = styled.h5`
  font-family: ${(props) => props.theme.typography.fontFamily.heading};
  margin: 0;
`;

const Heading5 = ({ children, className }: Heading5Props) => (
  <StyledHeading5 className={className}>
    {children}
  </StyledHeading5>
);

Heading5.defaultProps = {
  className: '',
};

export default Heading5;
