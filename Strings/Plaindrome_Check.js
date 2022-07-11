 
var Palin_Check = (str) =>
{
	 let rev,count=0;
	 rev=str.split().reverse().join("");
	 for(let i=0; i<=str.length; i++){
	   if (str[i]===str[str.length-i-1]){
	     count++;
	   }
	 }
	   if(count===str.length+1){
	     return "True";
	   }
	   else {
	     return "False";
	   }
}

