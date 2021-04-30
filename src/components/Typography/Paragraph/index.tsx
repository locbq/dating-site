import React from 'react';
import styled from 'styled-components';

interface ParagraphProps {
  children: React.ReactNode;
  className: string;
}

const StyledParagraph = styled.p`
  font-family: ${(props) => props.theme.typography.fontFamily.regular}
`;

const Paragraph = ({ children, className }: ParagraphProps) => (
  <StyledParagraph className={className}>
    {children}
  </StyledParagraph>
);

export default Paragraph;
