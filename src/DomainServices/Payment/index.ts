import { Payment } from '../../DomainModels/Entity/payment.ts';
import { PaymentRepository, IPaymentRepository } from '../../Repositories/payment.ts';
import { ExternalPaymentModule } from '../../modules/externalPaymentModule/index.ts';

export interface IPaymentService {
  cancel: (payment: Payment) => void;
} 

export class PaymentService {
  paymentRepository: IPaymentRepository;
  constructor() {
    this.paymentRepository = new PaymentRepository();
  }
  async cancel(payment: Payment) {
    payment.cancel();
    // 外部paymentサービスに決済キャンセルをリクエスト
    // // 外部paymentサービスと取引があるかチェック
    if (!payment.isValidSettlement()) {
      throw new Error('キャンセルすべき決済がないよ')
    };
    const externalPaymentService = new ExternalPaymentModule();
    await externalPaymentService.request('targetUrl', { transactionId: payment.transactionId });
    await this.paymentRepository.save(payment); // 外部payment service のAPIに投げる
    Promise.resolve();
  }
}