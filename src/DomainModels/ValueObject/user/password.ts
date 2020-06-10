export class EncryptedPassword extends String {
  constructor(props: string) {
    super(`encrypted${props}`);
  }
}