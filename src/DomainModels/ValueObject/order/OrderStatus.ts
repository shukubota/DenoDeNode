export enum StatusValues {
  delivered = 1,
  canceled = 2,
}

export class OrderStatus extends Number {
  constructor(props: StatusValues) {
    super(props);
  }
}