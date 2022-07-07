 
 function arrayMin(arr) {
    let min = arr[0];
      for (let x of arr){
      if (min > x){
      min = x;
      }
    }
       return (min);
}

function arrayMax(arr) {
 let max = arr[0];
      for (let y of arr){
      if (max < y){
      max = y;
      }
    }
       return (max)
}

