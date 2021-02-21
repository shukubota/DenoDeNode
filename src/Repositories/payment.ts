// import { PaymentStatus }  from '../DomainModels/ValueObject/payment/PaymentStatus.ts';
// import { Payment } from '../DomainModels/Entity/payment.ts';
// import { db } from '../Infrastructures/DataStore.ts';
// import { ExternalPaymentModule } from '../modules/externalPaymentModule/index.ts';
//
// export interface IPaymentRepository {
//   save: (params: any) => Promise<void>;
//   findByOrderId: (orderId: number) => Promise<Payment | null>;
//   cancelSettlement: (payment: Payment) => Promise<void>;
// }
//
// export class PaymentRepository {
//   async save(params: any) {
//     // 本当はupsert
//     return db.update('Payment', params.id, params);
//   }
//   async findByOrderId(orderId: number) {
//     // const _payment = db.find('Payment', orderId);
//     // で返ってきたつもり
//     const _payment = { id: 1, status: 1, transactionId: 111 };
//     if (_payment) {
//       const paymentStatus = new PaymentStatus(_payment.status);
//       const payment = new Payment({ id: _payment.id, status: paymentStatus, transactionId: _payment.transactionId });
//       return payment;
//     } else {
//       return null;
//     }
//   }
//   async cancelSettlement(payment: Payment) {
//     const externalPaymentService = new ExternalPaymentModule();
//     await externalPaymentService.request('targetUrl', { transactionId: payment.transactionId });
//   }
// }
