export enum StatusValues {
  paid = 1,
  canceled = 2,
}

export class PaymentStatus extends Number {
  constructor(props: StatusValues) {
    super(props);
  }
}