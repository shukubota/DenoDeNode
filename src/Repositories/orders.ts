import { OrderStatus }  from '../DomainModels/ValueObject/order/OrderStatus.ts';
import { Order } from '../DomainModels/Entity/order.ts';
import { db } from '../infrastructure/DataStore.ts';

export interface IOrderRepository {
  save: (params: any) => Promise<any>;
  find: (orderId: number) => Promise<Order | null>;
}

export class OrderRepository {
  async save(params: any) {
    // 本当はupsert
    return db.update('Order', params.id, params);
  }
  async find(orderId: number) {
    // const _order = db.find('Order', orderId);
    // で返ってきたつもり
    const _order = { id: 1, status: '配送済' };
    if (_order) {
      const orderStatus = new OrderStatus('配送済');
      const order = new Order({ id: _order.id, status: orderStatus });
      return order;
    } else {
      return null;
    }
  }
}