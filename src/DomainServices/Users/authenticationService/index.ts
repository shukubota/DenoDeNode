import { UserRepository, IUserRepository } from '../../../Repositories/users.ts';
import { User } from '../../../DomainModels/Entity/user.ts';
import { Email } from '../../../DomainModels/ValueObject/user/email.ts';
import { EncryptedPassword } from '../../../DomainModels/ValueObject/user/password.ts';
import { AuthenticationToken } from '../../../DomainModels/ValueObject/user/authenticationToken.ts';

interface AuthenticateParams {
  email: Email;
  password: EncryptedPassword;
}

export class AuthenticationService {
  userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async authenticate(authenticateParams: AuthenticateParams): User {
    const _authenticatedUser = await this.userRepository.findByEmailAndPassword({
      email: authenticateParams.email,
      password: authenticateParams.password,
    });
    if (!_authenticatedUser) {
      throw new Error('認証に失敗しました');
    }

    const email = new Email(_authenticatedUser.email);
    const encryptedPassword = new EncryptedPassword(_authenticatedUser.encryptedPassword);
    const authenticationToken = new AuthenticationToken({
      email,
      encryptedPassword,
    });
    const authenticatedUser = new User({ email, encryptedPassword, authenticationToken })
    return authenticatedUser;
  }
}