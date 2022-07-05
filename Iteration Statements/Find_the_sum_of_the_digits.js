// Write a program that takes a number from the user and get the sum of the digits present in the number.
// Note: You have to complete Number_Sum. No need to take any input.


const Number_Sum = (N) => 
{
	let sum=0;
	for(let i=1; i<=6; i++){
	  N=N/10;
	  let b=N-~~N;
	  b=b*10;
	  b=~~b;
	  sum=sum+b;
	}
   return (sum);
};

