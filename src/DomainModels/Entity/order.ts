import { OrderStatus } from '../ValueObject/order/OrderStatus.ts';
import { statusValues } from '../ValueObject/order/OrderStatus.ts';

interface OrderProps {
  id: number;
  status: OrderStatus;
}
export class Order {
  id!: number;
  status: OrderStatus;
  constructor(props: OrderProps) {
    this.id = props.id;
    this.status = props.status;
  }
  cancel() {
    this.status = new OrderStatus(statusValues.canceled);
  }
}