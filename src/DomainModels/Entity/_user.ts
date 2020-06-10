import { Name } from '../ValueObject/user/Name.ts';
import { Email } from '../ValueObject/user/email.ts';
import { AuthenticationToken} from '../ValueObject/user/authenticationToken.ts';
import { EncryptedPassword } from '../ValueObject/user/password.ts';
import { UserRepository, IUserRepository } from '../../Repositories/users.ts';

interface UserProps {
  id?: number;
  name?: Name;
  email?: Email;
  encryptedPassword?: EncryptedPassword;
  authenticationToken?: string;
}

interface GenerateTokenParams {
  email: Email;
  password: EncryptedPassword;
}

export class User {
  id: number | null;
  name: Name | null;
  email: Email | null;
  encryptedPassword: EncryptedPassword | null;
  authenticationToken: string | null;

  userRepository: IUserRepository;
  constructor(props: UserProps) {
    this.id = props.id || null;
    if (props.name && props.name.fullName.length > 3) {
      throw new Error('名前長すぎ');
    }
    this.name = props.name || null;
    this.email = props.email || null;
    this.encryptedPassword = props.encryptedPassword || null;

    this.userRepository = new UserRepository();
    this.authenticationToken = props.authenticationToken || null;
  }
  changeName(newName: string): void {
    if (newName.length > 3) {
      throw new Error('名前長すぎ');
    }
    this.name = new Name(newName);
  }

  async authenticate() {
    const authenticatedUser = await this.userRepository.findByEmailAndPassword({
      email: this.email,
      password: this.encryptedPassword,
    });
    
    if (!authenticatedUser) {
      throw new Error('認証に失敗しました');
    }

    const authenticationToken = new AuthenticationToken({
      email: this.email,
      encryptedPassword: this.encryptedPassword,
    });

    this.authenticationToken = authenticationToken;
    return Promise.resolve();
  }
}