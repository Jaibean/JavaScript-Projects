function myFunction() {
	var addition = 3 + 3;
	document.getElementById("Math").innerHTML = "3 + 3 = " + addition;  //Additon operator
}

function mySubtraction() {
	var subtraction = 6 - 3;
	document.getElementById("MathS").innerHTML = "6 - 3 = " + subtraction;  //subtraction operator
}

function myMultiplication() {
	var multiplication = 3 * 3;
	document.getElementById("MathM").innerHTML = "3 * 3 = " + multiplication; //multiplication operator 
}

function myDivision() {
	var division = 6 / 3;
	document.getElementById("MathD").innerHTML = "6 / 3 = " + division; // division operator 
}

function more_math() {
	var simple_math = (5 + 5) * 30 / 6 - 4;
	document.getElementById("more").innerHTML = "the result is " + simple_math; // multiple operators
}

function modulus() {
	var mod = 25 % 6;
	document.getElementById("modop").innerHTML = "remainder of 25 divided by 6 is " + mod;  //modulus operator which is getting a remainder as the result
}

function negation() {
	var neg = 10;
	document.getElementById("negop").innerHTML = -neg;  //negation operator which is a unary operator this one just returns the opposite of the integer
}

function increment(){
	var x = 5;
	x++;
	document.getElementById("inc").innerHTML = x;
}
function decrement(){
	var y = 5;
	y--;
	document.getElementById("dec").innerHTML = y;
}


window.alert(Math.random());

window.alert(Math.random() * 100);

