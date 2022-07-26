//Q1____________________________________________________________________________________________________________________________
//Create one function with zero parameter having a console statement;

function firstQuestions() {
    console.log ("This is first questions");
}
firstQuestions();

//Q2____________________________________________________________________________________________________________________________
//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function secondQuestions (a,b) {
    let sum;
    sum=a+b;
    console.log (sum);
}
secondQuestions(3,4);

//Q2____________________________________________________________________________________________________________________________
//Create one arrow function

const thirdQuestions=() => {
    console.log ("This is third questions");
}
thirdQuestions();

//Q4____________________________________________________________________________________________________________________________
//"Print output: 
var x = 21;
var girl = function () {
    console.log(x); 
    var x = 20;
};
girl ();

//output: undefined,because initialization is not hoisted

//Q5_________________________________________________________________________________________________________________________
//"Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};

//output: undefined 21

//Q6_________________________________________________________________________________________________________________________
//"Print output
var x = 21;
a();
b();
console.log(a);
a = function() {  
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};

//output: [ReferenceError]

//Q7______________________________________________________________________________________________________________________________-
//Write a function that accepts parameter n and returns factorial of n

const factorial=(n) => {
    let count=1;
    for (let i=1; i<=n; i++){
        count=count*i
    }
    return count;
}
console.log(factorial(7));