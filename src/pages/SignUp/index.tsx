import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Wrapper from 'components/Wrapper';
import { PATH_LOGIN } from 'routes/routes.paths';
import {
  StyledParagraph,
  StyledDivRadio,
  StyledALink,
  StyledDivInput,
  StyledButton,
  StyledParagraphLink,
} from './styles';

const SignUp = () => (
  <Wrapper header="Sign Up">
    <Form>
      <Form.Group
        as={Row}
        controlId="name"
      >
        <Form.Label
          column
          md={4}
        >
          <StyledParagraph>Name</StyledParagraph>
        </Form.Label>
        <Col md={8}>
          <Form.Control type="text" />
        </Col>
      </Form.Group>
      <Form.Group
        as={Row}
        controlId="email"
      >
        <Form.Label
          column
          md={4}
        >
          <StyledParagraph>Email</StyledParagraph>
        </Form.Label>
        <Col md={8}>
          <Form.Control type="email" />
        </Col>
      </Form.Group>
      <Form.Group
        as={Row}
        controlId="gender"
      >
        <Form.Label
          column
          md={4}
        >
          <StyledParagraph>Gender</StyledParagraph>
        </Form.Label>
        <Col md={8}>
          <StyledDivRadio>
            <Form.Check
              id="male"
              name="gender"
              type="radio"
              label={<StyledParagraph>Male</StyledParagraph>}
            />
            <Form.Check
              id="female"
              name="gender"
              type="radio"
              label={<StyledParagraph>Female</StyledParagraph>}
            />
          </StyledDivRadio>
        </Col>
      </Form.Group>
      <Form.Group
        as={Row}
        controlId="age"
      >
        <Form.Label
          column
          md={4}
        >
          <StyledParagraph>Age</StyledParagraph>
        </Form.Label>
        <Col md={8}>
          <Form.Control
            type="text"
          />
        </Col>
      </Form.Group>
      <Form.Group
        as={Row}
        controlId="personalityType"
      >
        <Form.Label
          column
          md={4}
        >
          <StyledParagraph>Personality type</StyledParagraph>
        </Form.Label>
        <Col md={8}>
          <Form.Control type="text" />
          <StyledALink href="http://www.humanmetrics.com/cgi-win/jtypes2.asp">(Don't know your type?)</StyledALink>
        </Col>
      </Form.Group>
      <Form.Group
        as={Row}
        controlId="favoriteOs"
      >
        <Form.Label
          column
          md={4}
        >
          <StyledParagraph>Favorite OS</StyledParagraph>
        </Form.Label>
        <Col md={8}>
          <Form.Control
            as="select"
            custom
          >
            <option value="windows">Windows</option>
            <option value="mac">Mac OS</option>
            <option value="linux">Linux</option>
          </Form.Control>
        </Col>
      </Form.Group>
      <Form.Group
        as={Row}
        controlId="seekingAge"
      >
        <Form.Label
          column
          md={4}
        >
          <StyledParagraph>Seeking age</StyledParagraph>
        </Form.Label>
        <Col md={8}>
          <StyledDivInput>
            <Form.Control
              type="text"
              placeholder="min"
            />
            <StyledParagraph>to</StyledParagraph>
            <Form.Control
              type="text"
              placeholder="max"
            />
          </StyledDivInput>
        </Col>
      </Form.Group>
      <Form.Group
        as={Row}
        controlId="password"
      >
        <Form.Label
          column
          md={4}
        >
          <StyledParagraph>Password</StyledParagraph>
        </Form.Label>
        <Col md={8}>
          <Form.Control type="password" />
        </Col>
      </Form.Group>
      <Form.Group
        as={Row}
        controlId="confirmPassword"
      >
        <Form.Label
          column
          md={4}
        >
          <StyledParagraph>Confirm password</StyledParagraph>
        </Form.Label>
        <Col md={8}>
          <Form.Control type="password" />
        </Col>
      </Form.Group>
      <Form.Group>
        <StyledButton
          variant="primary"
          type="submit"
        >
          Sign Up
        </StyledButton>
      </Form.Group>
    </Form>
    <StyledParagraphLink>
      Already have an account?  <Link to={PATH_LOGIN}>Click here to login</Link>
    </StyledParagraphLink>
  </Wrapper>
);

export default SignUp;
