import React, {
  useState,
  useEffect,
} from 'react';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormik } from 'formik';
import { v4 as uuidv4 } from 'uuid';

import Wrapper from 'components/Wrapper';
import ErrorMessage from 'components/ErrorMessage';
import {
  PATH_LOGIN,
  PATH_SIGN_UP_PERSONAL_INFORMATION,
} from 'routes/routes.paths';
import { isEmpty } from 'lodash';
import { addUsers } from 'store/user/user.action';
import {
  StyledParagraph,
  StyledALink,
  StyledButton,
  StyledParagraphLink,
  StyledRow,
} from '../styles';
import { signUpSchema } from './schema';
import { LIST_OF_PERSONALITY_TYPE } from './constants';

const SignUp = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      personalityType: 'ESTP',
      favoriteOs: 'windows',
      minSeekingAge: Number(''),
      maxSeekingAge: Number(''),
    },
    onSubmit: (values) => {
      setIsLoading(true);
      const userData = {
        ...values,
        id: uuidv4(),
        name: props.location?.state?.name,
        email: props.location?.state?.email,
        age: Number(props.location?.state?.age),
        gender: props.location?.state?.gender,
        password: props.location?.state?.password,
        minSeekingAge: Number(values.minSeekingAge),
        maxSeekingAge: Number(values.maxSeekingAge),
      };
      setTimeout(() => {
        setIsLoading(false);
        dispatch(addUsers([userData]));
        history.push('/login');
      }, 1000);
    },
    validationSchema: signUpSchema,
  });

  useEffect(() => {
    if (isEmpty(props.location?.state?.email) || isEmpty(props.location?.state?.password)) {
      history.push(PATH_SIGN_UP_PERSONAL_INFORMATION);
    }
  }, [history, props.location?.state?.email, props.location?.state?.password]);

  return (
    <Wrapper header="Sign Up">
      <Form onSubmit={formik.handleSubmit}>
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
              custom
              as="select"
              name="personalityType"
              value={formik.values.personalityType}
              onChange={formik.handleChange}
            >
              {LIST_OF_PERSONALITY_TYPE.map((type) => (
                <option
                  key={type}
                  value={type}
                >
                  {type}
                </option>
              ))}
            </Form.Control>
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
            <StyledRow noGutters>
              <Col md={6}>
                <Form.Control
                  type="text"
                  placeholder="min"
                  name="minSeekingAge"
                  value={formik.values.minSeekingAge === 0 ? '' : formik.values.minSeekingAge}
                  onChange={formik.handleChange}
                />
                {formik.errors.minSeekingAge && formik.touched.minSeekingAge
              && <ErrorMessage message={formik.errors.minSeekingAge} />}
              </Col>
              <Col md={6}>
                <Form.Control
                  type="text"
                  placeholder="max"
                  name="maxSeekingAge"
                  value={formik.values.maxSeekingAge === 0 ? '' : formik.values.maxSeekingAge}
                  onChange={formik.handleChange}
                />
                {formik.errors.maxSeekingAge && formik.touched.maxSeekingAge
                  && <ErrorMessage message={formik.errors.maxSeekingAge} />}
              </Col>
            </StyledRow>
            <StyledRow noGutters />

          </Col>
        </Form.Group>
        <Form.Group>
          <StyledButton
            loading={isLoading}
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
