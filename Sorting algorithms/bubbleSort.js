// worst case n squared O(n power 2)
// with noswaps : BigO = O(n) : linear time best case

function bubbleSort(arr){
  var noSwaps;
  for(var i = arr.length; i > 0; i--){
    noSwaps = true;
    for(var j = 0; j < i - 1; j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        noSwaps = false;         
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);
let array = [
  8, 1, 2, 3, 4, 5, 6, 7, 99, 555, 77, 165, 264, 598, 684, 365, 259, 965, 573,
  845, 753, 863, 456, 817, 222, 666, 9, 1566, 435, 986,
]
console.log(bubbleSort(array));
console.log(array.length);
