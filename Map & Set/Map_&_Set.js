//Q1________________________________________________________________________________________________________
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"

let str = "abcadeecfb";
let strArray =str.split("");
const letters = new Set(strArray);
console.log (letters);


//Q2________________________________________________________________________________________________________
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"
const map = new Map();
let LettersArray= Array.from(letters)
let count =0;
for(i=0; i<LettersArray.length; i++){
    for(j=0; j<strArray.length; j++){
      if(LettersArray[i]===strArray[j]){
      count++;
    }
}
map.set(LettersArray[i],count);
count=0;
}
console.log(map);






