import React from 'react';
import styled from 'styled-components';

import Paragraph from 'components/Typography/Paragraph';

interface ErrorMessageProps {
  message: string;
}

const StyledParagraph = styled(Paragraph)`
  color: ${(props) => props.theme.colors.danger};
  font-size: 14px;
`;

const ErrorMessage = ({ message }:ErrorMessageProps) => (
  <StyledParagraph>{message}</StyledParagraph>
);

export default ErrorMessage;
