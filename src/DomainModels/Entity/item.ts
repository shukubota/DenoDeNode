import Seasons from '../ValueObject/itemSku/Seasons.ts';
import { Size } from '../ValueObject/itemSku/Size.ts';
import { Color } from '../ValueObject/itemSku/Color.ts';
import { Brand } from '../ValueObject/itemSku/Brand.ts';
// import { IItemSkuRepository, ItemSkuRepository  } from '../../Repositories/itemSkus.ts';
interface ItemSkuProps {
  id: number;
  color: Color;
  brand: Brand;
  size: Size;
  seasons?: Seasons;
}

export class Item {
  id: Id;
  seasons: Seasons;
  size: Size; 
  color: Color;
  brand: Brand;
  price: Price;
  wholeSalePrice: WholeSalePrice;
  stylistComment: StylistComment;
  status: ItemStatus;

  constructor(props: ItemProps) {
    this.id = props.id;
    this.size = props.size;
    this.brand = props.brand;
    this.color = props.color;
    this.seasons = props.seasons;
    this.stylistComment = props.stylistComment;
    this.price = props.price;
    this.wholeSalePrice = props.wholeSalePrice;
  }
  
  changeWholeSalePrice(newPrice: WholeSalePrice) {
    this.wholeSalePrice = newPrice;
  }

  changePrice(newPrice: Price) {
    if (this.wholeSalePrice.greaterThan(newPrice)) {
      throw new Error('上代が下代を下回っています');
    }
    this.wholeSalePrice = newPrice;
  }

  addStylistComment(comment: StylistComment) {
    this.stylistComment = comment;
  }

  sell() {
    this.checkSellable();
    this.status = new ItemStatus(SOLD);
  }
}