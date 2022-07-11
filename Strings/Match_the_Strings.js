
var String_Match = (S1,S2) => 
{
  let count=0;
    if(S1>S2 || S2>S1){
      return "NO";
    }
    else {
      for(let i=0; i<=S1.length; i++){
        if(S2[i]===S1[i]){
          count++;
        }
      }
    }
      if(count===S1.length+1){
        return "YES";
      }
      else{
        return "NO";
      }
};
 
