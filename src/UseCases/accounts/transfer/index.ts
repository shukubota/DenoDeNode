class AccountTransferUsecase {
  accountRepository: IAccountRepository;
  accountTransferService: IAccountTransferService;

  constructor() {
    this.accountRepository = new AccountRepository();
    this.accountTransferService = new AccountTransferService();
  }

  async accountTransfer(transferParams: TransferParams) {
    const fromAccount = await this.accountRepository.find({ id: transferParams.fromAccountId });
    const toAccount = await this.accountRepository.find({ id: transferParams.toAccountId });
    
    const {
      fromAccount: completeFromAcount,
      toAccount: completeToAccount,
      transactionHistory,
    } = await this.accountTransferService.transfer({
      fromAccount,
      toAccount,
      amount: transferParams.amount,
    });

    await this.transactionHistoryRepository.save(transactionHistory);
    await this.accountRepository.save(completeFromAcount);
    await this.toRepository.save(completeToAccount);
    return Promise.resolve();
  }
}