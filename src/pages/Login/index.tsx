import React, {
  useState,
  useEffect,
} from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormik } from 'formik';

import Wrapper from 'components/Wrapper';
import ErrorMessage from 'components/ErrorMessage';
import Alert from 'components/Alert';
import { PATH_SIGN_UP } from 'routes/routes.paths';
import login from 'helpers/login';
import useUsers from 'hooks/useUsers';
import {
  StyledParagraph,
  StyledButton,
  StyledParagraphLink,
} from './styles';
import { loginSchema } from './schema';

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const users = useUsers();
  const history = useHistory();

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => setShowAlert(false), 3000);
    }
  }, [showAlert]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      setIsLoading(true);
      const { email, password } = values;
      const response = login({ email, password }, users);
      if (response) {
        setTimeout(() => {
          history.push('/');
          setIsLoading(false);
        }, 1000);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          setShowAlert(true);
          formik.resetForm();
        }, 500);
      }
    },
    validationSchema: loginSchema,
  });

  return (
    <Wrapper header="Login">
      <Alert
        show={showAlert}
        dismissible
        variant="danger"
        onClose={() => setShowAlert(false)}
      >
        This is an alert
      </Alert>
      <Form onSubmit={formik.handleSubmit}>
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
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && <ErrorMessage message={formik.errors.email} />}
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
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && <ErrorMessage message={formik.errors.password} />}
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
