import air from '../src';

interface IProps {
  label?: string;
  lightAlpha?: number;
  fontSize?: number;
  color?: string;
  iconColor?: string;
  lightIconColor?: string;
  lightColor?: string;
  bgColor?: string;
  lineColor?: string;
  lightBgColor?: string;
  lineWidth?: number;
  radius?: number;
  icon?: string;
  space?: number;
  iconSize?: Array<number>;
}

export default class extends Laya.Sprite {
  props: IProps;
  isMouseDown = false;
  label: Laya.Text;
  icon: Laya.Image;
  constructor(props: IProps) {
    super();
    this.props = props;
    this.props.iconSize = this.props.iconSize || [50, 50];
    this.props.lightAlpha = this.props.lightAlpha || 0.5;
    this.on(Laya.Event.MOUSE_DOWN, this, this.onMouseDown);
    this.on(Laya.Event.MOUSE_UP, this, this.onMouseUp);
    this.on(Laya.Event.MOUSE_OUT, this, this.onMouseUp);
  }
  onMouseDown() {
    this.alpha = this.props.lightAlpha;
    this.isMouseDown = true;
    if (this.props.lightBgColor) {
      if (this.props.radius) {
        this._graphics._one[3] = { fillStyle: this.props.lightBgColor };
        console.log(this._graphics._one);
      } else {
        this._graphics._one[4] = this.props.lightBgColor;
      }
    }
    if (this.props.lightColor) {
      this.label.color = this.props.lightColor;
    }
  }
  onMouseUp() {
    if (this.isMouseDown === false) return;
    this.isMouseDown = false;
    this.alpha = 1;
    if (this.props.lightBgColor) {
      if (this.props.radius) {
        this._graphics._one[3] = { fillStyle: this.props.bgColor };
      } else {
        this._graphics._one[4] = this.props.bgColor;
      }
    }
    if (this.props.lightColor) {
      this.label.color = this.props.color;
    }
  }
  init(isFlex?: boolean) {
    if (this.props.icon) {
      this.icon = new Laya.Image(this.props.icon);
      this.icon.size(this.props.iconSize[0], this.props.iconSize[1]);
      air.colorFilter(this.icon, this.props.iconColor || '#000000');
      this.addChild(this.icon);
    }
    if (this.props.label) {
      this.label = new Laya.Text();
      this.label.fontSize = this.props.fontSize || 30;
      this.label.text = this.props.label;
      this.label.color = this.props.color || '#000000';
      this.addChild(this.label);
    }

    if (this.props.bgColor) {
      if (this.props.radius) {
        air.drawRectOfRadius(
          this,
          this.props.bgColor,
          this.props.radius,
          this.props.lineColor,
          this.props.lineWidth,
        );
      } else {
        air.drawRect(this, this.props.bgColor);
      }
    }
    if (isFlex !== false) {
      air.flex(this, 'col', 'center', 'center', this.props.space || 8);
    }
  }
}
