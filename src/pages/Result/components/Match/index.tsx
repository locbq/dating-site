import React from 'react';
import Col from 'react-bootstrap/Col';

import maleAvatar from 'assets/images/male.jpg';
import Heading5 from 'components/Typography/Heading5';
import {
  StyledRow,
  StyledCol,
  StyledImage,
  StyledDivName,
  StyledTable,
} from './styles';

const Match = () => (
  <StyledRow>
    <StyledCol md={4}>
      <StyledImage
        src={maleAvatar}
        alt="avatar"
      />
    </StyledCol>
    <Col md={8}>
      <StyledDivName>
        <Heading5>Bruce Wayne</Heading5>
      </StyledDivName>

      <StyledTable
        bordered
        size="sm"
      >
        <tbody>
          <tr>
            <th>Gender</th>
            <td>M</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>40</td>
          </tr>
          <tr>
            <th>Type</th>
            <td>INTJ</td>
          </tr>
          <tr>
            <th>OS</th>
            <td>Linux</td>
          </tr>
        </tbody>
      </StyledTable>
    </Col>
  </StyledRow>
);

export default Match;
