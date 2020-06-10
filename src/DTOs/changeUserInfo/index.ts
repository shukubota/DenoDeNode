import { User } from "../../DomainModels/Entity/user.ts";

interface Props {
  user: User;
}

export class ChangeUserInfoDTO {
  id: number;
  name: string;
  email: string; 
  constructor(props: Props) {
    const { user } = props;
    this.id = user.id as number;
    this.email = user.email as string;
    this.name = user.name as string;
  }
}