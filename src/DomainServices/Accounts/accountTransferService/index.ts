import { UserRepository, IUserRepository } from '../../../Repositories/users.ts';
import { User } from '../../../DomainModels/Entity/user.ts';
import { Email } from '../../../DomainModels/ValueObject/user/email.ts';
import { EncryptedPassword } from '../../../DomainModels/ValueObject/user/password.ts';
import { AuthenticationToken } from '../../../DomainModels/ValueObject/user/authenticationToken.ts';

interface AuthenticateParams {
  email: Email;
  password: EncryptedPassword;
}

export class AccountTransferService {
  async transfer(transferParams: TransferParams) {
    const { fromAccount, toAccount, amount } = transferParams;
    
    fromAccount.withdraw(transferParams.amount);
    toAccount.deposit(transferParams.amount);

    const transactionHistory = new TransactionHistory({
      fromAccountId: new AccountId(fromAccount.id),
      toAccountId: new AccountId(toAccount.id),
    });

    return {
      fromAccount,
      toAccount,
      transactionHistory,
    };
  }
}


// 悪い例
export class AccountTransferService {
  async transfer(transferParams: TransferParams) {
    const { fromAccount, toAccount, amount } = transferParams;

    const isFromAuthenticated = fromAccount.isAuthenticated();
    if (!isFromAuthenticated) {
      throw new Error('権限がありません。');
    }
    if (amount > ONE_MILION) {
      throw new Error('一度に出金できる額を超えています。');
    }
    if (amount > fromAccount.balance) {
      throw new Error('預金額より多く引き出そうとしています。');
    }
    fromAccount.setBalance(fromAccount.balance - amount);

    const isToAuthenticated = toAccount.isAuthenticated();
    if (!isToAuthenticated) {
      throw new Error('権限がありません。');
    }
    if (amount > TWO_MILION) {
      throw new Error('一度に入金できる額を超えています。');
    }
    toAccount.setBalance(toAccount.balance + amount);

    const transactionHistory = new TransactionHistory({
      fromAccountId: new AccountId(fromAccount.id),
      toAccountId: new AccountId(toAccount.id),
    });

    return {
      fromAccount,
      toAccount,
      transactionHistory,
    };
  }
}