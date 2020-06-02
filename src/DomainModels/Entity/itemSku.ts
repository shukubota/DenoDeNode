import Seasons from '../ValueObject/itemSku/Seasons.ts';
import { Size } from '../ValueObject/itemSku/Size.ts';
import { Color } from '../ValueObject/itemSku/Color.ts';
import { Brand } from '../ValueObject/itemSku/Brand.ts';
import { IItemSkuRepository, ItemSkuRepository  } from '../../Repositories/itemSkus.ts';
interface ItemSkuProps {
  id: number;
  color: Color;
  brand: Brand;
  size: Size;
  seasons?: Seasons;
}

export class ItemSku {
  id!: number;
  seasons?: Seasons;
  size: Size; 
  color: Color;
  brand: Brand;

  itemSkuRepository: IItemSkuRepository;

  constructor(props: ItemSkuProps) {
    // brandがなければエラー
    if (!props.brand) {
      throw new Error('brandがないよ');
    }
    // colorがなければエラー
    if (!props.brand) {
      throw new Error('brandがないよ');
    }

    // sizeがなければエラー
    if (!props.size) {
      throw new Error('sizeがないよ');
    }
    this.id = props.id;
    this.size = props.size;
    this.brand = props.brand;
    this.color = props.color;
    this.seasons = props.seasons;

    // アンチパターン
    this.itemSkuRepository = new ItemSkuRepository();
  }
  changeSeasons(newSeason: Seasons): void {
    this.seasons = newSeason;
  }

  isEqual(itemSku: ItemSku): boolean {
    return this.id === itemSku.id;
  }
  
  // アンチパターン
  isExist() {
    const itemSku = this.itemSkuRepository.findByCSB(this.color, this.size, this.brand);
    return !!itemSku;
  }
}