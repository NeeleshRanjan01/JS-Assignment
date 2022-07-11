 
var Game_Winner = (S) => 
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
   if(countA>countD){
     return "Aditya";
   }
   else if (countA<countD){
     return "Danish";
   }
   else {
     return "Draw";
   }
    
}
 
