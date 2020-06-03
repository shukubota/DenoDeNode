// interface StatusValues {
//   [key: string]: string;
//   dlivered: string;
//   canceled: string;
// }

// export const statusValues: StatusValues = {
//   dlivered: '配送済',
//   canceled: '配送キャンセル',
// };

export enum StatusValues {
  delivered = 1,
  canceled = 2,
}

// export type Status = typeof statusValues[keyof typeof statusValues];
// type StatusKey = keyof typeof statusValues;


export class OrderStatus {
  value: StatusValues;
  constructor(status: StatusValues) {
    this.value = status;
  }
}