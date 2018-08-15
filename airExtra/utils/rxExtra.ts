function rxExtra(rx) {
  function rxFor(arr) {
    const type = Object.prototype.toString.call(arr);
    return rx.Observable.create(function(observer) {
      if (type === '[object Undefined]') {
      } else if (type === '[object Object]') {
        for (let key in arr) {
          observer.next(key);
        }
      } else if (type === '[object Number]') {
        for (let i = 0; i < arr; i++) {
          observer.next(arr[i]);
        }
      } else {
        for (let i = 0; i < arr.length; i++) {
          observer.next(arr[i]);
        }
      }
      observer.complete();
    });
  }
  rx['for'] = rxFor;
}

export default rxExtra;
