import { User } from '../../DomainModels/Entity/user.ts';
import { Order } from '../../DomainModels/Entity/order.ts';
import { ItemSku } from '../../DomainModels/Entity/itemSku.ts';
import { Email } from '../../DomainModels/ValueObject/user/email.ts';
import { Name } from '../../DomainModels/ValueObject/user/aname';

type ID = number;
type IOrdersFactory = any;
class OrdersFactory {
  create(orderIds: number[]){}
}

interface CreateParams {
  id: number;
  email: string;
  name: string;
  orderIds: number[];
}

export class UserFactory {
  ordersFactory: IOrdersFactory
  constructor() {
    this.ordersFactory = new OrdersFactory();
  }
  async create(createParams: CreateParams): User {
    const orders = this.ordersFactory.create(createParams.orderIds);
    const name = new Name(createParams.name);
    const email = new Email(createParams.email);
    const id = new Id(createParams.id);
    const user = new User({
      orders,
      name,
      email,
      id,
    });
    return user;
  }

  confirmOwnOrders (params: ConfirmOwnOrdersParams) {
    const _orders = params.orders.map(_order => {
      const orderId = new OrderId(_order.id);
      const deliveredDate = new DeliveredDate(_order.delivered_date);
      const order = new Order({
        id: orderId,
        deliveredDate,
      });
      return order;
    });

    const orders = new Orders(_orders);
    const email = new Email(params.email);
    const id = new Id(params.id);
    const user = new User({
      id,
      email,
      orders,
    });
    return user;
  }
}