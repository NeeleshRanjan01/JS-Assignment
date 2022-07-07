
const highAge = (N, Arr) => 
{
  let a=0;
  let B=[];
  for(let i=0; i<N; i++){
  if (Arr[i]>=18){
    B[a++]=Arr[i];
  }
  }
  return B;
    
};
 
