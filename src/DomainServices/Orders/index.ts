import { Order } from "../../DomainModels/Entity/order.ts";
import { IOrderRepository, OrderRepository  } from '../../Repositories/orders.ts';

export interface IOrderService {
  orderRepository: IOrderRepository;
  isExist: (order: Order) => Promise<boolean>;
  confirmExist: (orderId: number) => void;
}

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