// import { User } from '../DomainModels/Entity/user.ts';
// import { Email } from '../DomainModels/ValueObject/user/email.ts';
// import { EncryptedPassword } from '../DomainModels/ValueObject/user/password.ts';
// import { Id } from '../DomainModels/ValueObject/user/id.ts';
// import { Name } from '../DomainModels/ValueObject/user/name.ts';
//
// const db: any = {}
// export interface IUserRepository {
//   findByEmail: (email: Email) => Promise<User | null>;
//   findByEmailAndPassword: (params: IEmailAndPassword) => Promise<User | null>;
//   findById: (id: number) => Promise<User | null>;
//   // findByIdWithOrders: (params: FindByIdWithOrders) => Promise<User>;
//   save: (user: User) => Promise<void>;
// }
//
// export interface IEmailAndPassword {
//   email: Email | null;
//   password: EncryptedPassword | null;
// }
//
// export interface FindByIdWithOrders {
//   id: number;
// }
//
// export class UserRepository {
//   async findByEmail(email: Email | null) {
//     // const _user = db.find('User', email);
//     // で返ってきたつもり
//     const _user = { id: 1, email: 'test@qmail.com', name: 'takashi'};
//     if (_user) {
//       const email = new Email(_user.email);
//       const name = new Name(_user.name);
//       const id = new Id(_user.id);
//       const user = new User({ id, email, name });
//       return user;
//     } else {
//       return null;
//     }
//   }
//
//   async findById(id: Id) {
//     // const _user = db.find('User', email);
//     // で返ってきたつもり
//     const _user = { id: 1, email: 'test@qmail.com', name: 'Mark' };
//     if (_user) {
//       const email = new Email(_user.email);
//       const name = new Name(_user.name);
//       const id = new Id(_user.id);
//       const user = new User({ id, email, name });
//       return user;
//     } else {
//       return null;
//     }
//   }
//
//   async save(user: User) {
//     Promise.resolve();
//   }
//
//   async findByEmailAndPassword(params: IEmailAndPassword) {
//     // const _user = db.find('User', email);
//     // で返ってきたつもり
//     const _user = { id: 1, email: 'test@qmail.com', authenticationToken: 'token' };
//     if (_user) {
//       const email = new Email(_user.email);
//       const user = new User({ id: _user.id, email: _user.email, authenticationToken: _user.authenticationToken });
//       return user;
//     } else {
//       return null;
//     }
//   }
//
//
//   // async findByIdWithOrders(params: FindByIdWithOrders) {
//   //   const _userWithOrder = await db.find('User', {
//   //     where: {
//   //       id: params.id,
//   //     },
//   //     includes: [
//   //       {
//   //         models: 'orders',
//   //         required: true,
//   //         attributes: ['id', 'delivered_date'],
//   //       },
//   //     ],
//   //   });
//
//   //   const _orders = _userWithOrder.orders.map(_order => {
//   //     const order = new Order({
//   //       id: _order.id,
//   //       deliveredDate: _order.delivered_date,
//   //     });
//   //     return order;
//   //   });
//
//   //   const orders = new Orders(_orders);
//   //   const email = new Email(_userWithOrder.email);
//   //   const id = new Id(_userWithOrder.id);
//   //   const user = new User({
//   //     id,
//   //     email,
//   //     orders,
//   //   });
//   //   return user;
//   // }
//
//   async findByIdWithOrders(params: FindByIdWithOrders) {
//     const _userWithOrder = await db.find('User', params);
//
//     const _orders = _userWithOrder.orders.map(_order => {
//       const orderId = new OrderId(_order.id);
//       const deliveredDate = new DeliveredDate(_order.delivered_date);
//       const order = new Order({
//         id: orderId,
//         deliveredDate,
//       });
//       return order;
//     });
//
//     const orders = new Orders(_orders);
//     const email = new Email(_userWithOrder.email);
//     const id = new Id(_userWithOrder.id);
//     const user = new User({
//       id,
//       email,
//       orders,
//     });
//     return user;
//   }
//
//   async findByIdWithOrders(params: FindByIdWithOrders) {
//     const _userWithOrder = await db.find('User', params);
//
//     const user = this.userFactory.confirmOwnOrders({
//       orders: _userWithOrder.orders,
//       email: _userWithOrder.email,
//       id: _userWithOrder.id,
//     });
//     return user;
//   }
// }
