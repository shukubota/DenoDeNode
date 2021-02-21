// import { User } from '../../../DomainModels/Entity/user.ts';
// import { Name } from '../../../DomainModels/ValueObject/user/name.ts';
// import { Email } from '../../../DomainModels/ValueObject/user/email.ts';
// import { IUserRepository, UserRepository } from '../../../Repositories/users.ts';
// import { ChangeUserInfoDTO } from '../../../DTOs/changeUserInfo/index.ts';
//
// interface Params {
//   id: number;
//   email: string;
//   name: string;
// }
//
// export class ChangeRegisterInfo {
//   userRepository: IUserRepository;
//   constructor() {
//     this.userRepository = new UserRepository();
//   }
//   async execute(params: Params) {
//     const user = await this.userRepository.findById(params.id);
//     if (!user) {
//       throw new Error('userがいないよ');
//     }
//     const newName = new Name(params.name);
//     user.changeName(newName);
//     await this.userRepository.save(user);
//
//     const changeUserInfoDTO = new ChangeUserInfoDTO({ user });
//     return changeUserInfoDTO;
//   }
// }
