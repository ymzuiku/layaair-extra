export function colorFilter(target: Laya.Sprite, hex: string) {
  const color = hexToRgbA(hex);
  if (color) {
    const redMat = [
      color[0], 0, 0, 0, 0, //R
      0, color[1], 0, 0, 0, //G
      0, 0, color[2], 0, 0, //B
      0, 0, 0, color[3], 0, //A
    ];
    //创建一个颜色滤镜对象,红色
    target.filters = [new Laya.ColorFilter(redMat)];
  }
}

function hexToRgbA(hex) {
  if (!hex) return undefined;
  if (hex.length === 7) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16) / 255,
          parseInt(result[2], 16) / 255,
          parseInt(result[3], 16) / 255,
          1,
        ]
      : undefined;
  } else if (hex.length === 9) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
      hex,
    );
    return result
      ? [
          parseInt(result[1], 16) / 255,
          parseInt(result[2], 16) / 255,
          parseInt(result[3], 16) / 255,
          parseInt(result[4], 16) / 255,
        ]
      : undefined;
  }
  return undefined;
}
