import { Order } from "../../DomainModels/Entity/order.ts";
import { IOrderRepository, OrderRepository  } from '../../Repositories/orders.ts';

export class OrderService {
  orderRepository: IOrderRepository;
  constructor() {
    this.orderRepository = new OrderRepository();
  }
  
  async isExist(order: Order) {
    const _order = await this.orderRepository.findById(order.id);
    return !!_order;
  }
}