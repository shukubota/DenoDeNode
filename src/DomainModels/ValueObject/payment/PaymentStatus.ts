type StatusType = '決済済' | '返金';
const statusValues = ['決済済', '返金'];

export class PaymentStatus {
  value: StatusType;
  constructor(status: string) {
    if (!statusValues.includes(status)) {
      throw new Error('statusが異常です');
    }
    this.value = status as StatusType;
  }
}