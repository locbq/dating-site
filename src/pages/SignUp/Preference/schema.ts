import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name cannot be empty'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Email cannot be empty'),
  password: yup
    .string()
    .required('Password cannot be empty'),
  confirmPassword: yup
    .string()
    .required('Password cannot be empty'),
});
