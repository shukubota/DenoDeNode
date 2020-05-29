interface UserProps {
  name: Name;
}

class User {
  id!: number;
  name!: Name;
  constructor(props: UserProps) {
    if (props.name.fullName.length > 3) {
      throw new Error('名前長すぎ');
    }
    this.name = new Name(props.name.fullName);
  }
  changeName(newName: string): void {
    if (newName.length > 3) {
      throw new Error('名前長すぎ');
    }
    this.name = new Name(newName);
  }
}