import React, { useState, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { isEmpty } from 'lodash';

import Wrapper from 'components/Wrapper';
import ErrorMessage from 'components/ErrorMessage';
import { PATH_SIGN_UP } from 'routes/routes.paths';
import login from 'helpers/login';
import useUsers from 'hooks/useUsers';
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginInfo, setLoginInfo] = useState<LoginInfoModel>({
    email: '',
    password: '',
  });
  const [errorMessages, setErrorMessages] = useState({
    email: '',
    password: '',
  });
  const users = useUsers();
  const history = useHistory();

  const isSubmittable = useMemo(
    () => isEmpty(errorMessages.email)
    && isEmpty(errorMessages.password)
    && !isEmpty(loginInfo.email)
    && !isEmpty(loginInfo.password),
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
    if (isSubmittable) {
      setIsLoading(true);
      const response = login(loginInfo, users);
      if (response) {
        setTimeout(() => {
          history.push('/');
          setIsLoading(false);
        }, 1000);
      } else {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
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
            <ErrorMessage message={errorMessages.email} />
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
            <ErrorMessage message={errorMessages.password} />
          </Col>
        </Form.Group>
        <Form.Group>
          <StyledButton
            loading={isLoading}
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
