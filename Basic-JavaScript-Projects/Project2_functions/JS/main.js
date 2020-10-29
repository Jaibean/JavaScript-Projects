function project() {
	var str = "Hello, world";
	var result = str.fontcolor("green");
	document.getElementById("press").innerHTML = result; //function with two variables and an event handler
}

function myFunction() {
	var sentence = "I am learning";
	sentence += " a lot from this book!";
	document.getElementById("concatenate").innerHTML = sentence;  //concatenation within a function using operators 
}

function fun(x, y){
	return x + y;
}

var test = fun(4,3);
document.getElementById("demo").innerHTML = test;

