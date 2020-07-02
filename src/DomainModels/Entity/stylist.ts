import { Name } from '../ValueObject/user/name.ts';
import { Email } from '../ValueObject/user/email.ts';
import { Id } from '../ValueObject/user/id.ts';
import { EncryptedPassword } from '../ValueObject/user/password.ts';
// import { UserRepository, IUserRepository } from '../../Repositories/users.ts';

enum Rank {
  top = 1,
  senior = 2,
  normal = 3, 
  junior = 4,
}

interface StylistProps {
  id: Id;
  name: Name;
  rating: Rating;
  purchasingRate: PurchasingRate;
  stylingCount: StylingCount;
}

export class Stylsit {
  id: Id;
  name: Name;
  rating: Rating;
  purchasingRate: PurchasingRate;
  stylingCount: StylingCount;
  rank: Rank;
  constructor(props: StylistProps) {
    this.id = props.id;
    this.name = props.name;
    this.rating = props.rating;
    this.purchasingRate = props.purchasingRate;
    this.stylingCount = props.stylingCount;
  }
  confirmRank() {
    let rank: Rank = Rank.normal;
    if (this.rating < 3.0 || this.stylingCount < 50 || this.purchasingRate < 2.5) {
      rank = Rank.junior;
    } else if (this.rating >= 3.2 || this.stylingCount >= 500 || this.purchasingRate > 5.0) {
      rank = Rank.top;
    } else if (this.rating >= 3.15 || this.stylingCount >= 150 || this.purchasingRate > 4.0) {
      rank = Rank.senior;
    }
    this.rank = rank;
  }
}