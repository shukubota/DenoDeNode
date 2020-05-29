import { IOrderRepository, OrderRepository } from '../../Repositories/orders.ts';
import { IPaymentRepository, PaymentRepository } from '../../Repositories/payment.ts';
import { Order } from '../../DomainModels/Entity/order.ts';
import { OrderStatus } from '../../DomainModels/ValueObject/order/OrderStatus.ts';
import { Payment } from '../../DomainModels/Entity/payment.ts';
import { PaymentStatus } from '../../DomainModels/ValueObject/payment/PaymentStatus.ts';

export class OrderUseCase {
  orderRepository: IOrderRepository;
  paymentRepository: IPaymentRepository;

  constructor() {
    this.orderRepository = new OrderRepository();
    this.paymentRepository = new PaymentRepository();
  }

  async cancel(orderId: number) {
    // オーダーを確認する
    const order: Order | null = await this.orderRepository.find(orderId);
    if (!order) {
      throw new Error('orderがないよ');
    }

    // オーダーをキャンセルする
    const newOrderStatus = new OrderStatus('配送キャンセル');
    order.changeStatus(newOrderStatus);
    await this.orderRepository.save(order); // <- Repository使っている
    
    // 返金する
    const payment: Payment | null = await this.paymentRepository.findByOrderId(orderId);
    if (!payment) {
      throw new Error('決済レコードがないよ');
    }
    const newPaymentStatus = new PaymentStatus('返金');
    payment.changeStatus(newPaymentStatus);

    // 外部paymentサービスに決済キャンセルをリクエスト
    // // 外部paymentサービスと取引があるかチェック
    if (!payment.isValidSettlement()) {
      throw new Error('キャンセルすべき決済がないよ')
    };
    await this.paymentRepository.cancelSettlement(payment); // 外部payment service のAPIに投げるのをrepositoryに依頼
    await this.paymentRepository.save(payment);
    return Promise.resolve();
  }
}