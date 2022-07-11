
var Count_Occ = (s) => 
{
  let count=0, a;
  for(let i=0; i<=s.length; i++){
    for (let j=0; j<=s.length; j++){
      if(s[i]===s[j]){
      count++;
      }
    }
    if(count>1 ){
      a+=s[i]+count;
    }
    count=0;
  }
 
  return(a);
  
};
 
