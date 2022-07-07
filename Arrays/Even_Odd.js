
const findEvenOdd = (N, Arr) => 
{
  let B=[], even=0, odd=0;
  for(i=0; i<N; i++) {
    if(Arr[i]%2===0){
      even=even+Arr[i];
    }
    else {
      odd=odd+Arr[i];
    }
    B=[even, odd];
  } 
  return B;
};
 
