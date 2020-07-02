interface Props {
  lastName: string;
  firstName: string;
  address: string;
}

export class PublishLicenceUsecase {
  driverRepository: DriverRepository;
  driverCheckInService: DriverCheckInService;

  publishLicence(props: Props) {
    const address = new Address(props.address);
    const name = new Name({
      lastName: props.lastName,
      firstName: props.firstName,
    });
    const driver = this.driverRepository.findBy({ address, name });
    if (!driver) {
      throw new Error('この運転者は存在しないよ');
    };
    // const driver.generateLicence();
  }
}




    

    this.driverCheckInService.checkIn();
  }
}