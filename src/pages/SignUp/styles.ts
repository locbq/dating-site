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

export const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  & > div {
    margin-right: 1rem;
  }
`;

export const StyledDivRadio = styled(StyledDiv)`
  & > div {
    margin-right: 1rem;
  }
`;

export const StyledALink = styled.a`
  color: ${(props) => props.theme.colors.main};
  font-size: 12px;
`;

export const StyledDivInput = styled(StyledDiv)`
  & p {
    margin: 0 1rem 0 1rem;
  }
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
