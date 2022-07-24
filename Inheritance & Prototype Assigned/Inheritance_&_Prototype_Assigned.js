//Q1_________________________________________________________________________________________________________________________
//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype

const Parent = {
    calcuateAge() {
        console.log(`My name is ${this.fname} ${this.lName} and current age is ${2022 - this.bYear}`);

    }
}
const objectOne = Object.create(Parent);
objectOne.fname = 'Neelesh';
objectOne.lName = 'Ranjan';
objectOne.bYear = 1998;
objectOne.calcuateAge();

const objectTwo = Object.create(Parent);
objectTwo.fname = 'Ujjwal';
objectTwo.lName = 'Kumar';
objectTwo.bYear = 1988;
objectTwo.calcuateAge();

//Q3_________________________________________________________________________________________________________________________
//Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

function arraySum(a) {
    let sum = 0;
    for (let i in a) {
        sum += a[i];
    }
    return sum;
}
let array = [1, 2, 3, 4];
let Sum = arraySum(array);


//Q4________________________________________________________________________________________________________________________________
//Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
  
Person.prototype.nationality = "English";
const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather);
console.log("The nationality of my father is " + myFather.nationality);


