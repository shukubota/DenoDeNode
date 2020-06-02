interface StatusValues {
  [key: string]: string;
  dlivered: string,
  canceled: string,
}
export const statusValues: StatusValues = {
  dlivered: '決済済',
  canceled: '返金',
} as const;

type Status = typeof statusValues[keyof typeof statusValues];
type StatusKey = keyof typeof statusValues;

export class PaymentStatus {
  value: Status;
  constructor(status: string) {
    if (!Object.keys(statusValues).some((key: StatusKey) => statusValues[key] === status)) {
      throw new Error('statusが異常です');
    }
    this.value = status as Status;
  }
}