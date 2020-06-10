import { IOrderRepository, OrderRepository } from '../../Repositories/orders.ts';
import { IPaymentRepository, PaymentRepository } from '../../Repositories/payment.ts';
import { OrderService } from '../../DomainServices/Orders/index.ts';
import { PaymentService } from '../../DomainServices/Payment/index.ts';
import { Order } from '../../DomainModels/Entity/order.ts';
import { Payment } from '../../DomainModels/Entity/payment.ts';
import { StatusValues } from '../../DomainModels/ValueObject/order/OrderStatus.ts';
// import { ItemSku } from '../../DomainModels/Entity/itemSku';

class ExternalPaymentModule {
  request: any;
};
const db: any = {};
class DeliveryCompanyAPI {
  request: any;
}
type DBOrder = any;
class ItemSKu = any;

export class OrderUseCase {
  async cancel(orderId: number) {
    // オーダーを確認する
    const _order: DBOrder | null = await db.find('Order', {
      where: {
        id: orderId,
      },
      includes: [
        {
          model: 'ItemSkus',
          required: true,
          attributes: ['orderd_date', 'product_code'],
        },
      ],
    });
    if (!_order) {
      throw new Error('orderがないよ');
    }

    const itemSku = new ItemSku({
      color: _order.color,
      brand: _order.brand,
      size: _order.size,
    });

    const order = new Order({
      id: _order.id,
      itemSku,
    });

    // オーダーをキャンセルする
    // cancelなら処理を終了する
    if (order.status === StatusValues.canceled) {
      throw new Error('ステータスがおかしいよ');
    }

    // 発送前なら配送業者にキャンセルを通知
    if (order.status === StatusValues.preparing) {
      const deliveryCompanyAPI = new DeliveryCompanyAPI();
      await deliveryCompanyAPI.request('targetUrl', { transactionId: order.transactionId })
      .catch((err: Error) => {
        throw new Error('Delivery Company serviceとの通信に失敗しました');
      });
    }
    await db.update('Order', { status: StatusValues.canceled});
    
    // 返金する
    const payment: Payment | null = await db.find('payment', { order_id: orderId });
    if (!payment) {
      throw new Error('決済レコードがないよ');
    }

    // 外部paymentサービスに決済キャンセルをリクエスト
    // // 外部paymentサービスと取引があるかチェック
    if (!payment.transactionId) {
      throw new Error('キャンセルすべき決済がないよ');
    };
    const externalPaymentService = new ExternalPaymentModule();
    await externalPaymentService.request('targetUrl', { transactionId: payment.transactionId })
    .catch((err: Error) => {
      throw new Error('payment serviceとの通信に失敗しました');
    });
    
    await db.update('Payment', payment);
    return Promise.resolve();
  }
}