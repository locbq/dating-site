import * as yup from 'yup';

export const emailSchema = yup
  .string()
  .email('Invalid email')
  .required('Email cannot be empty');

export const passwordSchema = yup
  .string()
  .required('Email cannot be empty');
