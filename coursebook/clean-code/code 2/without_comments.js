function func(arr, compare_Function) {

  function tmp(a, b) {
   return a - b;
   }
  var min = 0;
  var index = 0;
  var temp = 0;

  do_stuff = do_stuff || tmp;

  for (var i = 0; i < arr.length; i += 1) {
    index = i;
    min = arr[i];

    for (var j = i + 1; j < arr.length; j += 1) {
      if (do_stuff(min, arr[j]) > 0) {
        min = arr[j];
        index = j;
      }
    }

    temp = arr[i];
    arr[i] = min;
    arr[index] = temp;
  }

  return arr;
}

console.log(func([3, 0, 2, 5, -1, 4, 1], func(a, b) { return a - b; }));
console.log(func([3, 0, 2, 5, -1, 4, 1], func(a, b) { return b - a; }));