import { EncryptedPassword } from './password.ts';
import { Email } from './email.ts';

interface Props {
  email: Email;
  encryptedPassword: EncryptedPassword;
}

export class AuthenticationToken extends String {
  constructor(props: Props) {
    super(`${props.email}${props.encryptedPassword}`);
  }
}