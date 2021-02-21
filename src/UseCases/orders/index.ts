// import { IOrderRepository, OrderRepository } from '../../Repositories/orders.ts';
// import { IPaymentRepository, PaymentRepository } from '../../Repositories/payment.ts';
// import { OrderService } from '../../DomainServices/Orders/index.ts';
// import { PaymentService } from '../../DomainServices/Payment/index.ts';
// import { Order } from '../../DomainModels/Entity/order.ts';
// import { Payment } from '../../DomainModels/Entity/payment.ts';
//
// export class OrderUseCase {
//   orderRepository: IOrderRepository;
//   paymentRepository: IPaymentRepository;
//   orderService: OrderService;
//   paymentService: PaymentService;
//
//   constructor() {
//     this.orderRepository = new OrderRepository();
//     this.paymentRepository = new PaymentRepository();
//     this.orderService = new OrderService();
//     this.paymentService = new PaymentService();
//   }
//
//   async cancel(orderId: number) {
//     // オーダーを確認する
//     const order: Order | null = await this.orderRepository.find(orderId);
//     if (!order) {
//       throw new Error('orderがないよ');
//     }
//
//     // オーダーをキャンセルする
//     order.changeStatusToCancel();
//     await this.orderRepository.save(order);
//
//     // 返金する
//     const payment: Payment | null = await this.paymentRepository.findByOrderId(orderId);
//     if (!payment) {
//       throw new Error('決済レコードがないよ');
//     }
//     await this.paymentService.cancel(payment);
//
//     return Promise.resolve();
//   }
// }
