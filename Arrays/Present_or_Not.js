
const Find_Num = (array,N,M) => 
{
  let a=0;
  for(let i=0; i<N; i++){
  if (array[i]==M){
    a++;
  }
  }
  if(a>=1){
   return ("YES");
  }
  else {
    return ("NO");
  }
};
 
