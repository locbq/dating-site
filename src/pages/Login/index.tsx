import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Wrapper from 'components/Wrapper';
import { PATH_SIGN_UP } from 'routes/routes.paths';
import {
  StyledParagraph,
  StyledButton,
  StyledParagraphLink,
} from './styles';

const Login = () => (
  <Wrapper header="Login">
    <Form>
      <Form.Group
        as={Row}
        controlId="exampleForm.ControlInput1"
      >
        <Form.Label
          column
          md={4}
        >
          <StyledParagraph>Email</StyledParagraph>
        </Form.Label>
        <Col md={8}>
          <Form.Control
            type="email"
            placeholder="name@example.com"
          />
        </Col>
      </Form.Group>
      <Form.Group
        as={Row}
        controlId="exampleForm.ControlInput1"
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
      <Form.Group>
        <StyledButton
          variant="primary"
          type="submit"
        >
          Login
        </StyledButton>
      </Form.Group>
    </Form>
    <StyledParagraphLink>
      Don't have an account?  <Link to={PATH_SIGN_UP}>Click here to sign up</Link>
    </StyledParagraphLink>
  </Wrapper>
);

export default Login;
