import { EventType } from '../ValueObject/accident/eventType.ts';
import { Id } from '../ValueObject/common/id.ts';

export class Accident {
  id: Id;
  eventDate: Date;
  eventType: EventType;
}