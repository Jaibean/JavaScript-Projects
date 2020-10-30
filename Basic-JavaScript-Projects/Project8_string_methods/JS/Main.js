//concat() Method
function bringTogether() {
	var part_1 = "Jaimie ";
	var part_2 = "is ";
	var part_3 = "getting ";
	var part_4 = "tired.";
	var sleepy = part_1.concat(part_2, part_3, part_4);
	document.getElementById("con").innerHTML = sleepy;
}  

//Slice Method

function slice_method() {
	var sentence = "Jaimie is getting sleepy";
	var section = sentence.slice(18,25);
	document.getElementById("slice").innerHTML = section;
}

// upper case method
function uppercase() {
	var str = "Hello World!";
	var res = str.toUpperCase();
	document.getElementById("upper").innerHTML = res; 
}

// search method
function search_function() {
	var str = "Mr. Blue has a blue house";
	var n = str.search("blue");
	document.getElementById("lower").innerHTML = n;
}
// number method to string
function string_method() {
	var X = 188;
	document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
//to precision method ~ cutting a string to a specified length 
function precision_Method() {
	var Y = 93479.2468945765932;
	document.getElementById("Precision").innerHTML = Y.toPrecision(12);
}
// to fix method converts a numner into a string, rounded to a specidied number of decimals
function myFix() {
  var num = 5.56789;
  var n = num.toFixed(10);
  document.getElementById("fixed").innerHTML = n;
}

// primitive value
function myFunction() {
  var num = 15;
  var n = num.valueOf()
  document.getElementById("prim").innerHTML = n;
}
