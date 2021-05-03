import styled from 'styled-components';
import Pagination from 'react-bootstrap/Pagination';

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  & > ul {
    margin: 0;
    & li {
      font-family: ${(props) => props.theme.typography.fontFamily.regular};
      & a {
        background-color: transparent;
        border: none;
        color: #ffffff;
        &: hover {
          background-color: ${(props) => props.theme.colors.main};
          color: #ffffff;
        }
      };
    }
  }
`;

export const StyledPaginationItem = styled(Pagination.Item)`
  & span {
    border: none;
    background-color: ${(props) => props.theme.colors.main} !important;
  };
`;
