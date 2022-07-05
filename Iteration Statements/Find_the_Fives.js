// Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.
// Note: You have to complete Find_Five. No need to take any input.


const Find_Five = (N) => 
{
  let a=0;
	for(let i=1; i<=9; i++){
	  N=N/10;
	  let b=N-~~N;
	  b=b*10;
	  b=~~b;
	  if (b===5){
	    a++;
	  }
	}
	return (a);
	 
};
