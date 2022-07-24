//Q1_______________________________________________________________________________________
//Write the code to access element which is having tag as "h1"

let question1 = document.getElementById("text");
console.log(question1.innerText);

//Q2_______________________________________________________________________________________
//Write the code to access element which is having tag as "h1"

let question2 = document.getElementsByTagName("h1");
console.log(question2[0].innerText);


//Q3_______________________________________________________________________________________
//Write the code to access element which is having class as "box"

let question3 = document.getElementsByClassName("box");
console.log(question3[0].innerText);

//Q4_______________________________________________________________________________________
//"<h1>Hello </h1>
//Change the heading from ""Hello"" to ""Hello World"" using DOM functions"

let question4 = document.getElementsByTagName("h1");
console.log(question4[1].innerText="Hello World");

//Q5_______________________________________________________________________________________
//Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function flexDirection() {
    let question5 = document.getElementsByClassName("mCards");
    question5[0].style.flexDirection="column";
}

//Q6_______________________________________________________________________________________




//Q7_______________________________________________________________________________________
//"<h1>Hello </h1>
//Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"


let headText=document.createElement("h1");
headText.innerText="7. Heading"
document.querySelector("body").appendChild(headText);
headText.setAttribute("id", "heading");
document.getElementById("heading").style.color = "red";


//Q8_______________________________________________________________________________________
//Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function changeName() {
    document.getElementsByClassName("button")[0].innerText="Welcome to Elevation academy";
}

//Q9______________________________________________________________________________________________
//Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function liveTime() {
const dateTime = new Date();
    let hour = dateTime.getHours();
    let min =dateTime.getMinutes();
    let secs=dateTime.getSeconds();
    let season=document.getElementsByClassName("season");

    if (hour>=12){
        season[0].innerHTML="PM";
    }
    else {
        season[0].innerHTML="AM";  
    }

    if(hour>12){
        hour=hour-12;
    }
    if(hour<10){
        hour="0"+hour;
    }

    if(min<10){
        min="0"+min;
    }

    if(secs<10){
        secs="0"+secs;
    }
    document.getElementsByClassName("timeText")[0].innerHTML=hour;
    document.getElementsByClassName("timeText")[1].innerHTML=min;
    document.getElementsByClassName("timeText")[2].innerHTML=secs;

}

setInterval(liveTime, 1);


//Q10______________________________________________________________________________________________
//Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

const yearSelect=()=>{

document.getElementsByClassName("storeValue")[0].innerText=document.getElementById("year").value;

}

//Q11______________________________________________________________________________________________
//"Create a form having name ,email, phone no. , birth year 
//Add validations - phone no. should start with 91 , it should be 10 digits
//email should be domain prepbytes.com
//birth year should be > 95"










    
