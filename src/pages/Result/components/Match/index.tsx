import React from 'react';
import Col from 'react-bootstrap/Col';

import maleAvatar from 'assets/images/male.jpg';
import femaleAvatar from 'assets/images/female.jpg';
import Heading5 from 'components/Typography/Heading5';
import { UserModel } from 'types/user/user.model';
import {
  StyledRow,
  StyledCol,
  StyledImage,
  StyledDivName,
  StyledTable,
} from './styles';

interface MatchProps {
  user: UserModel;
}

const Match = ({ user }: MatchProps) => {
  const getFavoriteOS = (type: string) => {
    switch (type) {
      case 'windows':
        return 'Windows';
      case 'mac':
        return 'Mac OS';
      case 'linux':
        return 'Linux';
      default:
        return type;
    }
  };

  return (
    <StyledRow>
      <StyledCol md={4}>
        <StyledImage
          src={user.gender === 'M' ? maleAvatar : femaleAvatar}
          alt="avatar"
        />
      </StyledCol>
      <Col md={8}>
        <StyledDivName>
          <Heading5>{user.name}</Heading5>
        </StyledDivName>

        <StyledTable
          bordered
          size="sm"
        >
          <tbody>
            <tr>
              <th>Gender</th>
              <td>{user.gender}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{user.age}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{user.personalityType}</td>
            </tr>
            <tr>
              <th>OS</th>
              <td>{getFavoriteOS(user.favoriteOs)}</td>
            </tr>
          </tbody>
        </StyledTable>
      </Col>
    </StyledRow>
  );
};

export default Match;
