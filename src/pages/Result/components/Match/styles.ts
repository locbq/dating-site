import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const StyledRow = styled(Row)`
  margin-bottom: 1.5rem;
`;

export const StyledCol = styled(Col)`
  display: flex
`;

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const StyledDivName = styled.div`
  background-color: ${(props) => props.theme.colors.main};
  color: #ffffff;
  padding: 0.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const StyledTable = styled(Table)`
  color: #ffffff;
  font-family: ${(props) => props.theme.typography.fontFamily.regular};
  & tbody td {
    text-align: center;
  }
`;
