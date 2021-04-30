import styled from 'styled-components';

import Heading1 from 'components/Typography/Heading1';
import Heading4 from 'components/Typography/Heading4';
import Paragraph from 'components/Typography/Paragraph';
import Button from 'components/Button';

export const StyledHeading4 = styled(Heading4)`
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  margin: 1.5rem 0;
`;

export const StyledHeading1 = styled(Heading1)`
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  margin: 1.5rem 0;
`;

export const StyledDivButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  text-transform: uppercase;
  width: 80%;
  margin-bottom: 1rem;
`;

export const StyledParagraph = styled(Paragraph)`
  text-align: center;
  color: #ffffff;
  font-size: 14px;
  margin-top: 1rem;
`;
