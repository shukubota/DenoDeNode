export enum StatusValues {
  paid = 1,
  canceled = 2,
}

export class PaymentStatus {
  value: StatusValues;
  constructor(status: StatusValues) {
    this.value = status;
  }
}