import styled from 'styled-components';

import Heading2 from 'components/Typography/Heading2';
import Paragraph from 'components/Typography/Paragraph';

export const StyledDiv = styled.div`
  background-color: rgba(35, 29, 31, 0.9);
  border-radius: 15px;
  width: 520px;
  padding: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledDivHeader = styled.div`
  border-bottom: 1px solid #ffffff;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const StyledHeading2 = styled(Heading2)`
  color: #ffffff;
  margin-bottom: 1.3rem;
  text-transform: uppercase;
`;

export const StyledParagraph = styled(Paragraph)`
  text-align: center;
  color: #ffffff;
  font-size: 14px;
  margin-top: 1rem;
`;

export const StyledParagraphLink = styled(StyledParagraph)`
  & > a {
    color: ${(props) => props.theme.colors.main};
    font-size: 14px;
    &:hover {
      color: ${(props) => props.theme.colors.main};
    };
    & > svg {
      margin-right: 5px;
    }
  }
`;
