import styled from 'styled-components';
import Form from 'react-bootstrap/Form';

import Paragraph from 'components/Typography/Paragraph';
import Button from 'components/Button';

export const StyledForm = styled(Form)`
  margin-top: 1.5rem;
`;

export const StyledParagraph = styled(Paragraph)`
  color: #ffffff;
`;

export const StyledParagraphLink = styled(StyledParagraph)`
  text-align: center;
  font-size: 14px;
  & > a {
    color: ${(props) => props.theme.colors.main};
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  text-transform: uppercase;
`;
