// switch statement

function fruit_function() {
	var fruit_Output
	var fruits = document.getElementById("fruit_Input").value;
	var fruit_String = " is a great fruit";
	switch(fruits) {
		case "Strawberry":
			fruit_Output = "Strawberry" + fruit_String;
		break;
		case "Blackberry":
			fruit_Output = "Blackberry" + fruit_String;
		break;
		case "blueberry":
			fruit_Output = "blueberry" + fruit_String;
		break;
		case "raspberry":
			fruit_Output = "raspberry" + fruit_String;
		break;
		case "pinapple":
			fruit_Output = "pinapple" + fruit_String;
		break;
		default: 
		fruit_Output = "Please enter a fruit as written on the above list.";
	}
	document.getElementById("Output").innerHTML = fruit_Output;
	}
// using get element by class name 
function change() {
	var A = document.getElementsByClassName("click");
	A[0].innerHTML = "Look it changed!";
}
// using javaScript to add graphics to a canvas
/*var c = document.getElementById("can");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(200, 100, 40, 0, 2*Math.PI);
ctx.stroke(); */

// HTML canvas createLinearGradient() Method

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);