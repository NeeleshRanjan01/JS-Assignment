
const countCharacters = (S) => 
{
  let B=[], countA=0, countD=0;
  for(let i=0; i<=S.length; i++){
    if(S[i]==="A"){
      countA++;
    }
    if(S[i]==="D"){
      countD++;
    }
  }
    B[0]=countA;
    B[1]=countD;
    return B;
};
 
