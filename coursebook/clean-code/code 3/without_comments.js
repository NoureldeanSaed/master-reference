function do_stuff(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function a_thing(arr){

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                do_stuff(arr, j, j+1);
            }
        }
    }

    return arr;
}
console.log(a_thing([3, 0, 2, 5, -1, 4, 1]));