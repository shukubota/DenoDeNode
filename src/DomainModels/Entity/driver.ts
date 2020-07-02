import { Id } from '../ValueObject/driver/id.ts';
import { BirthDate } from '../ValueObject/driver/birthDate.ts';
import { moment } from "https://deno.land/x/moment/moment.ts";

type LicenceGetDate = Date;
interface DriverProps {
  id: Id;
  birthDate: BirthDate;
  accidents: Accidents;
  licanceGetDate: licanceGetDate;
}

export class Driver {
  id: Id;
  birthDate: BirthDate;
  accidents: Accidents;
  licenceGetDate: LicenceGetDate;

  constructor(driverProps: DriverProps) {
    this.id = driverProps.id;
    this.birthDate = driverProps.birthDate;
    this.accidents = driverProps.accidents;
    this.licenceGetDate = driverProps.licanceGetDate;
  }

  get age() {
    const now = moment();
    const birthDate = moment(this.birthDate);
    return birthDate.diff(now, 'year');
  }
}