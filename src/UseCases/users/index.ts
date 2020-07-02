class User {
  id: number;
  email: string;
  orders: Orders;
}
class Orders extends Array {
}

class UserAggregationRepository {
  async save(user: User) {
    return db.trunsaction(async manager => {
      const _user = await db.get({
        include: [{ orders, payments, items }],
        where: { id: user.id },
      });
      const prevUser = await this.userAggregationFactory.create(_user);

      // users table
      if (!user.isEqual(prevUser)) {
        const userDAO = this.userDaoFactory.create(user);
        await manager.save(userDAO);
      }
  
      // orders table
      for (const order of user.orders) {
        const prevOrder = prevUser.getOrder({ id: order.id });
        if (!order.isEqual(prevOrder)) {
          const orderDAO = this.orderDaoFactory.create(order);
          await manager.save(orderDAO);
        }
        // items table
        for (const item of order.items) {
          const prevItem = prevUser.getItem({ id: item.id });
          if (!item.isEqual(prevItem)) {
            const itemDAO = this.itemDaoFactory.create(item);
            await manager.save(itemDAO);
          }
        }
      }
      
      // payments table
      for (const payment of user.payments) {
        const paymentDAO = this.paymentDaoFactory.create(payment);
        await manager.save(paymentDAO);
      }
    });
  }
}



// 元々　比較もしない

class UserAggregationRepository {
  async save(user: User) {
    return db.trunsaction(async manager => {
      // users table
      const userDAO = this.userDaoFactory.create(user);
      await manager.save(userDAO);
  
      // orders table
      for (const order of user.orders) {
        const orderDAO = this.orderDaoFactory.create(order);
        await manager.save(orderDAO);
        // items table
        for (const item of order.items) {
          const itemDAO = this.itemDaoFactory.create(item);
          await manager.save(itemDAO);
        }
      }
      
      // payments table
      for (const payment of user.payments) {
        const paymentDAO = this.paymentDaoFactory.create(payment);
        await manager.save(paymentDAO);
      }
    });
  }
}