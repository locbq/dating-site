import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name cannot be empty'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Email cannot be empty'),
  age: yup
    .number()
    .nullable()
    .positive('Invalide age')
    .integer('Invalide age')
    .min(18, 'Age must be at least 18')
    .max(99, 'Age must be below 99')
    .required('Age cannot be empty'),
  password: yup
    .string()
    .required('Password cannot be empty'),
  confirmPassword: yup
    .string()
    .required('Password cannot be empty')
    .oneOf([yup.ref('password'), null], 'Passwords do not match'),
});
