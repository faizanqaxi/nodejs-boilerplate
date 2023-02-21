import { body } from 'express-validator';

const emailValidation = [
  body('email', 'email must be valid').isString().isEmail(),
];

export default emailValidation;
