import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required('Email cannot be empty'),
  password: yup
    .string()
    .required('Password cannot be empty'),
});
