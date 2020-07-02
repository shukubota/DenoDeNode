import { Name } from '../ValueObject/user/name.ts';
import { Email } from '../ValueObject/user/email.ts';
import { Id } from '../ValueObject/user/id.ts';
import { EncryptedPassword } from '../ValueObject/user/password.ts';
// import { UserRepository, IUserRepository } from '../../Repositories/users.ts';

enum AccountType {
  top = 1,
  senior = 2,
}

class Amount extends Number {
  greaterThan(amount: Amount) {
    if (this > amount) {
      return true;
    } else {
      return false;
    }
  }
  minus(amount: Amount) {
    const main = this as any;
    const _amount = amount as any;
    const newAmount = Amount.parseInt(main) - Amount.parseInt(_amount);
    return new Amount(newAmount);
  } 
};

const ONE_MILION = new Amount(1000000);

class Balance extends Amount {};

interface AccountProps {
  id: Id;
  bankId: Name;
  accountType: AccountType;
  balance: Balance;
  withdrawToken: WithdrawToken;
}

export class Accounts {
  id: Id;
  bankId: Name;
  accountType: AccountType;
  balance: Balance;
  withdrawToken: WithdrawToken;

  constructor(props: AccountProps) {
    this.id = props.id;
    this.bankId = props.bankId;
    this.accountType = props.accountType;
    this.balance = props.balance;
    this.withdrawToken = props.withdrawToken;
  }

  // 出金
  withdraw(params: WithdrawParams) {
    if (!this.withdrawToken) {
      throw new Error('引き落とす権限がありません。');
    }
    const withdrawAmount = new Amount(params._amount);
    if (withdrawAmount.greaterThan(ONE_MILION)) {
      throw new Error('一度に出金できる額を超えています。');
    }
    if (withdrawAmount.greaterThan(this.balance)) {
      throw new Error('預金額より多く引き出そうとしています。');
    }
    const remainder = this.balance.minus(withdrawAmount);
    this.balance = new Balance(remainder);
  }

  // 入金
  deposit(amount: number) {
    ...
  }
}


export class Accounts {
  id: Id;
  bankId: Name;
  accountType: AccountType;
  balance: Balance;
  withdrawToken: WithdrawToken;

  get isAuthenticated() {
    return !!this.withdrawToken;
  }

  set setBalance(amount: number) {
    this.balance = new Balance(amount);
  }
}