import styled from 'styled-components';
import Row from 'react-bootstrap/Row';

import Paragraph from 'components/Typography/Paragraph';
import Button from 'components/Button';

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

export const StyledRow = styled(Row)`
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  & > div {
    &: first-child {
      padding-right: 0.5rem;
    };
    &: last-child {
      padding-left: 0.5rem;
    }
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
