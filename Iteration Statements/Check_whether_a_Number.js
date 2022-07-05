// Check whether a Number is a prime or not.
// Write a program which takes  a number from user and check whether number is prime number or not a prime number.
// Note: You have to complete Prime_Check. No need to take any input.


const Prime_Check = (N) => 
{
	 let a=0;
for(i=2; i<N; i++){
  if (N%i!==0){
    a++;
  }
}
if (a===N-2) {
 return ("YES");
}
 else {
    return ("NO");
 }
};

