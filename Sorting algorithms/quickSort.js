function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    swap(arr, start, swapIdx);
    return swapIdx;
  }


  console.log(pivot([5,4,7,8,2,9,1,10,3]));
  
  
  function quickSort(arr, left = 0, right = arr.length -1){
      if(left < right){
          let pivotIndex = pivot(arr, left, right)
          quickSort(arr,left,pivotIndex-1);
          quickSort(arr,pivotIndex+1,right);
        }
       return arr;
  } 
             
  quickSort([100,-3,2,4,6,9,1,2,5,3,23])
  

  const pivot = (arr, start = 0 , end = arr.length - 1 ) => {

    

  }

  const quickSort = (arr, left = 0, right = arr.length - 1) => {
    
  }