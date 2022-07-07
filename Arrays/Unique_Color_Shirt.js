
function Unique_Shirts (arr,N) {
    let a=0, count=0;
    for(i=0; i<N; i++){
      for(j=0; j<N; j++){
        if(arr[i]===arr[j]){
          a++
        }
        }
        if(a===1){
          count++
      }
      a=0;
    }
    return (count);
  }
  
  