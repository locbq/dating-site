import styled from 'styled-components';

import Heading2 from 'components/Typography/Heading2';

export const StyledDiv = styled.div`
  background-color: rgba(35, 29, 31, 0.9);
  border-radius: 15px;
  width: 500px;
  padding: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledDivHeader = styled.div`
  border-bottom: 1px solid #ffffff;
  text-align: center;
`;

export const StyledHeading2 = styled(Heading2)`
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;
