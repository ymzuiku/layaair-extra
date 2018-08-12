import air from './air';

function full(node: air.Sprite, parent?: air.Sprite) {
  const father = parent || (node.parent as air.Sprite);
  node.width = father.width;
  node.height = father.height;
}

function rule(
  node: air.Sprite,
  direction: string = 'col',
  justify: string = 'start',
  align: string = 'start',
  space: number = 0,
) {
  if (node.numChildren > 0) {
    let w = 0;
    let h = 0;
    let sw = 0;
    let sh = 0;
    let flexs = 0;
    let tempLen = 0;
    let param = 'height';
    if (direction === 'row') {
      param = 'width';
    }
    for (let i = 0; i < node.numChildren; i++) {
      const sub = node.getChildAt(i) as air.Sprite;
      if (sub['flex'] !== undefined) {
        flexs += sub['flex']
      } else {
        tempLen += sub[param] + space;
      }
    }
    for (let i = 0; i < node.numChildren; i++) {
      const sub = node.getChildAt(i) as air.Sprite;
      if (flexs > 0 && sub['flex'] !== undefined) {
        if (sub['flex'] === 0) {
          sub[param] = 0;
        } else {
          sub[param] = (node[param] - tempLen) * (sub['flex'] / flexs);
          // 重绘 webgl 背景色
          if (sub._graphics) {
            sub.graphics.drawRect(
              0,
              0,
              sub.width,
              sub.height,
              sub._graphics._one[4],
              sub._graphics._one[5],
              sub._graphics._one[6],
            );
          }
        }
      }
      sw += sub.width + space;
      sh += sub.height + space;
    }
    for (let i = 0; i < node.numChildren; i++) {
      const sub = node.getChildAt(i) as air.Sprite;
      if (direction === 'row') {
        if (justify === 'start') {
          sub.x = w;
          w += sub.width + space;
        } else if (justify === 'end') {
          w += sub.width + space;
          sub.x = node.width - w + space;
        } else if (justify === 'center') {
          sub.x = (node.width - sw + space) / 2 + w;
          w += sub.width + space;
        } else if (justify === 'between') {
          sub.x = w + space;
          w +=
            sub.width +
            (node.width - sw) / (node.numChildren - 1) +
            space / (node.numChildren - 1);
        }
        if (align === 'start') {
          sub.y = 0;
        } else if (align === 'center') {
          sub.y = (node.height - sub.height) / 2;
        } else if (align === 'end') {
          sub.y = node.height - sub.height;
        }
      } else if (direction === 'col') {
        if (justify === 'start') {
          sub.y = h;
          h += sub.height + space;
        } else if (justify === 'end') {
          h += sub.height + space;
          sub.y = node.height - h + space;
        } else if (justify === 'center') {
          sub.y = (node.height - sh + space) / 2 + h;
          h += sub.height + space;
        } else if (justify === 'between') {
          sub.y = h + space;
          h +=
            sub.height +
            (node.height - sh) / (node.numChildren - 1) +
            space / (node.numChildren - 1);
        }
        if (align === 'start') {
          sub.x = 0;
        } else if (align === 'center') {
          sub.x = (node.width - sub.width) / 2;
        } else if (align === 'end') {
          sub.x = node.width - sub.width;
        }
      }
    }
  }
}

const flex = {
  rule,
  full,
};

export default flex;
