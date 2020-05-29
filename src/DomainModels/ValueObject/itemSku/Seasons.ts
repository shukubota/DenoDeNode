interface SeasonProps {
  summer: boolean;
  early_spring: boolean;
  late_spring: boolean;
  winter: boolean;
  early_autumn: boolean;
  late_autumn: boolean;
}

class Seasons {
  summer!: boolean;
  early_spring!: boolean;
  late_spring!: boolean;
  winter!: boolean;
  early_autumn!: boolean;
  late_autumn!: boolean;
  constructor(props: SeasonProps) {
    if (props.summer && props.winter) {
      throw new Error('夏も冬も着れないよ');
    }
    this.summer = props.summer;
    this.early_spring = props.early_spring;
    this.late_spring = props.late_spring;
    this.winter = props.winter;
    this.early_autumn = props.early_autumn;
    this.late_autumn = props.late_autumn;
  }
}