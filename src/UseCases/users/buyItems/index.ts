interface Props {
  userId: number;
  skuId: number;
}

class BuyItemUsecase {
  constructor() {}
  buyItem(props: Props) {
    Transaction.start(async () => {
      const user = await this.userRepository.findById(props.userId);
      // こんな感じで再構築される(user, itemSku, paymentが一つの集約、myclosetItemは別集約)
      // {
      //   id: 1,
      //   email: 'hoge@qmail.com',
      //   name: 'Jobs',
      //   itemSkus: [{ id: 1, color: RED }, { id: 2, color: BLUE }],
      //   payments: [{ id: 1, paidStatus: RESERVED }, { id: 3, paidStatus: COMPLETE }],
      //   myClosetItemIds: [1, 2, 4],
      // }
      // const itemSku = user.getOwnItemSku()

      // itemのステータス変更and決済レコード作成
      const purchaseCompleteUser = await this.userBuyItemService.buyItem({
        user,
        itemSku,
      });
      await this.userRepository.save(purchaseCompleteUser);
    });
    // MyclosetItemを登録 (違う集約)
    const myclosetItem = new MyclosetItem({ color: itemSku.color, image: itemSku.image });
    await this.myclosetItemRepository.save(myclosetItem);
    return Promise.resolve();
  }
}

class UserBuyItemService {
  bunItem(props: Props) {
    const { user, itemSku } = props;
    // itemのステータス変更
    user.changeItemSkuStatus({ itemSkuId: itemSku.id });
    // 決済作成
    await this.paymentExternalRepository.create({ amount: itemSku.price});
    user.createPurchasedPayment({ amount: itemSku.price, status: COMPLETE });
    return user;
  }
}

class User {
  id: Id;
  email: Email;
  name: Name;
  itemSkus: ItemSkus;
  payments: Payments;
  myclosetItemIds: MyclosetItemIds;

  constructor() {}
  getOwnItemSku() {

  }

  buyItem(props) {
    // itemのステータス変更
    const targetItemSku = this.itemSkus.getById(props.itemSkuId);
    targetItemSku.sell();

    // 決済作成
    const payment = new Payment({
      itemSku: props.itemSkuId,
      amount: targetItemSku.getPrice(),
      status: 
    })

  }
  
}