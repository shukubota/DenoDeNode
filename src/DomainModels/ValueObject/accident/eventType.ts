export enum StatusValues {
  personal = 1,
  property = 2,
}

export class EventType extends Number{
  constructor(props: StatusValues) {
    super(props);
  };
}