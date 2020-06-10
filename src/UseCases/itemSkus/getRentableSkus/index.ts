import { ItemSku } from "../../../DomainModels/Entity/itemSku.ts";
import { Size } from '../../../DomainModels/ValueObject/itemSku/Size.ts';
import { Color } from '../../../DomainModels/ValueObject/itemSku/Color.ts';
import { Brand } from '../../../DomainModels/ValueObject/itemSku/Brand.ts';

import { ItemSkuService } from '../../../DomainServices/itemSkus/index.ts'; 


export class GetRentableSkus {
  itemSkuService: IItemSkuService;
  constructor() {
    this.itemSkuService = new ItemSkuService();
  }
  execute() {
    const size = new Size(36);
    const color = new Color('red');
    const brand = new Brand('moririn');
    const itemSku = new ItemSku({ id: 1, color, brand, size });

    // すでにあるSkuか確認する
    
    // アンチパターン
    // const isExist = itemSku.isExist();

    // こっちが正しい
    const isExist = this.itemSkuService.isExist(itemSku);


    // この後、登録する

    return true;
  }
}