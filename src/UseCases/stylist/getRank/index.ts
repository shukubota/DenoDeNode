import { User } from '../../../DomainModels/Entity/user.ts';
import { Email } from '../../../DomainModels/ValueObject/user/email.ts';
import { EncryptedPassword } from '../../../DomainModels/ValueObject/user/password.ts';

class StylistRepository {};

interface getRankParams {
  stylistId: number;
}
export class GetRankUsecase {
  stylistRepository: StylistRepository;
  constructor() {
    this.stylistRepository = new StylistRepository();
  }
  async getRank(params: getRankParams) {
    const stylist = await this.stylistRepository.find({ stylistId });
    stylist.confirmRank();
    
    const stylistRankDTO = new StylistRankDTO({ stylist }); 
    return stylistRankDTO;
  }
}