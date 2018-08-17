function tryfn(obj) {
  try {
    return obj();
  } catch (error) {
    return undefined;
  }
}

export default tryfn;
