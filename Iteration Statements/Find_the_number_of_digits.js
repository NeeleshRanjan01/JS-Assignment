// Take a number from the user and print the count of digits in that number.
// Note: You have to complete Find_Digits. No need to take any input.

const Find_Digits = (N) => 
{
  for (let i=1; i<=10; i++) {
   N=N/10;
   N=~~N;
   if(N<10) {
   return (i+1);
   }
  }
 
};
