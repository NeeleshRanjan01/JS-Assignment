 
function Birthday_Game(arr,D ,M) {
    let count =0;
    for(let i = 0; i<=arr.length-M; i++){
      let a =0;
      for(let j = i; j<i+M; j++){
        a =a+arr[j];
      }
      if(a===D){
        count++;
      }
    }
    return count;
  }