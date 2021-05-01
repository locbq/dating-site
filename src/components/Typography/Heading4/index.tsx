import React from 'react';
import styled from 'styled-components';

interface Heading4Props {
  children: React.ReactNode;
  className?: string;
}

const StyledHeading4 = styled.h4`
  font-family: ${(props) => props.theme.typography.fontFamily.heading};
  margin: 0;
`;

const Heading4 = ({ children, className }: Heading4Props) => (
  <StyledHeading4 className={className}>
    {children}
  </StyledHeading4>
);

Heading4.defaultProps = {
  className: '',
};

export default Heading4;
