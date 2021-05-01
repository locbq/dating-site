import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Wrapper from 'components/Wrapper';
import { PATH_SIGN_UP } from 'routes/routes.paths';
import { isEmpty } from 'lodash';
import {
  StyledParagraph,
  StyledButton,
  StyledParagraphLink,
} from './styles';
import {
  emailSchema,
  passwordSchema,
} from './schema';

interface LoginInfoModel {
  email: string;
  password: string;
}

const Login = () => {
  const [loginInfo, setLoginInfo] = useState<LoginInfoModel>({
    email: '',
    password: '',
  });
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
  });

  const isSubmittable = useMemo(
    () => !isEmpty(errorMessages.email)
    || !isEmpty(errorMessages.password)
    || isEmpty(loginInfo.email)
    || isEmpty(loginInfo.password),
    [
      errorMessages.email,
      errorMessages.password,
      loginInfo.email,
      loginInfo.password,
    ],
  );

  const handleChangeEmail = (event) => {
    event.preventDefault();
    const { value } = event.target;
    emailSchema.validate(value)
      .then(() => setErrorMessages({ ...errorMessages, email: '' }))
      .catch((error) => setErrorMessages({ ...errorMessages, email: error.errors[0] }));
    setLoginInfo({ ...loginInfo, email: value });
  };
  const handleChangePassword = (event) => {
    event.preventDefault();
    const { value } = event.target;
    passwordSchema.validate(value)
      .then(() => setErrorMessages({ ...errorMessages, password: '' }))
      .catch((error) => setErrorMessages({ ...errorMessages, password: error.errors[0] }));
    setLoginInfo({ ...loginInfo, password: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isSubmittable) {
      console.log(123);
    }
  };

  return (
    <Wrapper header="Login">
      <Form onSubmit={handleSubmit}>
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
            <Form.Control
              type="email"
              onChange={handleChangeEmail}
            />
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
            <Form.Control
              type="password"
              onChange={handleChangePassword}
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <StyledButton
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
};

export default Login;
