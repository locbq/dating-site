import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Heading1 from 'components/Typography/Heading1';
import Heading4 from 'components/Typography/Heading4';
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

export const StyledLink = styled(Link)`
  width: 100%;
  text-align: center;
`;

export const StyledButton = styled(Button)`
  text-transform: uppercase;
  width: 80%;
  margin-bottom: 1rem;
`;
