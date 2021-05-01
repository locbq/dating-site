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
    .min(18, 'Age must be at least 18')
    .max(99, 'Age must be below 99')
    .positive('Invalide age')
    .integer('Invalide age')
    .required('Age cannot be empty'),
  personalityType: yup
    .string()
    .required('Personality type cannot be empty'),
  minSeekingAge: yup
    .number()
    .min(18, 'Min age must be at least 18')
    .positive('Invalide age')
    .integer('Invalide age')
    .required('Min age cannot be empty'),
  maxSeekingAge: yup
    .number()
    .max(99, 'Max age must be at least 18')
    .positive('Invalide age')
    .integer('Invalide age')
    .required('Max age cannot be empty'),
  password: yup
    .string()
    .required('Password cannot be empty'),
  confirmPassword: yup
    .string()
    .required('Password cannot be empty'),
});
