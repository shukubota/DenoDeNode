// import { ItemSku } from '../DomainModels/Entity/itemSku.ts';
// // import { db } from '../infrastructure/DataStore.ts';
// import { Color } from '../DomainModels/ValueObject/itemSku/Color.ts';
// import { Brand } from '../DomainModels/ValueObject/itemSku/Brand.ts';
// import { Size } from '../DomainModels/ValueObject/itemSku/Size.ts';
//
// interface FindByParams {
//   color: Color,
//   size: Size,
//   brand: Brand,
// }
//
// export interface IItemSkuRepository {
//   // save: (params: any) => Promise<any>;
//   findByParams: (params: FindByParams) => Promise<ItemSku | null>;
// }
//
// export class ItemSkuRepository {
//   // async save(params: any) {
//   //   // 本当はupsert
//   //   return db.update('Order', params.id, params);
//   // }
//   async findByParams(params: FindByParams) {
//     // const _itemSku = db.find('ItemSku', { color, size, brand });
//     // で返ってきたつもり
//     const _itemSku = { id: 1, color: 'red', size: 36, brand: 'moririn' };
//     if (_itemSku) {
//       // factory
//       const itemSku = new ItemSku(_itemSku);
//       return itemSku;
//     } else {
//       return null;
//     }
//   }
// }
