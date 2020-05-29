import { OrderStatus } from '../ValueObject/order/OrderStatus.ts';

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
  changeStatus(status: OrderStatus) {
    this.status = status;
  }
}