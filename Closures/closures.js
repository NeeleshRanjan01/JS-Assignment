//Q1__________________________________________________________________________________________________________________________
   function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());



//Q2__________________________________________________________________________________________________________________________
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();


//Output - 1 , 0

//Q3__________________________________________________________________________________________________________________________
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged?
    }, 1000);
}

  //Output after 1 sec (3 3 3)

//Q4__________________________________________________________________________________________________________________________





//Q1__________________________________________________________________________________________________________________________