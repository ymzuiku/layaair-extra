import memoize from '../utils/memoize';

// recursion
const recursionGet = memoize(function(
  node: Laya.Sprite,
  childs: Array<Laya.Sprite>,
  tree: Object,
) {
  for (let i = 0; i < childs.length; i++) {
    let { name, x, y, width, height, _childs } = childs[i];
    let temp = { name, x, y, width, height };
    let obj = {};
    for (let k in temp) {
      if (temp[k]) {
        obj[k] = temp[k];
      }
    }
    const className = name || (childs[i].__proto__.__className as string);
    const key = className.split('.')[2] + '-' + i;
    tree[key] = obj;
    recursionGet(obj, _childs, tree[key]);
  }
});

function getNodeTree(node: Laya.Sprite = Laya.stage, log?: boolean) {
  let tree = {};
  let { name, x, y, width, height, _childs } = node;
  let temp = { name, x, y, width, height };
  let obj = {};
  for (let k in temp) {
    if (temp[k]) {
      obj[k] = temp[k];
    }
  }
  recursionGet(obj, _childs, tree);
  if (log) {
    console.log(tree);
  }
  return tree;
}

export default getNodeTree;
