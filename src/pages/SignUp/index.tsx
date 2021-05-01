import React from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormik } from 'formik';

import Wrapper from 'components/Wrapper';
import ErrorMessage from 'components/ErrorMessage';
import { PATH_LOGIN } from 'routes/routes.paths';
import {
  StyledParagraph,
  StyledDivRadio,
  StyledALink,
  StyledDivInput,
  StyledButton,
  StyledParagraphLink,
} from './styles';
import { signUpSchema } from './schema';

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      gender: 'M',
      age: '',
      personalityType: '',
      favoriteOs: 'windows',
      minSeekingAge: '',
      maxSeekingAge: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => console.log(values),
    validationSchema: signUpSchema,
  });

  return (
    <Wrapper header="Sign Up">
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
              value={formik.values.age}
              onChange={formik.handleChange}
            />
            {formik.errors.age && formik.touched.age && <ErrorMessage message={formik.errors.age} />}
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
            <Form.Control
              type="text"
              name="personalityType"
              value={formik.values.personalityType}
              onChange={formik.handleChange}
            />
            <StyledALink href="http://www.humanmetrics.com/cgi-win/jtypes2.asp">(Don't know your type?)</StyledALink>
            {formik.errors.personalityType && formik.touched.personalityType
            && <ErrorMessage message={formik.errors.personalityType} />}
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
              name="favoriteOs"
              value={formik.values.favoriteOs}
              onChange={formik.handleChange}
            >
              <option value="windows">Windows</option>
              <option value="mac">Mac OS</option>
              <option value="linux">Linux</option>
            </Form.Control>
            {formik.errors.favoriteOs && formik.touched.favoriteOs
            && <ErrorMessage message={formik.errors.favoriteOs} />}
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
                name="minSeekingAge"
                value={formik.values.minSeekingAge}
                onChange={formik.handleChange}
              />
              <StyledParagraph>to</StyledParagraph>
              <Form.Control
                type="text"
                placeholder="max"
                name="maxSeekingAge"
                value={formik.values.maxSeekingAge}
                onChange={formik.handleChange}
              />
            </StyledDivInput>
            {formik.errors.minSeekingAge && formik.touched.minSeekingAge
              && <ErrorMessage message={formik.errors.minSeekingAge} />}
            {formik.errors.maxSeekingAge && formik.touched.maxSeekingAge
              && <ErrorMessage message={formik.errors.maxSeekingAge} />}
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
};

export default SignUp;
