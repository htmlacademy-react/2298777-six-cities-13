import PasswordValidator from 'password-validator';

const passwordSchema = new PasswordValidator();

passwordSchema
  .is().min(2)
  .is().max(100)
  .has().digits(1)
  .has().letters(1);

export default passwordSchema;
