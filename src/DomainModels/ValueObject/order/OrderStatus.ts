interface StatusValues {
  [key: string]: string;
  dlivered: string;
  canceled: string;
}

export const statusValues: StatusValues = {
  dlivered: '配送済',
  canceled: '配送キャンセル',
};

export type Status = typeof statusValues[keyof typeof statusValues];
type StatusKey = keyof typeof statusValues;


export class OrderStatus {
  value: Status;
  constructor(status: Status) {
    if (!Object.keys(statusValues).some((key: StatusKey) => statusValues[key] === status)) {
      throw new Error('statusが異常です');
    }
    this.value = status as Status;
  }
}