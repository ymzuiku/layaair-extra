function drawRadius(w, h, r) {
  return [
    ['moveTo', r, 0], //画笔的起始点，
    ['arcTo', w, 0, w, r, r], //p1（500,0）为夹角B，（500,30）为端点p2
    ['arcTo', w, h, w - r, h, r], //p1（500,300）为夹角C，（470,300）为端点p2
    ['arcTo', 0, h, 0, h - r, r], //p1(0,300)为夹角D，（0,270）为端点p2
    ['arcTo', 0, 0, r, 0, r], //p1(0,0)为夹角A，（30,0）为端点p2
  ];
}

export function drawRect(
  sprite: Laya.Sprite,
  bgColor: string,
  lineColor?: string,
  lineWidth?: number,
) {
  sprite.graphics.drawRect(
    0,
    0,
    sprite.width,
    sprite.height,
    bgColor,
    lineColor,
    lineWidth,
  );
}

export function drawRectOfRadius(
  sprite: Laya.Sprite,
  bgColor: string,
  lineColor?: string,
  lineWidth?: number,
  radius?: number,
) {
  sprite.graphics.drawPath(
    0,
    0,
    drawRadius(sprite.width, sprite.height, radius),
    { fillStyle: bgColor },
    lineWidth
      ? {
          strokeStyle: lineColor,
          lineWidth: lineWidth,
        }
      : undefined,
  );
}
