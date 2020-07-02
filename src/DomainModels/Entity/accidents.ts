import { Accident } from './accident.ts';

type Props = Accident[];

export class Accidents extends Array {
  constructor(props: Props) {
    super(props as any);
  }
}