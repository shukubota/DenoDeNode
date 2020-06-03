import { ItemSku } from "../../DomainModels/Entity/itemSku.ts";
import { IItemSkuRepository, ItemSkuRepository  } from '../../Repositories/itemSkus.ts';

export interface IItemSkuService {
  itemSkuRepository: IItemSkuRepository;
  isExist: (itemSku: ItemSku) => boolean;
}

export class ItemSkuService {
  itemSkuRepository: IItemSkuRepository;
  constructor() {
    this.itemSkuRepository = new ItemSkuRepository();
  }
  
  isExist(itemSku: ItemSku) {
    const _itemSku = this.itemSkuRepository.findByParams({
      color: itemSku.color,
      size: itemSku.size,
      brand: itemSku.brand,
    });
    return !!_itemSku;
  }
}