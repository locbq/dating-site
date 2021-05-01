import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useFormik } from 'formik';

import Wrapper from 'components/Wrapper';
import ErrorMessage from 'components/ErrorMessage';
import { PATH_LOGIN, PATH_SIGN_UP_PERSONAL_INFORMATION, PATH_SIGN_UP_PREFERENCE } from 'routes/routes.paths';
import PersonalInformation from './PersonalInformation';
import Preference from './Preference';
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
      <Switch>
        <Route
          exact
          path={PATH_SIGN_UP_PERSONAL_INFORMATION}
          component={PersonalInformation}
        />
        <Route
          exact
          path={PATH_SIGN_UP_PREFERENCE}
          component={Preference}
        />
      </Switch>
    </Wrapper>
  );
};

export default SignUp;
