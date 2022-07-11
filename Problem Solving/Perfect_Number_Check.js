 var Perfect_Check = (N) => 
{
  let sum=0;
    let a=[],b=0;
  for (let i=1; i<N; i++){
      if(N%i===0){
        a[i-1]=i;
      }
  }
    for (let j=0; j<a.length; j++) {
    sum=sum+a[j];
  }
     if(sum===N || 1===N){
       return ("YES");
     }
     else {
        return ("NO");
     }    
        
};
 
