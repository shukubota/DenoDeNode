type StatusType = '配送済' | '配送キャンセル';
const statusValues = ['配送済', '配送キャンセル'];

export class OrderStatus {
  value: StatusType;
  constructor(status: string) {
    if (!statusValues.includes(status)) {
      throw new Error('statusが異常です');
    }
    this.value = status as StatusType;
  }
}