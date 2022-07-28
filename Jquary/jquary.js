//Q1______________________________________________________________________________________________________________________________

//Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible

$(".hide").click(function(){
    $("h1").hide();

});
$(".show").click(function(){
    $("h1").show();

});

//Q2______________________________________________________________________________________________________________________________
//Create an ajax call, by using this api "https://jsonplaceholder.typicode.com/todos/12" and print the title as the heading of the page.

$(".ajax").click(function () {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/3",
        type: "GET",
        success: function (data) {
            document.querySelector("h3").innerText = data.title;
        }
    })
})