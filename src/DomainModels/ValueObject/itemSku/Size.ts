type SizeProps = 36 | 38 | 40;

const sizeConst = [36, 38, 40];

export class Size extends Number {
  constructor(props: SizeProps) {
    super(props);
    if (!sizeConst.includes(props)) {
      throw new Error('そんなサイズはない');
    }
    return this;
  }
}