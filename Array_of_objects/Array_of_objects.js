let studentRecords = [
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 }]


//Question-1_______________________________________________________________________________________
// We are interested in retrieving only the name of the students and all the names should be in caps.
//Output : ['JOHN', 'BABA', 'YAGA', 'WICK'];

let studentName=[];
for(let i=0; i<studentRecords.length; i++){
    studentName.push(studentRecords[i].name.toUpperCase());
}
console.log(studentName);

//Question-2_______________________________________________________________________________________
//"Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
//[{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

let marks=[]
for (let i=0; i<studentRecords.length; i++){
    if(studentRecords[i].marks>50){
        marks.push(studentRecords[i]);
    }
}
console.log(marks);

//Question-3_______________________________________________________________________________________
//Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let marksAndID=[]
for (let i=0; i<studentRecords.length; i++){
    if(studentRecords[i].marks>50 && studentRecords[i].id>120){
        marksAndID.push(studentRecords[i]);
    }
}
console.log(marksAndID);

//Question-4_______________________________________________________________________________________
//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

let totalMarks=0
for (let i=0; i<studentRecords.length; i++){
    totalMarks=totalMarks + studentRecords[i].marks;
}
console.log(totalMarks);

//Question-5_______________________________________________________________________________________
//Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let marksB=[];
for(let i=0; i<studentRecords.length; i++){
    if(studentRecords[i].marks>50){
        marksB.push(studentRecords[i].name);
}
}
console.log(marksB);

//Question-6_______________________________________________________________________________________
// Question 6: This time we are required to print the sum of marks of the students with id > 120.

let marksC=0;
for(let i=0; i<studentRecords.length; i++){
    if(studentRecords[i].id>120){
        marksC=marksC + studentRecords[i].marks;
}
}
console.log(marksC);

//Question-7_______________________________________________________________________________________
//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let marksD=0;
for(let i=0; i<studentRecords.length; i++){
    if(studentRecords[i].marks>50){
        marksD=marksD + studentRecords[i].marks;
    }
        else {
            marksD=marksD + studentRecords[i].marks+15;
        }
}
console.log(marksD);


//Question-8_______________________________________________________________________________________
//Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 


function Student(studentName, studentClass, studentRollno)
{
    this.name = studentName,
    this.class = studentClass,
    this.rollno = studentRollno
}

const student1 = new Student('Neelesh',12,101);
console.log(student1);

const student2 = new Student('Kundu',11,104);
console.log(student2);

const student3 = new Student('Premsagar',12,124);
console.log(student3);

const student4 = new Student('Ujjwal',11,121);
console.log(student4);

const student5 = new Student('Deva',10,122);
console.log(student5);

const student6 = new Student('Sourav',12,106);
console.log(student6);
