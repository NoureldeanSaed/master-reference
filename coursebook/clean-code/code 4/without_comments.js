function a_thing(arr)
{
    function do_stuff(i)
  {
        for( ; i > 0 && arr[i-1] > arr[i]; i--)
        {
            var t = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = t;
        }
    }
    for (var i = 1; i < arr.length; i++)
    {
        if (arr[i-1] > arr[i]) do_stuff(i);
    }
    return arr;
}

var array = [3, 0, 2, 5, -1, 4, 1];
console.log("Original Array Elements");
console.log(array);
console.log("Sorted Array Elements");
console.log(a_thing(array));