import { Name } from '../ValueObject/user/name.ts';
import { Email } from '../ValueObject/user/email.ts';
import { Id } from '../ValueObject/user/id.ts';
import { EncryptedPassword } from '../ValueObject/user/password.ts';
import { UserRepository, IUserRepository } from '../../Repositories/users.ts';

interface UserProps {
  id?: Id;
  name?: Name;
  email?: Email;
  encryptedPassword?: EncryptedPassword;
  authenticationToken?: string;
}

export class User {
  id: Id | null;
  name: Name | null;
  email: Email | null;
  encryptedPassword: EncryptedPassword | null;
  authenticationToken: string | null;

  userRepository: IUserRepository;
  constructor(props: UserProps) {
    this.id = props.id || null;
    this.name = props.name || null;
    this.email = props.email || null;
    this.encryptedPassword = props.encryptedPassword || null;

    this.userRepository = new UserRepository();
    this.authenticationToken = props.authenticationToken || null;
  }
  changeName(newName: Name): void {
    this.name = newName;
  }
}