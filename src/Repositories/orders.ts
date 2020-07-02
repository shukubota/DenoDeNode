import { OrderStatus, StatusValues }  from '../DomainModels/ValueObject/order/OrderStatus.ts';
import { Order } from '../DomainModels/Entity/order.ts';
import { db } from '../Infrastructures/DataStore.ts';

export interface IOrderRepository {
  save: (params: any) => Promise<any>;
  find: (orderId: number) => Promise<Order | null>;
  findById: (orderId: number) => Promise<Order | null>;
}

export class OrderRepository {
  async save(params: any) {
    // 本当はupsert
    return db.update('Order', params.id, params);
  }
  async find(orderId: number) {
    // const _order = db.find('Order', orderId);
    // で返ってきたつもり
    const _order = { id: 1, status: 2 };
    if (_order) {
      const orderStatus = new OrderStatus(_order.status);
      const order = new Order({ id: _order.id, status: orderStatus });
      return order;
    } else {
      return null;
    }
  }

  async findById(orderId: number) {
    // const _order = db.find('Order', orderId);
    // で返ってきたつもり
    const _order = { id: 1, status: 1 };
    const newStatus = _order.status;
    const orderStatus = new OrderStatus(newStatus);
    const order = new Order({ id: _order.id, status: orderStatus });
    return order || null;
  }
}