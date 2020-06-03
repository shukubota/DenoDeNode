import { IOrderRepository, OrderRepository } from '../../Repositories/orders.ts';
import { IPaymentRepository, PaymentRepository } from '../../Repositories/payment.ts';
import { OrderService, IOrderService } from '../../DomainServices/Orders/index.ts';
import { PaymentService, IPaymentService } from '../../DomainServices/Payment/index.ts';
import { Order } from '../../DomainModels/Entity/order.ts';
import { Payment } from '../../DomainModels/Entity/payment.ts';

export class OrderUseCase {
  orderRepository: IOrderRepository;
  paymentRepository: IPaymentRepository;
  orderService: IOrderService;
  paymentService: IPaymentService;

  constructor() {
    this.orderRepository = new OrderRepository();
    this.paymentRepository = new PaymentRepository();
    this.orderService = new OrderService();
    this.paymentService = new PaymentService();
  }

  async cancel(orderId: number) {
    // オーダーを確認する
    const order: Order | null = await this.orderRepository.find(orderId);
    if (!order) {
      throw new Error('orderがないよ');
    }

    // オーダーをキャンセルする
    await order.changeStatusToCancel();
    await this.orderRepository.save(order); // <- Repository使っている
    
    // 返金する
    const payment: Payment | null = await this.paymentRepository.findByOrderId(orderId);
    if (!payment) {
      throw new Error('決済レコードがないよ');
    }
    await this.paymentService.cancel(payment);

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