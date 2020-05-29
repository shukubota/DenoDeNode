interface ItemSkuProps {
  seasons: Seasons;
}

class ItemSku {
  seasons!: Seasons;
  constructor(props: ItemSkuProps) {
    if (props.seasons.summer && props.seasons.winter) {
      throw new Error('夏も冬も着れないよ');
    }
    this.seasons = props.seasons;
  }
  changeSeasons(newSeason: Seasons): void {
    if (newSeason.summer && newSeason.winter) {
      throw new Error('夏も冬も着れないよ');
    }
    this.seasons = newSeason;
  }
}