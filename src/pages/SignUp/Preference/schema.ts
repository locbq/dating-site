import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  personalityType: yup
    .string()
    .required('Personality type cannot be empty'),
  minSeekingAge: yup
    .number()
    .nullable()
    .positive('Invalide age')
    .integer('Invalide age')
    .min(18, 'Min age must be at least 18')
    .required('Min age cannot be empty'),
  maxSeekingAge: yup
    .number()
    .nullable()
    .positive('Invalide age')
    .integer('Invalide age')
    .max(99, 'Max age must be at least 18')
    .required('Max age cannot be empty'),
});
