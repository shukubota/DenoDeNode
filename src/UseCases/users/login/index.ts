import { User } from '../../../DomainModels/Entity/user.ts';
import { Email } from '../../../DomainModels/ValueObject/user/email.ts';
import { EncryptedPassword } from '../../../DomainModels/ValueObject/user/password.ts';

interface LoginParams {
  email: string;
  password: string; 
}
export class Login {
  async execute(params: LoginParams) {
    // const email = new Email(params.email);
    // const encryptedPassword = new EncryptedPassword(params.password);

    // const user = new User({ email, encryptedPassword });
    // await user.authenticate();

    // // クライアントに認証トークンを返す
    // return {
    //   authenticationToken: user.authenticationToken,
    // };
  }
}