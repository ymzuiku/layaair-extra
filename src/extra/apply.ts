function apply(target: any, obj: Object) {
  for (const k in obj) {
    target[k] = obj[k];
  }
}
export default apply;
