import air from '../air';

function center(v: air.Sprite) {
  v.x = (v.parent.width - v.width) / 2;
  v.y = (v.parent.height - v.height) / 2;
}

export default center;
