var maxArea = function (height) {
    let maxarray = [];
    let leftpointer = 0;
    let rightpointer = height.length - 1;
    while (leftpointer < height.length && rightpointer >= 0) {
      if (height[leftpointer] <= height[rightpointer]) {
        maxarray.push(Math.abs(leftpointer - rightpointer) * height[leftpointer]);
        leftpointer++;
      } else {
        maxarray.push(
          Math.abs(leftpointer - rightpointer) * height[rightpointer]
          
        );
        rightpointer--;
      }
      
      
    }
  
    return Math.max(...maxarray);
  };
  
  maxArea(arr)