import { PaymentStatus } from '../ValueObject/payment/PaymentStatus.ts';

interface PaymentProps {
  id: number;
  status: PaymentStatus;
  orderId?: number;
  transactionId?: number;
}
export class Payment {
  id!: number;
  status: PaymentStatus;
  orderId?: number;
  transactionId?: number;
  constructor(props: PaymentProps) {
    this.id = props.id;
    this.status = props.status;
    this.orderId = props.orderId;
    this.transactionId = props.transactionId;
  }
  changeStatus(status: PaymentStatus) {
    this.status = status;
  }

  isValidSettlement() {
    // 外部payment serviceの決済レコード情報があるか
    return !!this.transactionId;
  }
}