type BrandProps = string;

export class Brand extends String {
  constructor(props: BrandProps) {
    super(props);
    return this;
  }
}