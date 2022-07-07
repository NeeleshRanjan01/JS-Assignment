
const isAllPass = (N, Arr) => 
{
   let a=0;
  for(let i=0; i<N; i++){
  if (Arr[i]>=32){
    a++;
  }
  }
  if(a===N){
   return ("YES");
  }
  else {
    return ("NO");
  }
};
 
