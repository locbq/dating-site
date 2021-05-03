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
import checkEmail from 'helpers/checkEmail';
import { PATH_LOGIN, PATH_SIGN_UP_PREFERENCE } from 'routes/routes.paths';
import useUsers from 'hooks/useUsers';
import {
  StyledParagraph,
  StyledDivRadio,
  StyledButton,
  StyledParagraphLink,
} from '../styles';
import { signUpSchema } from './schema';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const history = useHistory();
  const users = useUsers();

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => setShowAlert(false), 3000);
    }
  }, [showAlert]);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      gender: 'M',
      age: Number(),
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      setIsLoading(true);
      const isEmailExisted = checkEmail(values.email, users);
      if (isEmailExisted) {
        setTimeout(() => {
          setIsLoading(false);
          setShowAlert(true);
          setErrorMessage('Email is already exists');
        }, 1000);
      } else {
        setTimeout(() => {
          setIsLoading(false);
          history.push(
            PATH_SIGN_UP_PREFERENCE,
            { ...values },
          );
        }, 1000);
      }
    },
    validationSchema: signUpSchema,
  });

  return (
    <Wrapper header="Sign Up">
      <Alert
        show={showAlert}
        dismissible
        variant="danger"
        onClose={() => setShowAlert(false)}
      >
        {errorMessage}
      </Alert>
      <Form onSubmit={formik.handleSubmit}>
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
            <Form.Control
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            {formik.errors.name && formik.touched.name && <ErrorMessage message={formik.errors.name} />}
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
          controlId="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
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
                defaultChecked
                name="gender"
                type="radio"
                value="M"
                label={<StyledParagraph>Male</StyledParagraph>}
              />
              <Form.Check
                id="female"
                name="gender"
                type="radio"
                value="F"
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
              name="age"
              value={formik.values.age === 0 ? '' : formik.values.age}
              onChange={formik.handleChange}
            />
            {formik.errors.age && formik.touched.age && <ErrorMessage message={formik.errors.age} />}
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
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
            {formik.errors.confirmPassword && formik.touched.confirmPassword
            && <ErrorMessage message={formik.errors.confirmPassword} />}
          </Col>
        </Form.Group>
        <Form.Group>
          <StyledButton
            loading={isLoading}
            variant="primary"
            type="submit"
          >
            Next
          </StyledButton>
        </Form.Group>
      </Form>
      <StyledParagraphLink>
        Already have an account?  <Link to={PATH_LOGIN}>Click here to login</Link>
      </StyledParagraphLink>
    </Wrapper>
  );
};

export default SignUp;
