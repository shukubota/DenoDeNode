export enum StatusValues {
  delivered = 1,
  canceled = 2,
  onDelivery = 3,
  preparing = 4,
  ordered  = 5,
}

export class OrderStatus extends Number {
  constructor(props: StatusValues) {
    super(props);
  }
}