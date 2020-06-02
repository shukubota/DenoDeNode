import { PaymentStatus, statusValues } from '../ValueObject/payment/PaymentStatus.ts';

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

  cancel() {
    this.status = new PaymentStatus(statusValues.canceled);
  }

  isValidSettlement() {
    // 外部payment serviceの決済レコード情報があるか
    return !!this.transactionId;
  }
}