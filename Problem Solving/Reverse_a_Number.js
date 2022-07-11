 var Reverse_Number = (N) => 
{
  let b=0, a;
  for(i=0; N!==0; i++){
    a = N %10;
    b = b*10 + a;
    N=N/10;
    N=~~N
  }
  return (b);
};
 
